// ======================
// TIMER
// ======================
let timeLeft = 30 * 40; //  menit

// ======================
// ELEMENT HTML TIMER
// ======================
const timerEl = document.getElementById("timer");

// ======================
// DATA QUIZ (SOAL ADA DI SINI)
// ======================
const quizData = [
  {
    question: "Radiasi sering disebut berbahaya karena tidak dapat dirasakan secara langsung oleh indra manusia. Konsekuensi paling krusial dari sifat ini dalam konteks keselamatan radiasi adalah …",
    options: [
      "Radiasi selalu menimbulkan efek akut",
      "Paparan dapat terakumulasi tanpa disadari hingga melampaui batas aman",
      "Radiasi hanya berbahaya pada kecelakaan besar",
      "Radiasi hanya memengaruhi jaringan luar tubuh",
    ],
    answer: 1,
    explanation: "B. Radiasi sering disebut berbahaya karena tidak dapat dirasakan secara langsung oleh indra manusia. Konsekuensi paling krusial dari sifat ini dalam konteks keselamatan radiasi adalah Paparan dapat terakumulasi tanpa disadari hingga melampaui batas aman"
  },
  {
    question: "Seorang tenaga medis bekerja bertahun-tahun di ruang radiologi dengan paparan kecil tetapi berulang. Risiko kesehatan yang paling mungkin dialaminya dibandingkan efek akut adalah …",
    options: [
      "Luka bakar kulit seketika",
      "Mual dan muntah sesaat",
      "Peningkatan kemungkinan mutasi sel dan kanker",
      "Kehilangan kesadaran mendadak",
    ],
    answer: 2,
    explanation: "C. Seorang tenaga medis bekerja bertahun-tahun di ruang radiologi dengan paparan kecil tetapi berulang. Risiko kesehatan yang paling mungkin dialaminya dibandingkan efek akut adalah Peningkatan kemungkinan mutasi sel dan kanker"
  },
  {
    question: "Prinsip keselamatan radiasi diterapkan baik pada radiasi alam maupun buatan. Pernyataan berikut yang paling tepat menggambarkan kesamaan keduanya adalah …",
    options: [
      "Keduanya selalu memiliki dosis yang sama",
      "Keduanya hanya berbahaya jika bersifat radioaktif",
      "Keduanya dapat menimbulkan efek biologis jika paparannya berlebihan",
      "Radiasi alam lebih berbahaya daripada radiasi buatan",
    ],
    answer: 2,
    explanation: "C. Prinsip keselamatan radiasi diterapkan baik pada radiasi alam maupun buatan. Pernyataan berikut yang paling tepat menggambarkan kesamaan keduanya adalah Keduanya dapat menimbulkan efek biologis jika paparannya berlebihan"
  },
  {
    question: "Mengapa efek biologis radiasi, seperti kanker, sering kali baru muncul bertahun-tahun setelah paparan awal?",
    options: [
      "Radiasi baru aktif setelah waktu lama",
      "Kerusakan DNA memerlukan waktu untuk berkembang menjadi gangguan fungsi sel",
      "Radiasi hanya bekerja saat usia lanjut",
      "Sel tubuh tidak terpengaruh oleh radiasi kecil",
    ],
    answer: 1,
    explanation: "B. Mengapa efek biologis radiasi, seperti kanker, sering kali baru muncul bertahun-tahun setelah paparan awal karena Kerusakan DNA memerlukan waktu untuk berkembang menjadi gangguan fungsi sel"
  },
  {
    question: "Seorang pekerja luar ruangan mengabaikan perlindungan dari sinar matahari karena merasa tidak ada efek langsung yang dirasakan. Berdasarkan konsep keselamatan radiasi, sikap tersebut berbahaya karena …",
    options: [
      "Radiasi UV hanya berbahaya pada malam hari",
      "Efek radiasi selalu muncul secara instan",
      "Paparan kronis UV dapat merusak DNA dan meningkatkan risiko kanker kulit",
      "Radiasi matahari hanya memengaruhi suhu tubuh",
    ],
    answer: 2,
    explanation: "C. Seorang pekerja luar ruangan mengabaikan perlindungan dari sinar matahari karena merasa tidak ada efek langsung yang dirasakan. Berdasarkan konsep keselamatan radiasi, sikap tersebut berbahaya karena Paparan kronis UV dapat merusak DNA dan meningkatkan risiko kanker kulit"
  },
  {
    question: "Seorang petugas radiasi harus bekerja di area dengan sumber radiasi aktif. Ia telah menggunakan apron timbal, namun masih berada cukup lama dan berdiri sangat dekat dengan sumber radiasi tersebut. Berdasarkan prinsip Time, Distance, dan Shielding, tindakan paling tepat untuk menurunkan risiko paparan tanpa mengganti APD adalah …",
    options: [
      "Menambah ketebalan apron timbal yang digunakan",
      "Mengurangi waktu berada di area radiasi dan menjaga jarak dari sumber",
      "Mematikan sumber radiasi sementara selama bekerja",
      "Mengganti apron timbal dengan pakaian biasa agar lebih nyaman",
    ],
    answer: 1,
    explanation: "B. Seorang petugas radiasi harus bekerja di area dengan sumber radiasi aktif. Ia telah menggunakan apron timbal, namun masih berada cukup lama dan berdiri sangat dekat dengan sumber radiasi tersebut. Berdasarkan prinsip Time, Distance, dan Shielding, tindakan paling tepat untuk menurunkan risiko paparan tanpa mengganti APD adalah Mengurangi waktu berada di area radiasi dan menjaga jarak dari sumber"
  },
  {
    question: "Penggunaan beton sebagai dinding pelindung pada fasilitas nuklir lebih efektif dibandingkan aluminium karena …",
    options: [
      "Beton bersifat reflektif terhadap radiasi",
      "Beton memiliki densitas dan ketebalan efektif yang lebih besar",
      "Beton dapat menyerap semua jenis radiasi",
      "Beton mengurangi waktu paparan radiasi",
    ],
    answer: 1,
    explanation: "B. Penggunaan beton sebagai dinding pelindung pada fasilitas nuklir lebih efektif dibandingkan aluminium karena Beton memiliki densitas dan ketebalan efektif yang lebih besar"
  },
  {
    question: "Seorang tenaga medis sudah memakai apron timbal, namun tetap berdiri sangat dekat dengan sumber sinar X dan berada di ruang penyinaran terlalu lama. Berdasarkan prinsip keselamatan radiasi, pernyataan yang paling tepat adalah …",
    options: [
      "APD sudah cukup sehingga prinsip lain tidak diperlukan",
      "Risiko tetap tinggi karena prinsip time dan distance diabaikan",
      "Shielding selalu lebih dominan daripada prinsip lainnya",
      "Risiko hanya ditentukan oleh kekuatan sumber radiasi",
    ],
    answer: 1,
    explanation: "B. Seorang tenaga medis sudah memakai apron timbal, namun tetap berdiri sangat dekat dengan sumber sinar X dan berada di ruang penyinaran terlalu lama. Berdasarkan prinsip keselamatan radiasi, pernyataan yang paling tepat adalah Risiko tetap tinggi karena prinsip time dan distance diabaikan"
  },
  {
    question: "Dalam prosedur medis tertentu, dokter memilih metode pencitraan alternatif tanpa radiasi meskipun kualitas gambarnya sedikit lebih rendah. Keputusan ini mencerminkan prinsip …",
    options: [
      "Shielding",
      "Time",
      "Distance",
      "ALARA",
    ],
    answer: 3,
    explanation: "D. Dalam prosedur medis tertentu, dokter memilih metode pencitraan alternatif tanpa radiasi meskipun kualitas gambarnya sedikit lebih rendah. Keputusan ini mencerminkan prinsip ALARA"
  },
  {
    question: "Perbedaan utama APD untuk radiasi ionisasi dan non-ionisasi adalah …",
    options:[
      "APD ionisasi berfungsi menghilangkan radiasi sepenuhnya",
      "APD non-ionisasi hanya digunakan di laboratorium",
      "APD ionisasi dirancang menyerap radiasi berenergi tinggi, sedangkan APD non-ionisasi lebih bersifat penghalang fisik",
      "Keduanya memiliki prinsip kerja yang sama persis",
    ],
    answer:2,
    explanation: "C. Perbedaan utama APD untuk radiasi ionisasi dan non-ionisasi adalah APD ionisasi dirancang menyerap radiasi berenergi tinggi, sedangkan APD non-ionisasi lebih bersifat penghalang fisik"

  },
  {
    question: "Seorang petugas radiologi selalu mencatat dosis paparan hariannya masih di bawah batas tahunan yang diizinkan. Namun, rumah sakit tetap mewajibkan evaluasi prosedur kerja secara berkala. Alasan ilmiah paling tepat dari kebijakan tersebut adalah …",
    options: [
    "Dosis rendah tidak selalu aman jika terakumulasi dalam waktu lama",
    "Batas dosis tahunan bersifat perkiraan dan tidak ilmiah",
    "Radiasi medis selalu lebih berbahaya dibanding radiasi alam",
    "Dosimeter tidak mampu mengukur semua jenis radiasi",
  ],
  answer: 0,
  explanation: "A. Seorang petugas radiologi selalu mencatat dosis paparan hariannya masih di bawah batas tahunan yang diizinkan. Namun, rumah sakit tetap mewajibkan evaluasi prosedur kerja secara berkala. Alasan ilmiah paling tepat dari kebijakan tersebut adalah Dosis rendah tidak selalu aman jika terakumulasi dalam waktu lama"
  },
  {
    question: "Dua rumah sakit menggunakan alat sinar X dengan spesifikasi sama. Rumah sakit A memiliki SOP ketat, pelindung timbal lengkap, dan pelatihan rutin, sedangkan rumah sakit B tidak. Pernyataan yang paling tepat terkait risiko radiasi adalah …",
    options: [
      "Risiko radiasi sama karena sumber radiasi identik",
      "Risiko hanya bergantung pada energi sinar X, bukan prosedur",
      "Risiko radiasi lebih ditentukan oleh pengelolaan dan penerapan prinsip keselamatan",
      "Rumah sakit B lebih aman karena paparan terjadi secara alami",
    ],
    answer: 2,
    explanation: "C. Dua rumah sakit menggunakan alat sinar X dengan spesifikasi sama. Rumah sakit A memiliki SOP ketat, pelindung timbal lengkap, dan pelatihan rutin, sedangkan rumah sakit B tidak. Pernyataan yang paling tepat terkait risiko radiasi adalah Risiko radiasi lebih ditentukan oleh pengelolaan dan penerapan prinsip keselamatan"
  },
  {
    question: "Prinsip ALARA tidak hanya diterapkan pada pekerja radiasi, tetapi juga pada pasien. Hal ini menunjukkan bahwa …",
    options: [
      "Pasien memiliki risiko lebih besar daripada tenaga medis",
      "Semua paparan radiasi, sekecil apa pun, harus dihindari",
      "Manfaat medis harus selalu lebih besar daripada potensi risiko radiasi",
      "Radiasi diagnostik tidak memiliki efek biologis",
    ],
    answer: 2,
    explanation: "C. Prinsip ALARA tidak hanya diterapkan pada pekerja radiasi, tetapi juga pada pasien. Hal ini menunjukkan bahwa Manfaat medis harus selalu lebih besar daripada potensi risiko radiasi"
  },
  {
    question: "Dalam konteks perlindungan lingkungan, pengawasan radiasi dilakukan tidak hanya di fasilitas nuklir tetapi juga pada udara, air, dan tanah. Hal ini didasarkan pada pemahaman bahwa …",
    options: [  
      "Radiasi hanya berbahaya jika mengenai manusia secara langsung",
      "Radiasi dapat berpindah dan berdampak tidak langsung melalui ekosistem",
      "Radiasi lingkungan selalu berasal dari aktivitas manusia",
      "Organisme non-hidup lebih sensitif terhadap radiasi",
    ],
    answer: 1,
    explanation:  "B. Dalam konteks perlindungan lingkungan, pengawasan radiasi dilakukan tidak hanya di fasilitas nuklir tetapi juga pada udara, air, dan tanah. Hal ini didasarkan pada pemahaman bahwa Radiasi dapat berpindah dan berdampak tidak langsung melalui ekosistem"
  },
  {
    question: "Seorang siswa berpendapat bahwa selama seseorang tidak merasakan panas, nyeri, atau perubahan fisik, maka paparan radiasi dapat dianggap aman. Tanggapan ilmiah paling tepat terhadap pendapat tersebut adalah …",
    options: [
      "Benar, karena radiasi berbahaya selalu menimbulkan gejala langsung",
      "Benar, karena tubuh manusia dapat menetralkan radiasi kecil",
      "Keliru, karena radiasi dapat menimbulkan efek biologis tanpa gejala awal",
      "Keliru, karena radiasi hanya berdampak pada lingkungan, bukan manusia",
    ],
    answer: 2,
    explanation: "C. Seorang siswa berpendapat bahwa selama seseorang tidak merasakan panas, nyeri, atau perubahan fisik, maka paparan radiasi dapat dianggap aman. Tanggapan ilmiah paling tepat terhadap pendapat tersebut adalah Keliru, karena radiasi dapat menimbulkan efek biologis tanpa gejala awal"
  },
];



