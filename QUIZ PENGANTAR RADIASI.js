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
      "radiasi hanya dapat merambat jika memiliki massa",
      "radiasi selalu memerlukan medium untuk merambat",
      "radiasi merupakan bentuk perpindahan energi dalam bentuk gelombang atau partikel",
      "radiasi hanya dapat merambat melalui udara",
    ],
    answer: 2,
    explanation: "C. Radiasi didefinisikan sebagai energi yang dipancarkan dari suatu sumber dan dapat merambat melalui ruang. Pernyataan yang paling tepat untuk menjelaskan mekanisme perambatan radiasi adalah radiasi merupakan bentuk perpindahan energi dalam bentuk gelombang atau partikel"
  },
  {
    question: "Banyak orang menganggap radiasi selalu berasal dari ledakan nuklir. Pernyataan yang paling tepat untuk meluruskan anggapan tersebut adalah …",
    options: [
      "radiasi hanya dihasilkan oleh reaktor nuklir",
      "radiasi tidak ditemukan di lingkungan alami",
      "sumber radiasi terbesar berasal dari senjata nuklir",
      "radiasi juga berasal dari sumber alami seperti matahari dan unsur radioaktif",
    ],
    answer: 3,
    explanation: "D. Banyak orang menganggap radiasi selalu berasal dari ledakan nuklir. Pernyataan yang paling tepat untuk meluruskan anggapan tersebut adalah radiasi juga berasal dari sumber alami seperti matahari dan unsur radioaktif"
  },
  {
    question: "Radiasi kosmik tidak menimbulkan bahaya besar bagi kehidupan di Bumi karena …",
    options: [
      "atmosfer Bumi menyerap dan mengurangi sebagian besar radiasi kosmik ",
      "seluruh radiasi kosmik terperangkap di luar angkasa",
      "radiasi kosmik memiliki energi sangat kecil",
      "radiasi kosmik tidak dapat menembus makhluk hidup",
    ],
    answer: 0,
    explanation: "A. Radiasi kosmik tidak menimbulkan bahaya besar bagi kehidupan di Bumi karena atmosfer Bumi menyerap dan mengurangi sebagian besar radiasi kosmik"
  },
  {
    question: "Unsur radioaktif alami seperti uranium dan radon dapat memancarkan radiasi tanpa pengaruh luar karena …",
    options: [
      "mengalami reaksi kimia dengan unsur lain",
      "inti atomnya tidak stabil dan mengalami peluruhan",
      "memiliki jumlah proton yang sangat besar",
      "terpapar sinar matahari secara terus-menerus",
    ],
    answer: 1,
    explanation: "B. Unsur radioaktif alami seperti uranium dan radon dapat memancarkan radiasi tanpa pengaruh luar karena inti atomnya tidak stabil dan mengalami peluruhan"
  },
  {
    question: "Radiasi dari tubuh manusia, misalnya yang berasal dari kalium-40, tidak berbahaya bagi kesehatan karena …",
    options: [
      "tidak termasuk radiasi",
      "tidak memiliki energi sama sekali",
      "berasal dari proses buatan manusia",
      "intensitas dan energi radiasinya sangat kecil",
    ],
    answer: 3,
    explanation: "D. Radiasi dari tubuh manusia, misalnya yang berasal dari kalium-40, tidak berbahaya bagi kesehatan karena intensitas dan energi radiasinya sangat kecil"
  },
  {
    question: "Sinar-X diklasifikasikan sebagai radiasi elektromagnetik dan radiasi pengion karena …",
    options: [
      "memiliki massa dan muatan listrik",
      "berasal dari peluruhan inti atom",
      "mampu menghasilkan ion saat berinteraksi dengan materi",
      "tidak dapat merambat di ruang hampa",
    ],
    answer: 2,
    explanation: "C. Sinar-X diklasifikasikan sebagai radiasi elektromagnetik dan radiasi pengion karena mampu menghasilkan ion saat berinteraksi dengan materi"
  },
  {
    question: "Perbedaan utama antara radiasi elektromagnetik dan radiasi partikel berdasarkan massa adalah …",
    options: [
      "radiasi elektromagnetik tidak memiliki massa, sedangkan radiasi partikel memiliki massa",
      "radiasi partikel tidak membawa energi kinetik",
      "radiasi elektromagnetik memiliki energi lebih besar",
      "radiasi partikel tidak dapat berinteraksi dengan materi",
    ],
    answer: 0,
    explanation: "A. Perbedaan utama antara radiasi elektromagnetik dan radiasi partikel berdasarkan massa adalah radiasi elektromagnetik tidak memiliki massa, sedangkan radiasi partikel memiliki massa"
  },
  {
    question: "Radiasi non-pengion umumnya dianggap lebih aman dibandingkan radiasi pengion karena …",
    options: [
      "tidak dapat merambat di ruang hampa",
      "energinya tidak cukup untuk mengionisasi atom",
      "tidak berasal dari sumber buatan",
      "selalu memiliki intensitas sangat kecil",
    ],
    answer: 1,
    explanation: "B. Radiasi non-pengion umumnya dianggap lebih aman dibandingkan radiasi pengion karena energinya tidak cukup untuk mengionisasi atom"
  },
  {
    question: "Paparan radiasi yang tidak langsung menimbulkan gejala, tetapi dalam jangka panjang dapat menyebabkan kanker, termasuk ke dalam …",
    options: [
      "tingkat I",
      "tingkat II",
      "tingkat III",
      "tingkat IV",
    ],
    answer: 2,
    explanation: "C. Paparan radiasi yang tidak langsung menimbulkan gejala, tetapi dalam jangka panjang dapat menyebabkan kanker, termasuk ke dalam tingkat III"
  },
  {
    question: "Pernyataan yang paling tepat mengenai radiasi tingkat V adalah …",
    options:[
      "hanya berbahaya jika terpapar berulang",
      "tidak menimbulkan efek langsung pada tubuh",
      "menyebabkan gangguan ringan pada sistem pencernaan",
      "dapat merusak organ vital dan menyebabkan kematian dalam waktu singkat",
    ],
    answer:3,
    explanation: "D. Pernyataan yang paling tepat mengenai radiasi tingkat V adalah dapat merusak organ vital dan menyebabkan kematian dalam waktu singkat"

  },
  {
    question: "Pemanfaatan sinar-X di bidang medis dianggap efektif karena …",
    options: [
    "mampu menghancurkan seluruh jaringan tubuh",
    "memiliki energi rendah sehingga tidak menembus jaringan",
    "dapat memperlihatkan struktur organ dalam tanpa tindakan pembedahan",
    "tidak termasuk radiasi pengion",
  ],
  answer: 2,
  explanation: "C. Pemanfaatan sinar-X di bidang medis dianggap efektif karena dapat memperlihatkan struktur organ dalam tanpa tindakan pembedahan"
  },
  {
    question: "Radioterapi digunakan dalam pengobatan kanker dengan prinsip …",
    options: [
      "mempercepat metabolisme sel sehat",
      "menargetkan dan merusak sel kanker menggunakan radiasi berenergi tinggi",
      "mengganti jaringan yang rusak dengan sel buatan",
      "menurunkan suhu tubuh pasien",
    ],
    answer: 1,
    explanation: "B. Radioterapi digunakan dalam pengobatan kanker dengan prinsip enargetkan dan merusak sel kanker menggunakan radiasi berenergi tinggi"
  },
  {
    question: "Pemeriksaan bagasi menggunakan sinar-X di bandara relatif aman bagi petugas karena …",
    options: [
      "sinar-X yang digunakan berenergi sangat rendah dan dikendalikan",
      "sinar-X tidak termasuk radiasi",
      "paparan radiasi tidak dapat memengaruhi manusia",
      "petugas tidak berada di sekitar sumber radiasi",
    ],
    answer: 0,
    explanation: "A. Pemeriksaan bagasi menggunakan sinar-X di bandara relatif aman bagi petugas karena sinar-X yang digunakan berenergi sangat rendah dan dikendalikan"
  },
  {
    question: "Peristiwa Chernobyl dan Hiroshima–Nagasaki memberikan pelajaran penting bahwa …",
    options: [
      "radiasi hanya berbahaya pada saat ledakan",
      "radiasi tingkat tinggi dapat menimbulkan dampak jangka panjang bagi manusia dan lingkungan",
      "teknologi nuklir selalu aman jika digunakan manusia",
      "radiasi tidak memengaruhi generasi berikutnya",
    ],
    answer: 1,
    explanation:  "B. Peristiwa Chernobyl dan Hiroshima–Nagasaki memberikan pelajaran penting bahwa radiasi tingkat tinggi dapat menimbulkan dampak jangka panjang bagi manusia dan lingkungan."
  },
  {
    question: "Tindakan paling tepat untuk mengurangi risiko paparan radiasi berlebihan dalam kehidupan sehari-hari adalah …",
    options: [
      "menghindari seluruh perangkat elektronik",
      "menggunakan perangkat elektronik selama mungkin",
      "memahami sumber radiasi dan menjaga jarak dari sumber yang kuat",
      "meningkatkan paparan agar tubuh kebal",
    ],
    answer: 2,
    explanation: "C. Tindakan paling tepat untuk mengurangi risiko paparan radiasi berlebihan dalam kehidupan sehari-hari adalah memahami sumber radiasi dan menjaga jarak dari sumber yang kuat"
  },
];

// --- IDENTITAS KUIS & PENGAMBILAN DATA ---
const QUIZ_ID = "quiz_pengantar_radiasi"; 
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
