// 1. IMPORT FIREBASE SDK (Gunakan versi CDN Modular)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

// 2. KONFIGURASI FIREBASE (Wajib diisi dengan data dari Firebase Console milikmu!)
const firebaseConfig = {
  apiKey: "API_KEY_KAMU",
  authDomain: "PROJECT_ID.firebaseapp.com",
  databaseURL: "https://PROJECT_ID-default-rtdb.firebaseio.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// 3. VARIABEL GLOBAL ML (TETAP SAMA)
const SCALER_MEANS = [328.4139841688654, 171.19045334612616, 63982.37949148477, 5.380336927108956, 193933.28950587672]; 
const SCALER_SCALES = [293.38974847156624, 100.04697239330497, 86582.92174117625, 1.0146251243960756, 374267.0206409999];

let session; 
const MAX_POINTS = 500;
const MAX_LUX = 1000;
let timeCounter = 0;
let luxLineData = [];
let statusBarData = [];

let lineCanvas, lineCtx, barCanvas, barCtx;

// 4. SAAT WEB DIMUAT
window.onload = () => {
    lineCanvas = document.getElementById("lineChart");
    lineCtx = lineCanvas.getContext("2d");
    barCanvas = document.getElementById("barChart");
    barCtx = barCanvas.getContext("2d");
    
    initModel();
    mulaiMendengarkanFirebase(); // Menyalakan pendeteksi data realtime
};

// 5. INISIALISASI MODEL ML & PREDIKSI (TETAP SAMA)
async function initModel() {
    try {
        console.log("🧠 Memuat model ONNX...");
        session = await ort.InferenceSession.create('./model_esi.onnx');
        console.log("✅ Model ESI berhasil dimuat!");
    } catch (e) {
        console.error("❌ Gagal memuat model:", e);
    }
}

async function getMLPrediction(lux, waktu) {
    if (!session) return 0;
    const lux_time = lux * waktu;
    const log_lux = Math.log(lux + 1);
    const lux_squared = Math.pow(lux, 2);
    const rawFeatures = [lux, waktu, lux_time, log_lux, lux_squared];
    const scaledFeatures = rawFeatures.map((val, i) => (val - SCALER_MEANS[i]) / SCALER_SCALES[i]);

    try {
        const inputTensor = new ort.Tensor('float32', new Float32Array(scaledFeatures), [1, 5]);
        const feeds = { float_input: inputTensor };
        const results = await session.run(feeds);
        const output = results[Object.keys(results)[0]]; 
        return Math.max(0, output.data[0]); 
    } catch (e) { return 0; }
}

// 6. LOGIKA FIREBASE (PENGGANTI SERIAL KABEL)
function mulaiMendengarkanFirebase() {
    // Arahkan ke folder/node tempat ESP32 mengirim data di Firebase
    const sensorRef = ref(db, 'SensorData'); 
    
    onValue(sensorRef, async (snapshot) => {
        const data = snapshot.val();
        if (data) {
            // Mengambil nilai dari Firebase
            const lux = parseFloat(data.Lux) || 0;
            const waktu = parseFloat(data.Waktu) || 0;
            const jarak = data.Jarak || "-";

            // Hitung ESI dengan Machine Learning
            const esiML = await getMLPrediction(lux, waktu);

            // Update Angka di UI HTML
            document.getElementById("luxValue").textContent = lux.toFixed(1);
            document.getElementById("distanceInfo").textContent = "Estimasi jarak: " + jarak;
            document.getElementById("exposureDuration").textContent = "Durasi Paparan: " + waktu + " menit";
            document.getElementById("esiNumber").textContent = esiML.toFixed(2);

            updateEsiIndicator(esiML);
            
            // Kirim balik status bahaya ke ESP32 agar LED menyala sesuai
            sendFeedbackToFirebase(esiML);

            const category = getEsiCategory(esiML);
            updateCharts(lux, category);
        }
    });
}

// 7. KIRIM PERINTAH KE ESP32 VIA FIREBASE (Bukan Kabel Lagi)
function sendFeedbackToFirebase(esi) {
    let cmd = esi < 0.5 ? "NYAMAN" : esi < 1.0 ? "WASPADA" : esi < 2.0 ? "LELAH" : "BAHAYA";
    
    // ESP32 nanti harus di-coding untuk membaca path 'Feedback/Status' ini
    set(ref(db, 'Feedback'), {
        Status: cmd
    });
}

// ==========================================
// KODE UI GRAFIK DAN INDIKATOR DI BAWAH INI TETAP SAMA PERSIS
// ==========================================

function getEsiCategory(esi) {
    if (esi < 0.5) return "NYAMAN";
    if (esi < 1.0) return "MULAI LELAH";
    if (esi < 2.0) return "LELAH";
    return "SANGAT LELAH";
}

function updateEsiIndicator(esi) {
    const indicator = document.getElementById("esiIndicator");
    const numberBox = document.getElementById("esiNumber");
    indicator.className = "indikator-string";
    numberBox.className = "angka-esi";

    if (esi < 0.5) {
        indicator.textContent = "NYAMAN";
        indicator.classList.add("aman");
        numberBox.classList.add("aman");
    } else if (esi < 1.0) {
        indicator.textContent = "MULAI LELAH";
        indicator.classList.add("waspada");
        numberBox.classList.add("waspada");
    } else if (esi < 2.0) {
        indicator.textContent = "LELAH";
        indicator.classList.add("lelah");
        numberBox.classList.add("lelah");
    } else {
        indicator.textContent = "SANGAT LELAH";
        indicator.classList.add("sangat-lelah");
        numberBox.classList.add("sangat-lelah");
    }
}

function updateCharts(luxValue, status) {
    luxLineData.push({ time: timeCounter++, lux: luxValue, status: status });
    if (luxLineData.length > MAX_POINTS) luxLineData.shift();
    statusBarData = [{ value: luxValue, status: status }];
    drawLineChart();
    drawBarChart();
}

function drawLineChart() {
    if (!lineCtx) return;
    const ctx = lineCtx;
    ctx.clearRect(0, 0, lineCanvas.width, lineCanvas.height);
    const p = 50; 
    const w = lineCanvas.width - p * 2;
    const h = lineCanvas.height - p * 2;

    ctx.strokeStyle = "#9ca3af";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(p, p); 
    ctx.lineTo(p, p + h); 
    ctx.lineTo(p + w, p + h); 
    ctx.stroke();

    ctx.fillStyle = "#9ca3af";
    ctx.font = "12px Roboto";
    
    ctx.save();
    ctx.translate(p - 35, p + h / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = "center";
    ctx.fillText("Intensitas (Lux / ESI)", 0, 0);
    ctx.restore();

    ctx.textAlign = "center";
    ctx.fillText("Waktu Paparan (Simulasi)", p + w / 2, p + h + 35);

    const currentMaxLux = Math.max(...luxLineData.map(d => d.lux), 100);
    const yMax = currentMaxLux * 1.2; 
    const maxT = Math.max(...luxLineData.map(d => d.time), MAX_POINTS);

    ctx.lineWidth = 2.5;
    ctx.lineJoin = "round";

    if (luxLineData.length > 0) {
        ctx.beginPath();
        luxLineData.forEach((d, i) => {
            const x = p + (d.time / maxT) * w;
            const y = p + h - (d.lux / yMax) * h;

            if (i === 0) ctx.moveTo(x, y);
            else {
                ctx.strokeStyle = d.status === "NYAMAN" ? "#22c55e" : 
                                 d.status === "MULAI LELAH" ? "#3b82f6" : 
                                 d.status === "LELAH" ? "#facc15" : "#ef4444";
                ctx.lineTo(x, y);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x, y);
            }
        });
    }
}

function drawBarChart() {
    if (!barCtx) return;
    const ctx = barCtx;
    ctx.clearRect(0, 0, barCanvas.width, barCanvas.height);
    
    if (statusBarData.length > 0) {
        const d = statusBarData[0];
        const barW = (Math.min(d.value, MAX_LUX) / MAX_LUX) * (barCanvas.width - 40);
        
        const gradient = ctx.createLinearGradient(0, 0, barCanvas.width, 0);
        gradient.addColorStop(0, "#22c55e"); 
        gradient.addColorStop(0.5, "#facc15"); 
        gradient.addColorStop(1, "#ef4444"); 

        ctx.fillStyle = gradient;
        ctx.roundRect(20, 15, barW, 30, 8);
        ctx.fill();
        
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 12px Roboto";
        ctx.fillText(d.value.toFixed(1) + " LUX", 25, 35);
    }
}

// 8. EXPORT FUNGSI AGAR BISA DIPANGGIL DI HTML (Karena pakai type="module")
window.resetSimulation = function() { location.reload(); };