// --- IDENTITAS KUIS & PENGAMBILAN DATA ---
const QUIZ_ID = "quiz_keselamatan_radiasi_dan_perlindungan_diri"; 
const savedData = JSON.parse(localStorage.getItem(QUIZ_ID));

// Jika ada savedData, ambil lastIndex-nya. Jika tidak ada, mulai dari 0.
let index = (savedData && savedData.lastIndex) ? savedData.lastIndex : 0;
let score = 0;

// Ambil jawaban yang tersimpan atau buat array kosong baru
let userAnswers = (savedData && savedData.answers) ? savedData.answers : new Array(quizData.length).fill(null);
let reviewIndex = 0;
let resultHTML = "";


// Elemen HTML
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const currentEl = document.getElementById("current");
const totalEl = document.getElementById("total");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const quizContent = document.getElementById("quizContent");
const quizFooter = document.querySelector(".quiz-footer");


// Set total soal
totalEl.textContent = quizData.length;

// Real Time
const timerInterval = setInterval(() => {
  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    finishQuiz(true);
    return;
  }

  timeLeft--;
  const m = Math.floor(timeLeft / 60);
  const s = timeLeft % 60;
  timerEl.textContent = `${m}:${s.toString().padStart(2, "0")}`;
}, 1000);


// All Functions


