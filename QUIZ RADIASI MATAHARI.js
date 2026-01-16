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
    question: "Radiasi matahari dapat mencapai permukaan Bumi meskipun ruang antara Matahari dan Bumi merupakan ruang hampa. Hal ini terjadi karena radiasi matahari …",
    options: [
      "berupa aliran partikel bermassa yang memerlukan medium",
      "merambat sebagai gelombang elektromagnetik yang tidak memerlukan medium",
      "hanya terdiri dari radiasi inframerah",
      "sepenuhnya diserap oleh atmosfer",
    ],
    answer: 1,
    explanation: "B. Radiasi matahari dapat mencapai permukaan Bumi meskipun ruang antara Matahari dan Bumi merupakan ruang hampa. Hal ini terjadi karena radiasi matahari merambat sebagai gelombang elektromagnetik yang tidak memerlukan medium"
  },
  {
    question: "Pernyataan yang paling tepat mengenai radiasi ultraviolet (UV) dari Matahari adalah …",
    options: [
      "Seluruh radiasi UV bersifat ionisasi dan langsung merusak DNA",
      "Radiasi UV termasuk non-ionisasi tetapi dapat menimbulkan efek biologis",
      "Radiasi UV tidak memiliki dampak bagi kesehatan manusia",
      "Radiasi UV hanya bermanfaat dan tidak berbahaya",
    ],
    answer: 1,
    explanation: "B. Pernyataan yang paling tepat mengenai radiasi ultraviolet (UV) dari Matahari adalah Radiasi UV termasuk non-ionisasi tetapi dapat menimbulkan efek biologis"
  },
  {
    question: "Jenis sinar UV yang paling banyak mencapai permukaan Bumi dan berperan besar dalam penuaan kulit jangka panjang adalah …",
    options: [
      "UVC",
      "UVB",
      "UVA",
      "Sinar Inframerah",
    ],
    answer: 2,
    explanation: "C. Jenis sinar UV yang paling banyak mencapai permukaan Bumi dan berperan besar dalam penuaan kulit jangka panjang adalah UVA"
  },
  {
    question: "Seorang siswa mengalami kulit memerah dan perih setelah berjemur di bawah sinar matahari dalam waktu singkat pada siang hari. Jenis radiasi UV yang paling berperan dalam kejadian tersebut adalah …",
    options: [
      "UVA",
      "UVB",
      "UVC",
      "Cahaya Tampak",
    ],
    answer: 1,
    explanation: "B. Seorang siswa mengalami kulit memerah dan perih setelah berjemur di bawah sinar matahari dalam waktu singkat pada siang hari. Jenis radiasi UV yang paling berperan dalam kejadian tersebut adalah UVB "
  },
  {
    question: "Radiasi UVC dari Matahari tidak menimbulkan dampak langsung bagi manusia di permukaan Bumi karena …",
    options: [
      "energinya terlalu kecil untuk memengaruhi tubuh",
      "panjang gelombangnya paling besar",
      "hampir seluruhnya diserap oleh atmosfer Bumi",
      "hanya dipancarkan pada malam hari",
    ],
    answer: 2,
    explanation: "C. Radiasi UVC dari Matahari tidak menimbulkan dampak langsung bagi manusia di permukaan Bumi karena hampir seluruhnya diserap oleh atmosfer Bumi"
  },
  {
    question: "Paparan sinar matahari dalam durasi singkat dan terkontrol justru dianjurkan bagi kesehatan karena …",
    options: [
      "seluruh radiasi UV aman bagi kulit",
      "membantu pembentukan vitamin D yang penting bagi tulang dan sistem imun",
      "mencegah penuaan kulit secara total",
      "menghilangkan risiko kanker kulit",
    ],
    answer: 1,
    explanation: "B. Paparan sinar matahari dalam durasi singkat dan terkontrol justru dianjurkan bagi kesehatan karena membantu pembentukan vitamin D yang penting bagi tulang dan sistem imun "
  },
  {
    question: "Seorang siswa sering beraktivitas di luar ruangan tanpa perlindungan dan mulai mengalami keriput serta noda kulit meskipun masih muda. Dampak tersebut paling tepat disebabkan oleh …",
    options: [
      "paparan UVB jangka pendek",
      "paparan UVA jangka panjang",
      "radiasi inframerah dari Matahari",
      "kekurangan vitamin D",
    ],
    answer: 1,
    explanation: "B. Seorang siswa sering beraktivitas di luar ruangan tanpa perlindungan dan mulai mengalami keriput serta noda kulit meskipun masih muda. Dampak tersebut paling tepat disebabkan oleh paparan UVA jangka panjang "
  },
  {
    question: "Seorang pekerja mengalami kulit memerah dan nyeri setelah bekerja di bawah terik Matahari selama beberapa jam. Gejala ini merupakan indikasi terjadinya …",
    options: [
      "photoaging akibat UVA",
      "sunburn akibat UVB",
      "imunosupresi akibat UVC",
      "katarak akibat cahaya tampak",
    ],
    answer: 1,
    explanation: "B. Seorang pekerja mengalami kulit memerah dan nyeri setelah bekerja di bawah terik Matahari selama beberapa jam. Gejala ini merupakan indikasi terjadinya sunburn akibat UVB"
  },
  {
    question: "Intensitas radiasi UV cenderung paling tinggi pada rentang waktu pukul 10.00–16.00 karena …",
    options: [
      "Matahari memancarkan lebih banyak energi pada waktu tersebut",
      "posisi Matahari lebih rendah sehingga sinar menyebar",
      "jalur radiasi melalui atmosfer lebih pendek",
      "refleksi permukaan Bumi berkurang",
    ],
    answer: 2,
    explanation: "C. Intensitas radiasi UV cenderung paling tinggi pada rentang waktu pukul 10.00–16.00 karena jalur radiasi melalui atmosfer lebih pendek"
  },
  {
    question: "Paparan radiasi UV tetap dapat berbahaya meskipun cuaca mendung. Hal ini disebabkan oleh …",
    options:[
      "awan memantulkan seluruh radiasi UV ke permukaan",
      "radiasi UV dapat menembus awan dalam jumlah tertentu",
      "suhu udara rendah meningkatkan energi UV",
      "cahaya tampak berubah menjadi UV",
    ],
    answer: 1,
    explanation: "B. Paparan radiasi UV tetap dapat berbahaya meskipun cuaca mendung. Hal ini disebabkan oleh radiasi UV dapat menembus awan dalam jumlah tertentu"

  },
  {
    question: "Paparan radiasi UV pada manusia tidak dinilai hanya dari satu kali kejadian, melainkan dari akumulasi paparan selama bertahun-tahun. Hal ini terutama karena …",
    options: [
    "efek radiasi UV hanya muncul pada usia lanjut",
    "tubuh manusia tidak mampu memperbaiki kerusakan akibat UV",
    "radiasi UV dapat menyebabkan kerusakan kronis yang bersifat kumulatif",
    "intensitas UV selalu sama setiap hari",
  ],
  answer: 2,
  explanation: "C. Paparan radiasi UV pada manusia tidak dinilai hanya dari satu kali kejadian, melainkan dari akumulasi paparan selama bertahun-tahun. Hal ini terutama karena radiasi UV dapat menyebabkan kerusakan kronis yang bersifat kumulatif"
  },
  {
    question: "Seorang petugas keamanan bekerja di luar ruangan dari pukul 09.00 hingga 16.00 setiap hari. Risiko kesehatan yang paling meningkat akibat kondisi tersebut adalah …",
    options: [
      "gangguan pendengaran",
      "penurunan suhu tubuh",
      "kerusakan kulit dan mata akibat paparan UV berulang",
      "kekurangan vitamin D",
    ],
    answer: 2,
    explanation: "C. Seorang petugas keamanan bekerja di luar ruangan dari pukul 09.00 hingga 16.00 setiap hari. Risiko kesehatan yang paling meningkat akibat kondisi tersebut adalah kerusakan kulit dan mata akibat paparan UV berulang"
  },
  {
    question: "Penggunaan sunscreen dengan SPF 30 dan bersifat broad-spectrum dianjurkan karena …",
    options: [
      "sepenuhnya menghilangkan paparan radiasi UV",
      "hanya melindungi dari radiasi UVA",
      "mampu mengurangi paparan UVA dan UVB secara bersamaan",
      "menggantikan fungsi pakaian pelindung",
    ],
    answer: 2,
    explanation: "C. Penggunaan sunscreen dengan SPF 30 dan bersifat broad-spectrum dianjurkan karena mampu mengurangi paparan UVA dan UVB secara bersamaan "
  },
  {
    question: "Meskipun menggunakan sunscreen, tubuh masih dapat memproduksi vitamin D apabila …",
    options: [  
      "paparan dilakukan singkat dan tidak sampai menyebabkan sunburn",
      "paparan dilakukan pada jam puncak UV",
      "sunscreen digunakan dengan SPF sangat tinggi sepanjang hari",
      "paparan hanya berasal dari cahaya tampak",
    ],
    answer: 0,
    explanation:  "A. Meskipun menggunakan sunscreen, tubuh masih dapat memproduksi vitamin D apabila paparan dilakukan singkat dan tidak sampai menyebabkan sunburn"
  },
  {
    question: "Alasan utama mengapa upaya perlindungan terhadap radiasi matahari dianjurkan sejak usia muda adalah …",
    options: [
      "kulit remaja lebih tebal dibandingkan orang dewasa",
      "dampak radiasi UV bersifat langsung dan tidak berjangka panjang",
      "efek paparan UV dapat terakumulasi dan baru tampak setelah bertahun-tahun",
      "radiasi UV hanya berbahaya bagi anak-anak",
    ],
    answer: 2,
    explanation: "C. Alasan utama mengapa upaya perlindungan terhadap radiasi matahari dianjurkan sejak usia muda adalah efek paparan UV dapat terakumulasi dan baru tampak setelah bertahun-tahun"
  },
];


// --- IDENTITAS KUIS & PENGAMBILAN DATA ---
const QUIZ_ID = "quiz_radiasi_matahari_dan_paparan_sehari-hari"; // ID ini harus sama dengan logika di soal.html
const savedData = JSON.parse(localStorage.getItem(QUIZ_ID));

let index = (savedData && savedData.lastIndex) ? savedData.lastIndex : 0;
let score = 0;
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

  // --- SIMPAN DATA KE LOCALSTORAGE AGAR soal.html BISA MEMBACA ---
  const progressData = {
    answered: answered,
    total: total,
    percent: percent,
    answers: userAnswers,
    lastIndex: index
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

    updateProgress(); 
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
