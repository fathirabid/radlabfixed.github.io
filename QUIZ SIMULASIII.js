// ======================
// TIMER
// ======================
let timeLeft = 30 * 30; //  menit

// ======================
// ELEMENT HTML TIMER
// ======================
const timerEl = document.getElementById("timer");

// ======================
// DATA QUIZ (SOAL ADA DI SINI)
// ======================
const quizData = [
  {
    question: "Pada simulasi Blackbody Spectrum, suhu benda dinaikkan dari 3000 K menjadi 8000 K. Perubahan utama yang terlihat pada grafik adalah …",
    options: [
      "Puncak spektrum bergeser ke panjang gelombang lebih besar",
      "Intensitas radiasi menurun dan warna tetap merah",
      "Puncak spektrum bergeser ke panjang gelombang lebih pendek",
      "Warna cahaya menjadi lebih gelap",
    ],
    answer: 2,
    explanation: " Pada simulasi Blackbody Spectrum, ketika suhu dinaikkan dari 3000 K menjadi 8000 K, terlihat bahwa puncak kurva spektrum berpindah ke arah panjang gelombang yang lebih pendek. Hal ini menandakan bahwa energi radiasi yang dipancarkan semakin besar dan warna cahaya bergeser dari merah menuju biru. Fenomena ini sesuai dengan konsep bahwa benda yang lebih panas memancarkan radiasi dengan energi lebih tinggi, sehingga jawaban yang benar adalah C."
  },
  {
    question: "Dengan menggunakan simulasi Blackbody Spectrum, warna cahaya yang dominan pada suhu sangat tinggi mendekati 10.000 K adalah …",
    options: [
      "Merah",
      "Oranye",
      "Kuning",
      "Biru",
    ],
    answer: 3,
    explanation: " Saat suhu pada simulasi mendekati 10.000 K, warna cahaya yang ditampilkan berubah menjadi kebiruan. Warna biru menunjukkan radiasi dengan energi yang tinggi dan panjang gelombang yang pendek. Inilah alasan mengapa bintang yang sangat panas tampak berwarna biru. Berdasarkan pengamatan simulasi, jawaban yang tepat adalah D."
  },
  {
    question: "Saat jumlah gas rumah kaca pada simulasi Greenhouse Effect ditambah, perubahan yang paling tepat adalah …",
    options: [
      "Lebih banyak panas keluar ke luar angkasa",
      "Suhu permukaan Bumi menurun",
      "Panas lebih banyak terperangkap di atmosfer",
      "Radiasi Matahari tidak mencapai Bumi",
    ],
    answer: 2,
    explanation: " Pada simulasi Greenhouse Effect, ketika jumlah gas rumah kaca ditambah, terlihat bahwa lebih banyak radiasi panas yang terperangkap di atmosfer dan tidak langsung keluar ke luar angkasa. Akibatnya, suhu permukaan Bumi meningkat. Hal ini menunjukkan bahwa gas rumah kaca berfungsi menahan panas, sehingga jawaban yang benar adalah C."
  },
  {
    question: "Jika jumlah gas rumah kaca dikurangi pada simulasi, maka yang terjadi adalah …",
    options: [
      "Suhu Bumi meningkat drastis",
      "Panas lebih mudah keluar dari atmosfer",
      "Cahaya Matahari terpantul seluruhnya",
      "Cahaya Matahari terpantul seluruhnya",
    ],
    answer: 1,
    explanation: " Jika jumlah gas rumah kaca pada simulasi dikurangi, maka panas yang dipancarkan oleh permukaan Bumi lebih mudah lepas ke luar angkasa. Akibatnya, suhu permukaan menurun. Dari pengamatan ini dapat disimpulkan bahwa gas rumah kaca sangat berperan dalam menjaga suhu Bumi, sehingga jawaban yang tepat adalah B."
  },
  {
    question: "Saat kamu memilih mode “Additive Mixing” (pencampuran tambah), tiga slider warna utama adalah merah (R), hijau (G), dan biru (B). Jika kamu menggeser semua slider ke nilai tertinggi sekaligus (R = 100, G = 100, B = 100), warna yang dihasilkan akan menjadi …",
    options: [
      "Hitam",
      "Merah",
      "Putih",
      "Hijau",
    ],
    answer: 2,
    explanation: " Ketika semua slider warna merah, hijau, dan biru dinaikkan ke nilai maksimum pada mode Additive Mixing, simulasi menunjukkan warna putih. Hal ini terjadi karena pada pencampuran cahaya secara aditif, penjumlahan cahaya merah, hijau, dan biru dengan intensitas penuh menghasilkan cahaya putih. Inilah alasan layar televisi dan ponsel menggunakan sistem RGB untuk menghasilkan berbagai warna."
  },
  {
    question: "Jika kamu mematikan warna hijau (G) dan biru (B) (nilai 0), dan hanya menaikkan nilai merah (R) pada mode “Additive Mixing”, warna yang terlihat pada layar akan cenderung …",
    options: [
      "Biru",
      "Kuning",
      "Merah",
      "Putih",
    ],
    answer: 2,
    explanation: " Saat hanya cahaya merah yang dinyalakan dan cahaya hijau serta biru dimatikan, warna yang terlihat pada simulasi adalah merah. Ini membuktikan bahwa tanpa campuran cahaya lain, warna yang tampak akan sama dengan warna sumber cahaya yang aktif. Simulasi membantu siswa memahami bahwa warna cahaya tidak selalu hasil campuran, tetapi bisa berasal dari satu komponen saja."
  },
  {
    question: "Saat kamu menyesuaikan frekuensi gelombang radio dalam simulasi, apa yang terjadi pada jarak antara puncak gelombang (panjang gelombang)?...",
    options: [
      "Semakin tinggi frekuensi → panjang gelombang semakin besar",
      "Semakin tinggi frekuensi → panjang gelombang semakin kecil",
      "Frekuensi tidak berpengaruh pada panjang gelombang",
      "Panjang gelombang tetap sama di semua frekuensi",
    ],
    answer: 1,
    explanation: " Dalam gelombang, frekuensi dan panjang gelombang berbanding terbalik. Ini bisa kamu lihat langsung di simulasi ketika mengubah nilai frekuensi; semakin tinggi frekuensi semakin rapat gelombangnya (panjang gelombang menurun). Jadi jawaban yang benar adalah B."
  },
  {
    question: "Dalam simulasi Radio Waves, gelombang yang memiliki frekuensi lebih rendah secara umum cenderung memiliki …",
    options: [
      "Panjang gelombang lebih pendek",
      "Panjang gelombang lebih panjang",
      "Energi lebih besar daripada frekuensi tinggi",
      "Tidak dipengaruhi panjang gelombang",
    ],
    answer: 1,
    explanation: " Gelombang radio frekuensi rendah memiliki panjang gelombang lebih besar. Simulasi menunjukkan gelombang yang lebih lebar/longgar pada frekuensi rendah. Ini sesuai dengan hubungan λ= v/f. Jadi jawaban yang tepat adalah B."
  },
];

// letak variabel global
let index = 0;
let score = 0;
let userAnswers = new Array(quizData.length).fill(null);
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

  const percent = (answered / total) * 100;

  document.getElementById("progressFill").style.width = percent + "%";
  document.getElementById("progressText").textContent =
    `${answered} / ${total}`;
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

      <button id="reviewBtn" class="btn-review">Lihat Pembahasan</button>
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