// FUNGSI TAMPIL SOAL
function updatePrevButton() {
  if (index === 0) {
    prevBtn.style.display = "none";
    quizFooter.classList.remove("with-prev");
  } else {
    prevBtn.style.display = "inline-block";
    quizFooter.classList.add("with-prev");
  }
}


  // UPDATE TEKS TOMBOL NEXT / SELESAI
  function updateNextButton() {
    if (index === quizData.length - 1) {
      nextBtn.textContent = "Selesai";
    } else {
      nextBtn.textContent = "Selanjutnya";
    }
  }

  function animateChange(direction, callback) {
  const hideClass = direction === "next" ? "hide-left" : "hide-right";

  quizContent.classList.add(hideClass);

  setTimeout(() => {
    callback(); // ganti soal
    quizContent.classList.remove(hideClass);
  }, 300);
}

function showReview(i) {
  const q = quizData[i];
  const userAns = userAnswers[i];

  let optionsHTML = "";

  q.options.forEach((opt, idx) => {
    let cls = "";
    if (idx === q.answer) cls = "correct";
    if (idx === userAns && idx !== q.answer) cls = "wrong";
    if (idx !== userAns && idx === q.answer) cls = "missed";

    optionsHTML += `
      <div class="review-option ${cls}">${opt}</div>
    `;
  });

  const isFirst = i === 0;
  const isLast = i === quizData.length - 1;

  document.querySelector(".quiz-card").innerHTML = `
  <div class="review-wrapper">
    <h3>Nomor ${i + 1} / ${quizData.length}</h3>
    <div class="review-nav-wrapper">
      <button class="nav-arrow left" onclick="prevReview()">‹</button>

      <div class="review-nav" id="reviewNav">
        ${quizData.map((_, idx) => {
          const status =
            userAnswers[idx] === quizData[idx].answer
              ? "correct"
              : "wrong";
          const active = idx === i ? "active" : "";

          return `
            <div 
              class="review-nav-item ${status} ${active}"
              onclick="jumpReview(${idx})"
            >
              ${idx + 1}
            </div>
          `;
        }).join("")}
      </div>

      <button class="nav-arrow right" onclick="nextReview()">›</button>
    </div>

    <div class="review-body" id="reviewBody">
      <div class="review-question">${q.question}</div>

      <div class="review-options">
        ${optionsHTML}
      </div>

      <div class="review-explain">
        <b>Pembahasan:</b>
        <p>${q.explanation || "Pembahasan belum tersedia."}</p>
      </div>
    </div>

    <div class="review-footer">
      <div class="review-left">
        ${i > 0 ? `<button class="btn-prev-review" onclick="prevReview()">Kembali</button>` : ``}
      </div>

      <div class="review-center">
        <button class="btn-back-result" onclick="backToResult()">Kembali ke Hasil</button>
      </div>

      <div class="review-right">
        ${i < quizData.length - 1 ? `<button class="btn-next-review" onclick="nextReview()">Selanjutnya</button>` : ``}
      </div>
    </div>
  </div>
`;

document
  .querySelector(".nav-arrow.left")
  ?.toggleAttribute("disabled", i === 0);

document
  .querySelector(".nav-arrow.right")
  ?.toggleAttribute("disabled", i === quizData.length - 1);

setTimeout(scrollNavToActive, 50);

}

