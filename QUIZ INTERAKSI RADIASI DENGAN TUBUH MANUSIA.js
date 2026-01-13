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
    question: "Pernyataan berikut yang paling tepat menjelaskan mengapa radiasi tidak selalu menimbulkan efek biologis yang sama pada setiap benda atau tubuh manusia adalah …",
    options: [
      "Semua jenis radiasi selalu diserap sepenuhnya oleh materi",
      "Efek radiasi hanya ditentukan oleh lamanya paparan",
      "Jenis radiasi dan energi yang dibawanya menentukan cara interaksi dengan materi",
      "Radiasi selalu menyebabkan ionisasi pada setiap atom yang dilewatinya",
    ],
    answer: 3,
    explanation: "Pernyataan berikut yang paling tepat menjelaskan mengapa radiasi tidak selalu menimbulkan efek biologis yang sama pada setiap benda atau tubuh manusia adalah Jenis radiasi dan energi yang dibawanya menentukan cara interaksi dengan materi"
  },
  {
    question: "Ketika radiasi berenergi rendah melewati suatu bahan dan hanya mengubah arah rambatnya tanpa perubahan energi yang signifikan, proses yang paling mungkin terjadi adalah …",
    options: [
      "Ionisasi",
      "Eksitasi",
      "Penyerapan total",
      "Hamburan (scatter)",
    ],
    answer: 3,
    explanation: "Ketika radiasi berenergi rendah melewati suatu bahan dan hanya mengubah arah rambatnya tanpa perubahan energi yang signifikan, proses yang paling mungkin terjadi adalah Penyerapan total"
  },
  {
    question: "Perbedaan utama antara proses ionisasi dan eksitasi akibat interaksi radiasi dengan atom adalah …",
    options: [
      "Ionisasi terjadi pada energi rendah, sedangkan eksitasi pada energi tinggi",
      "Ionisasi menyebabkan elektron berpindah orbit, eksitasi melepaskan elektron",
      "Ionisasi menghasilkan atom bermuatan, sedangkan eksitasi tidak",
      "Ionisasi hanya terjadi pada molekul air, eksitasi hanya pada DNA",
    ],
    answer: 2,
    explanation: "Perbedaan utama antara proses ionisasi dan eksitasi akibat interaksi radiasi dengan atom adalah Ionisasi menyebabkan elektron berpindah orbit, eksitasi melepaskan elektron"
  },
  {
    question: "Kerusakan DNA akibat interaksi tidak langsung radiasi terutama disebabkan oleh …",
    options: [
      "Tumbukan langsung radiasi dengan inti atom DNA",
      "Radikal bebas hasil ionisasi molekul air di dalam sel",
      "Pemanasan jaringan akibat radiasi",
      "Penyerapan energi oleh protein membran sel",
    ],
    answer: 3,
    explanation: "Kerusakan DNA akibat interaksi tidak langsung radiasi terutama disebabkan oleh Pemanasan jaringan akibat radiasi"
  },
  {
    question: "Pernyataan berikut yang paling tepat menggambarkan perbedaan interaksi langsung dan tidak langsung radiasi pada tubuh manusia adalah …",
    options: [
      "Interaksi langsung hanya terjadi pada jaringan tulang",
      "Interaksi tidak langsung selalu lebih lemah dibandingkan interaksi langsung",
      "Interaksi langsung melibatkan radiasi mengenai biomolekul penting secara langsung",
      "Interaksi tidak langsung tidak menimbulkan kerusakan sel",
    ],
    answer: 3,
    explanation: "Pernyataan berikut yang paling tepat menggambarkan perbedaan interaksi langsung dan tidak langsung radiasi pada tubuh manusia adalah Interaksi langsung melibatkan radiasi mengenai biomolekul penting secara langsung"
  },
  {
    question: "Dalam pemeriksaan rontgen, tulang tampak lebih putih dibandingkan jaringan lunak. Fenomena ini terutama disebabkan oleh …",
    options: [
      "Hamburan Compton yang dominan pada tulang",
      "Efek fotoelektrik yang lebih sering terjadi pada atom bernomor atom tinggi",
      "Produksi pasangan yang terjadi pada energi sinar X diagnostik",
      "Penetrasi sinar X yang sama pada semua jenis jaringan",
    ],
    answer: 2,
    explanation: "Dalam pemeriksaan rontgen, tulang tampak lebih putih dibandingkan jaringan lunak. Fenomena ini terutama disebabkan oleh Efek fotoelektrik yang lebih sering terjadi pada atom bernomor atom tinggi"
  },
  {
    question: "Mekanisme interaksi sinar X/gamma yang menyebabkan foton tetap ada setelah tumbukan, namun energinya berkurang dan arah rambatnya berubah, adalah …",
    options: [
      "Efek fotoelektrik",
      "Eksitasi atom",
      "Hamburan Compton",
      "Produksi pasangan",
    ],
    answer: 3,
    explanation: "Mekanisme interaksi sinar X/gamma yang menyebabkan foton tetap ada setelah tumbukan, namun energinya berkurang dan arah rambatnya berubah, adalah Hamburan Compton"
  },
  {
    question: "Urutan tahapan yang paling tepat menggambarkan proses terjadinya efek biologis akibat radiasi pengion adalah …",
    options: [
      "Tahap kimia → interaksi fisik → respon biologis",
      "Respon biologis → tahap fisik → tahap kimia",
      "Interaksi fisik → tahap kimia → respon biologis",
      "Interaksi fisik → respon biologis → tahap kimia",
    ],
    answer: 3,
    explanation: "rutan tahapan yang paling tepat menggambarkan proses terjadinya efek biologis akibat radiasi pengion adalah Interaksi fisik → tahap kimia → respon biologis"
  },
  {
    question: "Pernyataan yang paling tepat menjelaskan mengapa dampak radiasi seperti kanker sering baru muncul bertahun-tahun setelah paparan adalah …",
    options: [
      "Radiasi hanya bekerja pada jaringan keras",
      "Efek biologis merupakan hasil akumulasi kerusakan DNA dan proses seluler jangka panjang",
      "Ionisasi baru terjadi lama setelah radiasi mengenai tubuh",
      "Radiasi pengion baru aktif setelah usia tertentu",
    ],
    answer: 2,
    explanation: "Pernyataan yang paling tepat menjelaskan mengapa dampak radiasi seperti kanker sering baru muncul bertahun-tahun setelah paparan adalah Efek biologis merupakan hasil akumulasi kerusakan DNA dan proses seluler jangka panjang"
  },
  {
    question: "Cahaya dari layar HP dapat menyebabkan kelelahan mata, tetapi tidak merusak DNA seperti sinar X. Hal ini terutama karena …",
    options:[
      "Energi cahaya layar terlalu kecil untuk menyebabkan ionisasi atom",
      "Cahaya layar tidak berinteraksi dengan jaringan mata",
      "Intensitas cahaya layar selalu lebih kecil dari sinar X",
      "Mata manusia kebal terhadap semua radiasi elektromagnetik",
    ],
    answer:1,
    explanation: "Cahaya dari layar HP dapat menyebabkan kelelahan mata, tetapi tidak merusak DNA seperti sinar X. Hal ini terutama karena Energi cahaya layar terlalu kecil untuk menyebabkan ionisasi atom"

  },
  {
    question: "Kerusakan DNA akibat radiasi dianggap sangat berbahaya bagi sel karena …",
    options: [
    "DNA mudah larut dalam air sel",
    "DNA menyimpan informasi genetik yang mengatur pembelahan dan fungsi sel",
    "DNA selalu berada di permukaan sel",
    "DNA tidak memiliki mekanisme perbaikan",
  ],
  answer: 2,
  explanation: "Kerusakan DNA akibat radiasi dianggap sangat berbahaya bagi sel karena DNA menyimpan informasi genetik yang mengatur pembelahan dan fungsi sel"
  },
  {
    question: "Pernyataan yang paling tepat mengenai peran radikal bebas dalam kerusakan sel akibat radiasi adalah …",
    options: [
      "Radikal bebas hanya merusak DNA secara langsung",
      "Radikal bebas tidak dapat bergerak dari titik ionisasi",
      "Radikal bebas dapat merusak DNA, lipid membran, dan protein",
      "Radikal bebas hanya terbentuk pada jaringan tulang",
    ],
    answer: 3,
    explanation: "Pernyataan yang paling tepat mengenai peran radikal bebas dalam kerusakan sel akibat radiasi adalah Radikal bebas dapat merusak DNA, lipid membran, dan protein"
  },
  {
    question: "Mengapa kerusakan akibat radikal bebas dapat lebih luas dibandingkan daerah awal yang terkena radiasi?",
    options: [
      "Radiasi selalu menyebar ke seluruh jaringan",
      "Radikal bebas dapat bereaksi berantai dan menyebar di dalam sel",
      "DNA menarik radikal bebas secara aktif",
      "Semua sel memiliki sensitivitas yang sama terhadap radiasi",
    ],
    answer: 2,
    explanation: "Mengapa kerusakan akibat radikal bebas dapat lebih luas dibandingkan daerah awal yang terkena radiasi karena Radikal bebas dapat bereaksi berantai dan menyebar di dalam sel "
  },
  {
    question: "Jika sejumlah besar sel dalam suatu jaringan mengalami kerusakan berat akibat radiasi, maka efek yang paling mungkin terjadi adalah …",
    options: [  
      "Peningkatan energi ikatan kimia",
      "Gangguan fungsi jaringan atau organ",
      "Penurunan jumlah radikal bebas",
      "Percepatan pembelahan sel normal",
    ],
    answer: 2,
    explanation:  "Jika sejumlah besar sel dalam suatu jaringan mengalami kerusakan berat akibat radiasi, maka efek yang paling mungkin terjadi adalah Gangguan fungsi jaringan atau organ"
  },
  {
    question: "Material seperti timbal (Pb) digunakan sebagai pelindung radiasi karena …",
    options: [
      "Memiliki warna gelap yang menyerap cahaya ",
      "Bersifat elastis dan mudah dibentuk",
      "Memiliki nomor atom dan kerapatan tinggi sehingga efektif menyerap foton berenergi tinggi",
      "Tidak dapat berinteraksi dengan radiasi",
    ],
    answer: 3,
    explanation: "Material seperti timbal (Pb) digunakan sebagai pelindung radiasi karena Memiliki nomor atom dan kerapatan tinggi sehingga efektif menyerap foton berenergi tinggi"
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
