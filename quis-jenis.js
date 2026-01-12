// ======================
// TIMER
// ======================
let timeLeft = 30 * 20; //  menit

// ======================
// ELEMENT HTML TIMER
// ======================
const timerEl = document.getElementById("timer");

// ======================
// DATA QUIZ (SOAL ADA DI SINI)
// ======================
const quizData = [
  {
    question: "Seseorang berada di bawah paparan sinar matahari cukup lama. Kulit terasa panas, tetapi tidak terjadi ionisasi pada jaringan tubuh. Kondisi ini paling tepat dijelaskan oleh pernyataan bahwa sinar matahari yang mencapai permukaan Bumi …",
    options: [
      "didominasi oleh radiasi ionisasi",
      "tersusun terutama dari cahaya tampak dan inframerah",
      "seluruhnya berupa radiasi ultraviolet berenergi tinggi",
      "mampu melepaskan elektron dari atom kulit",
    ],
    answer: 2,
    explanation: "Seseorang berada di bawah paparan sinar matahari cukup lama. Kulit terasa panas, tetapi tidak terjadi ionisasi pada jaringan tubuh. Kondisi ini paling tepat dijelaskan oleh pernyataan bahwa sinar matahari yang mencapai permukaan Bumi adalah tersusun terutama dari cahaya tampak dan inframerah."
  },
  {
    question: "Perbedaan utama antar jenis radiasi terletak pada …",
    options: [
      "Warnanya",
      "Massanya",
      "Suaranya",
      "Bentuk dan energinya",
      "Lamanya paparan"
    ],
    answer: 3,
    explanation: "Perbedaan utama antar jenis radiasi terletak pada bentuk dan energinya."
  },
  {
    question: "Radiasi yang tidak mampu melepaskan elektron dari atom disebut …",
    options: [
      "Radiasi nuklir",
      "Radiasi partikel",
      "Radiasi ionisasi",
      "Radiasi non-ionisasi",
      "Radiasi kosmik"
    ],
    answer: 3,
    explanation: "Radiasi yang tidak mampu melepaskan elektron dari atom disebut Radiasi ionisasi."
  },
  {
    question: "Salah satu ciri radiasi non-ionisasi adalah …",
    options: [
      "Merusak DNA",
      "Mengionisasi atom",
      "Menembus beton",
      "Menimbulkan panas atau getaran energi",
      "Berasal dari inti atom"
    ],
    answer: 3,
    explanation: "Salah satu ciri radiasi non-ionisasi adalah Menembus beton."
  },
  {
    question: "Contoh radiasi non-ionisasi dalam kehidupan sehari-hari adalah …",
    options: [
      "Sinar gamma",
      "Partikel alfa",
      "Gelombang radio",
      "Sinar X",
      "Neutron"
    ],
    answer: 2
  },
  {
    question: "Radiasi ionisasi berbahaya bagi tubuh karena …",
    options: [
      "Menghasilkan panas",
      "Tidak terlihat mata",
      "Mengirim sinyal",
      "Dapat merusak sel dan DNA",
      "Mudah dipantulkan"
    ],
    answer: 3,
    explanation: "Radiasi ionisasi berbahaya bagi tubuh karena Mengirim sinyal"
  },
  {
    question: "Radiasi elektromagnetik merambat dalam bentuk …",
    options: [
      "Inti atom",
      "Elektron",
      "Atom",
      "Gelombang energi (foton)",
      "Molekul"
    ],
    answer: 3
  },
  {
    question: "Urutan spektrum elektromagnetik dari energi terendah ke tertinggi adalah …",
    options: [
      "Gamma – X – UV – radio",
      "Radio – mikro – inframerah – cahaya tampak – UV – X – gamma",
      "Cahaya tampak – radio – UV – X",
      "Mikro – radio – gamma – UV",
      "UV – X – gamma – radio"
    ],
    answer: 1
  },
  {
    question: "Radiasi yang termasuk non-ionisasi adalah …",
    options: [
      "Sinar gamma",
      "Sinar X",
      "UV tinggi",
      "Cahaya tampak",
      "Neutron"
    ],
    answer: 3
  },
  {
    question: "Radiasi partikel memiliki ciri utama yaitu …",
    options: [
      "Tidak bermassa",
      "Merambat sebagai gelombang",
      "Memiliki massa dan energi tinggi",
      "Tidak berbahaya",
      "Berasal dari matahari"
    ],
    answer: 2
  },
  {
    question: "Partikel alfa terdiri dari …",
    options: [
      "1 proton dan 1 neutron",
      "1 proton dan 2 neutron",
      "2 proton dan 2 neutron",
      "2 elektron",
      "1 proton dan 1 elektron"
    ],
    answer: 2
  },
  {
    question: "Radiasi yang dapat dihentikan oleh selembar kertas adalah …",
    options: [
      "Gamma",
      "Neutron",
      "Beta",
      "Alfa",
      "Sinar X"
    ],
    answer: 3
  },
  {
    question: "Radiasi yang memerlukan pelindung timbal atau beton adalah …",
    options: [
      "Alfa",
      "Beta",
      "Inframerah",
      "Gamma",
      "Gelombang radio"
    ],
    answer: 3
  },
  {
    question: "Contoh pemanfaatan radiasi di bidang medis adalah …",
    options: [
      "Gelombang radio untuk komunikasi",
      "Inframerah untuk remote",
      "Mikrogelombang untuk memasak",
      "Sinar X untuk diagnosa tulang",
      "Gamma untuk WiFi"
    ],
    answer: 3
  }
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