function nextReview() {
  if (reviewIndex < quizData.length - 1) {
    reviewIndex++;
    showReview(reviewIndex);

    requestAnimationFrame(() => {
      scrollNavToActive();
      document
        .querySelector(".review-body")
        ?.classList.add("review-slide-left");
    });
  }
}

function prevReview() {
  if (reviewIndex > 0) {
    reviewIndex--;
    showReview(reviewIndex);

    requestAnimationFrame(() => {
      scrollNavToActive();
      document
        .querySelector(".review-body")
        ?.classList.add("review-slide-right");
    });
  }
}

function jumpReview(i) {
  if (i === reviewIndex) return;

  const dir =
    i > reviewIndex ? "review-slide-left" : "review-slide-right";

  reviewIndex = i;
  showReview(reviewIndex);

  requestAnimationFrame(() => {
    scrollNavToActive();
    document
      .querySelector(".review-body")
      ?.classList.add(dir);
  });
}

function scrollNavToActive() {
  const nav = document.getElementById("reviewNav");
  const active = nav?.querySelector(".review-nav-item.active");

  if (!nav || !active) return;

  const navRect = nav.getBoundingClientRect();
  const activeRect = active.getBoundingClientRect();

  const offset =
    activeRect.left -
    navRect.left -
    navRect.width / 2 +
    activeRect.width / 2;

  nav.scrollBy({
    left: offset,
    behavior: "smooth"
  });
}

