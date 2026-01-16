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
    question: "Radiasi didefinisikan sebagai energi yang dipancarkan dari suatu sumber dan dapat merambat melalui ruang. Pernyataan yang paling tepat untuk menjelaskan mekanisme perambatan radiasi adalah …",
    options: [
      "didominasi oleh radiasi ionisasi",
      "tersusun terutama dari cahaya tampak dan inframerah",
      "seluruhnya berupa radiasi ultraviolet berenergi tinggi",
      "radiasi hanya dapat merambat melalui udara",
    ],
    answer: 1,
    explanation: "B. Radiasi didefinisikan sebagai energi yang dipancarkan dari suatu sumber dan dapat merambat melalui ruang. Pernyataan yang paling tepat untuk menjelaskan mekanisme perambatan radiasi adalah tersusun terutama dari cahaya tampak dan inframerah"
  },
  {
    question: "Radiasi yang mampu menyebabkan mutasi DNA karena energinya cukup untuk melepaskan elektron dari atom tergolong sebagai …",
    options: [
      "gelombang radio",
      "inframerah",
      "cahaya tampak",
      "sinar gamma",
    ],
    answer: 3,
    explanation: "D. Radiasi yang mampu menyebabkan mutasi DNA karena energinya cukup untuk melepaskan elektron dari atom tergolong sebagai sinar gamma"
  },
  {
    question: "Perhatikan pernyataan berikut: (1) Digunakan dalam sistem komunikasi nirkabel; (2) Menyebabkan pemanasan tanpa merusak struktur kimia sel;  (3) Memerlukan pengawasan ketat karena dapat merusak DNA; (4) Tidak mampu mengionisasi atom. Pernyataan yang sesuai dengan radiasi non-ionisasi adalah ……",
    options: [
      "(1), (2), dan (3)",
      "(1), (2), dan (4)",
      "(1) dan (3)",
      "(2), (3), dan (4)",
    ],
    answer: 1,
    explanation: "B. Perhatikan pernyataan berikut: (1) Digunakan dalam sistem komunikasi nirkabel; (2) Menyebabkan pemanasan tanpa merusak struktur kimia sel;  (3) Memerlukan pengawasan ketat karena dapat merusak DNA; (4) Tidak mampu mengionisasi atom. Pernyataan yang sesuai dengan radiasi non-ionisasi adalah (1), (2), dan (4)"
  },
  {
    question: "Penggunaan sinar X dalam pemeriksaan medis selalu dibatasi dosisnya. Fakta ini menunjukkan bahwa sinar X …",
    options: [
      "sepenuhnya aman bagi jaringan tubuh",
      "termasuk radiasi non-ionisasi",
      "bersifat ionisasi tetapi memiliki manfaat jika dikendalikan",
      "hanya berinteraksi dengan tulang dan tidak dengan jaringan lain",
    ],
    answer: 2,
    explanation: "C. Penggunaan sinar X dalam pemeriksaan medis selalu dibatasi dosisnya. Fakta ini menunjukkan bahwa sinar X bersifat ionisasi tetapi memiliki manfaat jika dikendalikan"
  },
  {
    question: "Analogi radiasi non-ionisasi sebagai “hembusan angin” dan radiasi ionisasi sebagai “peluru kecil” menekankan perbedaan utama pada …",
    options: [
      "kecepatan rambat radiasi",
      "bentuk fisik radiasi",
      "besar energi dan dampaknya terhadap struktur sel",
      "sumber radiasi yang dihasilkan",
    ],
    answer: 2,
    explanation: "C. Analogi radiasi non-ionisasi sebagai “hembusan angin” dan radiasi ionisasi sebagai “peluru kecil” menekankan perbedaan utama pada besar energi dan dampaknya terhadap struktur sel"
  },
  {
    question: "Salah satu alasan sinar matahari dapat mencapai Bumi meskipun ruang antarplanet merupakan vakum adalah karena sinar matahari termasuk …",
    options: [
      "radiasi partikel bermassa",
      "radiasi elektromagnetik yang tidak memerlukan medium",
      "radiasi bermuatan listrik",
      "radiasi ionisasi berenergi tinggi",
    ],
    answer: 1,
    explanation: "B. Salah satu alasan sinar matahari dapat mencapai Bumi meskipun ruang antarplanet merupakan vakum adalah karena sinar matahari termasuk radiasi elektromagnetik yang tidak memerlukan medium"
  },
  {
    question: "Urutan spektrum elektromagnetik berikut yang benar dari energi terendah ke energi tertinggi adalah …",
    options: [
      "Inframerah – cahaya tampak – gelombang radio – sinar gamma",
      "Gelombang radio – gelombang mikro – inframerah – cahaya tampak",
      "Ultraviolet – cahaya tampak – inframerah – gelombang mikro",
      "Gelombang mikro – gelombang radio – cahaya tampak – inframerah",
    ],
    answer: 1,
    explanation: "B. Urutan spektrum elektromagnetik berikut yang benar dari energi terendah ke energi tertinggi adalah Gelombang radio – gelombang mikro – inframerah – cahaya tampak"
  },
  {
    question: "Radiasi elektromagnetik yang berperan penting dalam fotosintesis tumbuhan dan penglihatan manusia adalah …",
    options: [
      "inframerah",
      "ultraviolet",
      "cahaya tampak",
      "gelombang mikro",
    ],
    answer: 2,
    explanation: "C. Radiasi elektromagnetik yang berperan penting dalam fotosintesis tumbuhan dan penglihatan manusia adalah cahaya tampak"
  },
  {
    question: "Partikel alfa memiliki daya tembus sangat rendah, namun tetap berbahaya jika masuk ke dalam tubuh. Hal ini terutama disebabkan oleh …",
    options: [
      "massanya kecil sehingga bergerak cepat",
      "kemampuannya merambat di ruang hampa",
      "energi yang diserap jaringan sangat besar pada jarak dekat",
      "muatannya yang netral",
    ],
    answer: 2,
    explanation: "C. Partikel alfa memiliki daya tembus sangat rendah, namun tetap berbahaya jika masuk ke dalam tubuh. Hal ini terutama disebabkan oleh energi yang diserap jaringan sangat besar pada jarak dekat"
  },
  {
    question: "Jenis radiasi berikut yang tidak bermuatan listrik, memiliki daya tembus sangat tinggi, dan memerlukan pelindung berupa air atau beton adalah …",
    options:[
      "partikel alfa",
      "partikel beta",
      "sinar gamma",
      "neutron",
    ],
    answer:3,
    explanation: "D. Jenis radiasi berikut yang tidak bermuatan listrik, memiliki daya tembus sangat tinggi, dan memerlukan pelindung berupa air atau beton adalah neutron"

  },
  {
    question: "Penggunaan lapisan aluminium tipis sebagai pelindung paling efektif untuk menahan radiasi …",
    options: [
    "alfa",
    "beta",
    "gamma",
    "neutron",
  ],
  answer: 1,
  explanation: "B. Penggunaan lapisan aluminium tipis sebagai pelindung paling efektif untuk menahan radiasi beta"
  },
  {
    question: "Pernyataan berikut yang paling tepat mengenai radiasi dalam kehidupan sehari-hari adalah …",
    options: [
      "Semua radiasi yang berasal dari Matahari bersifat ionisasi",
      "Gelombang radio dari HP dan WiFi termasuk radiasi partikel",
      "Oven microwave memanaskan makanan melalui radiasi non-ionisasi",
      "Sinar X di rumah sakit aman digunakan tanpa pembatasan dosis",
    ],
    answer: 2,
    explanation: "C. Pernyataan berikut yang paling tepat mengenai radiasi dalam kehidupan sehari-hari adalah Oven microwave memanaskan makanan melalui radiasi non-ionisasi"
  },
  {
    question: "Suatu radiasi elektromagnetik memiliki frekuensi sebesar \\( f = 5 \\times 10^{14} \\, \\text{Hz} \\). Jika konstanta Planck \\( h = 6{,}63 \\times 10^{-34} \\, \\text{J/s} \\), maka energi satu foton radiasi tersebut adalah …",
    options: [
      "3,3 × 10<sup>-19</sup> J",
      "3,3 × 10<sup>-20</sup> J",
      "1,3 × 10<sup>-19</sup> J",
      "1,3 × 10<sup>-20</sup> J",
    ],
    answer: 0,
    explanation: "A. Suatu radiasi elektromagnetik memiliki frekuensi sebesar \\( f = 5 \\times 10^{14} \\, \\text{Hz} \\). Jika konstanta Planck \\( h = 6{,}63 \\times 10^{-34} \\, \\text{J/s} \\), maka energi satu foton radiasi tersebut adalah 3,3 × 10<sup>-19</sup> J "
  },
  {
    question: "Sinar ultraviolet memiliki panjang gelombang  &lambda; = 200 nm.<br> Jika cepat rambat cahaya  c = 3,0 × 10<sup>8</sup> m/s<br> h = 6,63 × 10<sup>-34</sup> J/s,<br> maka energi satu foton sinar tersebut adalah …",
    options: [  
      "9,9 × 10<sup>-19</sup> J",
      "6,6 × 10<sup>-19</sup> J",
      "3,3 × 10<sup>-19</sup> J",
      "1,0 × 10<sup>-19</sup> J",
    ],
    answer: 0,
    explanation:  "A. Sinar ultraviolet memiliki panjang gelombang  &lambda; = 200 nm.<br> Jika cepat rambat cahaya  c = 3,0 × 10<sup>8</sup> m/s<br> h = 6,63 × 10<sup>-34</sup> J/s,<br> maka energi satu foton sinar tersebut adalah 9,9 × 10<sup>-19</sup> J"
  },
  {
    question: "Intensitas radiasi pada jarak 2 m dari suatu sumber adalah I<sub>1</sub> = 80 W/m<sup>2</sup>.<br> Berapakah intensitas radiasi pada jarak 4 m dari sumber yang sama?",
    options: [
      "40 W/m<sup>2</sup>",
      "20 W/m<sup>2</sup>",
      "10 W/m<sup>2</sup>",
      "5 W/m<sup>2</sup>",
    ],
    answer: 2,
    explanation: "C. Intensitas radiasi pada jarak 2 m dari suatu sumber adalah I<sub>1</sub> = 80 W/m<sup>2</sup>.<br> Berapakah intensitas radiasi pada jarak 4 m dari sumber yang sama 10 W/m<sup>2</sup>"
  },
];


// --- IDENTITAS KUIS & PENGAMBILAN DATA ---
const QUIZ_ID = "quiz_jenis_radiasi"; 
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

// ======================
// LOAD QUIZ
// ======================
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