// ======================
// DRAG / SWIPE REVIEW NAV
// ======================
const reviewNav = () => document.getElementById("reviewNav");

let isDown = false;
let startX;
let scrollLeft;

document.addEventListener("mousedown", e => {
  const nav = reviewNav();
  if (!nav || !nav.contains(e.target)) return;

  isDown = true;
  nav.classList.add("dragging");
  startX = e.pageX - nav.offsetLeft;
  scrollLeft = nav.scrollLeft;
});

document.addEventListener("mouseleave", () => isDown = false);
document.addEventListener("mouseup", () => {
  isDown = false;
  reviewNav()?.classList.remove("dragging");
});

document.addEventListener("mousemove", e => {
  if (!isDown) return;

  const nav = reviewNav();
  if (!nav) return;

  e.preventDefault();
  const x = e.pageX - nav.offsetLeft;
  const walk = (x - startX) * 1.4; // sensitivity
  nav.scrollLeft = scrollLeft - walk;
});

function scrollNav(dir) {
  const nav = document.getElementById("reviewNav");
  if (!nav) return;

  const start = nav.scrollLeft;
  const distance = dir * 200; // jarak geser
  const duration = 400; // ms (semakin besar = semakin halus)
  let startTime = null;

  function easeInOut(t) {
    return t < 0.5
      ? 2 * t * t
      : 1 - Math.pow(-2 * t + 2, 2) / 2;
  }

  function animateScroll(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);

    nav.scrollLeft = start + distance * easeInOut(progress);

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  }

  requestAnimationFrame(animateScroll);
}



function loadQuiz() {
  const q = quizData[index];

  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach((opt, i) => {
    const checked = userAnswers[index] === i ? "checked" : "";
    const active = userAnswers[index] === i ? "active" : "";

    optionsEl.innerHTML += `
      <label class="option ${active}">
        <input type="radio" name="answer" value="${i}" ${checked}>
        <span>${opt}</span>
      </label>
    `;
  });

  // tombol prev nonaktif di soal pertama
  prevBtn.disabled = index === 0;

  currentEl.textContent = index + 1;
  updateProgress();
  updatePrevButton();
  updateNextButton();

}

optionsEl.addEventListener("change", (e) => {
  if (e.target.name === "answer") {
    userAnswers[index] = +e.target.value;

    document.querySelectorAll(".option").forEach(opt =>
      opt.classList.remove("active")
    );

    e.target.closest(".option").classList.add("active");
  }
});

// ======================
nextBtn.onclick = () => {
  if (userAnswers[index] === null) {
    alert("Pilih jawaban dulu!");
    return;
  }

  if (index === quizData.length - 1) {
    openSubmitModal(); // ⬅️ BUKAN finishQuiz
  } else {
    animateChange("next", () => {
      index++;
      loadQuiz();
    });
  }
};

// SUBMIT MODAL
const submitModal = document.getElementById("submitModal");
const cancelSubmit = document.getElementById("cancelSubmit");
const confirmSubmit = document.getElementById("confirmSubmit");

function openSubmitModal() {
  submitModal.classList.remove("hidden");
}

function closeSubmitModal() {
  submitModal.classList.add("hidden");
}

// tombol batal
cancelSubmit.addEventListener("click", closeSubmitModal);

// tombol submit
confirmSubmit.addEventListener("click", () => {
  closeSubmitModal();
  finishQuiz(false);
});


prevBtn.onclick = () => {
  if (index > 0) {
    animateChange("prev", () => {
      index--;
      loadQuiz();
    });
  }
};

// ======================
function updateProgress() {
  const answered = getAnsweredCount();
  const total = quizData.length;
  const percent = Math.round((answered / total) * 100);

  document.getElementById("progressFill").style.width = percent + "%";
  document.getElementById("progressText").textContent = `${answered} / ${total}`;

  // --- SIMPAN PROGRES KE BROWSER ---
  const progressData = {
    answered: answered,
    total: total,
    percent: percent,
    answers: userAnswers, // simpan pilihan jawaban
    lastIndex: index      // simpan nomor soal terakhir
  };
  localStorage.setItem(QUIZ_ID, JSON.stringify(progressData));
}

optionsEl.addEventListener("change", (e) => {
  if (e.target.name === "answer") {
    userAnswers[index] = +e.target.value;

    document.querySelectorAll(".option").forEach(opt =>
      opt.classList.remove("active")
    );

    e.target.closest(".option").classList.add("active");

    updateProgress(); // 🔥 PENTING
  }
});

// EXIT MODAL
const exitBtn = document.getElementById("exitQuiz");
const exitModal = document.getElementById("exitModal");
const cancelExit = document.getElementById("cancelExit");
const confirmExit = document.getElementById("confirmExit");

// buka modal
exitBtn.addEventListener("click", () => {
  exitModal.classList.remove("hidden");
});

// batal
cancelExit.addEventListener("click", () => {
  exitModal.classList.add("hidden");
});

// konfirmasi keluar
confirmExit.addEventListener("click", () => {
  window.location.href = "soal.html#soal";
});

// ======================
// FINISH QUIZ
// ======================
function finishQuiz(timeUp) {
  clearInterval(timerInterval);

  let correct = 0;
  let wrong = 0;

  userAnswers.forEach((ans, i) => {
    if (ans === quizData[i].answer) correct++;
    else wrong++;

    // PAKSA PROGRESS JADI 100% SAAT SELESAI
  const finalProgress = {
    answered: quizData.length,
    total: quizData.length,
    percent: 100,
    answers: userAnswers,
    lastIndex: 0 // Reset ke 0 agar jika diulang mulai dari awal
  };
  localStorage.setItem(QUIZ_ID, JSON.stringify(finalProgress));
});

  const scorePercent = ((correct / quizData.length) * 100).toFixed(2);

  document.body.classList.add("result-page");

  // DETAIL KOTAK NOMOR SOAL
  let detailHTML = "";
  userAnswers.forEach((ans, i) => {
    const isCorrect = ans === quizData[i].answer;
    detailHTML += `
    <div 
      class="result-box ${isCorrect ? "correct" : "wrong"}"
      data-index="${i}"
    >
      ${i + 1}
    </div>
  `;
  });

  resultHTML = `
    <div class="result-wrapper">
      <div class="result-left">
        <h2>${timeUp ? "Waktu Habis ⏱" : "Selamat, Nilai Akhir Kamu"}</h2>
        <div class="score">${scorePercent} <span>/ 100</span></div>

        <div class="result-bar">
          <div class="bar-correct" style="width:${(correct / quizData.length) * 100}%"></div>
          <div class="bar-wrong" style="width:${(wrong / quizData.length) * 100}%"></div>
        </div>

        <p>
          <span class="ok">${correct} Soal</span> benar ·
          <span class="no">${wrong} Soal</span> salah
        </p>

        <div class="result-actions" >
          <button id="reviewBtn" class="btn-review">Lihat Pembahasan</button>
          <button id="resetBtn" class="btn-reset">Ulangi Kuis</button>
        </div>
      </div>

      <div class="result-right">
        <h3>Detail Jawaban Per Soal</h3>
        <div class="result-grid">
          ${detailHTML}
        </div>
      </div>
    </div>
  `;

document.querySelector(".quiz-card").innerHTML = resultHTML;


  // EVENT BUTTON (WAJIB)
  document.getElementById("reviewBtn").addEventListener("click", () => {
    reviewIndex = 0;
    showReview(reviewIndex);
  });

  document.querySelectorAll(".result-box").forEach(box => {
  box.addEventListener("click", () => {
    const i = parseInt(box.dataset.index);
    reviewIndex = i;
    showReview(reviewIndex);
  });
});

}

function getAnsweredCount() {
  return userAnswers.filter(a => a !== null).length;
}

function backToResult() {
  const card = document.querySelector(".quiz-card");

  // reset animasi (WAJIB)
  card.classList.remove("fade-in", "fade-out");

  // force reflow (ini kuncinya)
  void card.offsetWidth;

  // animasi keluar
  card.classList.add("fade-out");

  setTimeout(() => {
    // ganti konten hasil
    card.innerHTML = resultHTML;

    // reset lagi
    card.classList.remove("fade-out");
    void card.offsetWidth;

    // animasi masuk
    card.classList.add("fade-in");

    // aktifkan ulang tombol review
    document.getElementById("reviewBtn").addEventListener("click", () => {
      reviewIndex = 0;
      showReview(reviewIndex);
    });

    // klik nomor → langsung ke pembahasan
    document.querySelectorAll(".result-box").forEach(box => {
      box.addEventListener("click", () => {
        reviewIndex = parseInt(box.dataset.index);
        showReview(reviewIndex);
      });
    });

  }, 300);
}

// ======================
loadQuiz();
