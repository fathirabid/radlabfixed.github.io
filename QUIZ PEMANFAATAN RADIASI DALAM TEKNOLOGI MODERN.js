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
    question: "Pernyataan yang paling tepat menjelaskan mengapa radiasi tidak selalu berbahaya bagi manusia adalah …",
    options: [
      "Radiasi hanya berbahaya jika berasal dari alam",
      "Semua radiasi dapat dimanfaatkan tanpa risiko",
      "Bahaya radiasi bergantung pada dosis, jenis, dan cara penggunaannya",
      "Radiasi berbahaya hanya pada bidang kesehatan",
    ],
    answer: 3,
    explanation: "Pernyataan yang paling tepat menjelaskan mengapa radiasi tidak selalu berbahaya bagi manusia adalah Bahaya radiasi bergantung pada dosis, jenis, dan cara penggunaannya"
  },
  {
    question: "Prinsip utama yang dimanfaatkan dalam radiologi diagnostik sehingga tulang tampak lebih jelas dibandingkan jaringan lunak pada foto rontgen adalah …",
    options: [
      "Hamburan Compton yang sama pada semua jaringan",
      "Perbedaan kemampuan penyerapan sinar X oleh jaringan",
      "Produksi pasangan di dalam tulang",
      "Emisi radiasi sekunder dari jaringan lunak",
    ],
    answer: 2,
    explanation: "Prinsip utama yang dimanfaatkan dalam radiologi diagnostik sehingga tulang tampak lebih jelas dibandingkan jaringan lunak pada foto rontgen adalah Perbedaan kemampuan penyerapan sinar X oleh jaringan"
  },
  {
    question: "Radioterapi dapat menghancurkan sel kanker tetapi tetap berusaha melindungi jaringan sehat di sekitarnya karena …",
    options: [
      " Sel kanker tidak menyerap radiasi",
      "Radiasi hanya bekerja pada sel sehat",
      "Berkas radiasi dapat difokuskan dan dosisnya direncanakan secara presisi",
      "Jaringan sehat kebal terhadap radiasi",
    ],
    answer: 3,
    explanation: "Radioterapi dapat menghancurkan sel kanker tetapi tetap berusaha melindungi jaringan sehat di sekitarnya karena Berkas radiasi dapat difokuskan dan dosisnya direncanakan secara presisi"
  },
  {
    question: "Perbedaan utama antara CT scan dan PET scan adalah …",
    options: [
      "CT scan menggunakan zat radioaktif, PET scan tidak",
      "CT scan menampilkan fungsi organ, PET scan menampilkan struktur",
      "CT scan menekankan citra anatomi, sedangkan PET scan menilai fungsi/metabolisme",
      "Keduanya sama-sama hanya menampilkan tulang",
    ],
    answer: 3,
    explanation: "Perbedaan utama antara CT scan dan PET scan adalah CT scan menekankan citra anatomi, sedangkan PET scan menilai fungsi/metabolisme"
  },
  {
    question: "Penggunaan radiasi dalam radiografi industri dianggap penting karena …",
    options: [
      "kecepatan rambat Dapat memperbaiki cacat pada logam",
      "Mampu mendeteksi kerusakan internal tanpa merusak objek",
      "Menghasilkan panas untuk menguji kekuatan bahan",
      "Hanya digunakan pada material plastik",
    ],
    answer: 2,
    explanation: "Penggunaan radiasi dalam radiografi industri dianggap penting karena mampu mendeteksi kerusakan internal tanpa merusak objek"
  },
  {
    question: "Salah satu kesalahpahaman tentang iradiasi pangan adalah anggapan bahwa makanan menjadi radioaktif. Pernyataan yang paling tepat untuk meluruskan hal tersebut adalah …",
    options: [
      "Radiasi diserap permanen oleh makanan",
      "Radiasi hanya menghangatkan makanan",
      "Radiasi melewati makanan dan tidak meninggalkan radioaktivitas",
      "Radiasi berubah menjadi zat kimia baru di dalam makanan",
    ],
    answer: 3,
    explanation: "Salah satu kesalahpahaman tentang iradiasi pangan adalah anggapan bahwa makanan menjadi radioaktif. Pernyataan yang paling tepat untuk meluruskan hal tersebut adalah radiasi melewati makanan dan tidak meninggalkan radioaktivitas"
  },
  {
    question: "Iradiasi fitosanitasi dalam perdagangan internasional dianggap lebih menguntungkan dibandingkan penggunaan pestisida kimia karena …",
    options: [
      "Membuat tanaman tumbuh lebih cepat",
      "Menghilangkan seluruh unsur kimia pada produk",
      "Mengendalikan hama tanpa residu kimia berbahaya",
      "Menjadikan produk pertanian radioaktif",
    ],
    answer: 3,
    explanation: "Iradiasi fitosanitasi dalam perdagangan internasional dianggap lebih menguntungkan dibandingkan penggunaan pestisida kimia karena mengendalikan hama tanpa residu kimia berbahaya"
  },
  {
    question: "Gelombang radio dan gelombang mikro dapat digunakan untuk komunikasi jarak jauh terutama karena …",
    options: [
      "Bersifat radiasi pengion",
      "Mampu membawa informasi melalui proses modulasi sinyal",
      "Memiliki energi sangat besar",
      "Dapat merusak molekul udara",
    ],
    answer: 2,
    explanation: "Gelombang radio dan gelombang mikro dapat digunakan untuk komunikasi jarak jauh terutama karena mampu membawa informasi melalui proses modulasi sinyal"
  },
  {
    question: "Perbedaan utama pemanfaatan radiasi pada pembangkit listrik tenaga nuklir dibandingkan dengan radiografi atau iradiasi pangan adalah …",
    options: [
      "Radiasi hanya digunakan pada tahap akhir proses",
      "Radiasi berfungsi sebagai sumber panas dari reaksi fisi inti",
      "Radiasi digunakan untuk membunuh mikroorganisme",
      "Radiasi tidak memerlukan sistem pengendalian",
    ],
    answer: 2,
    explanation: "Perbedaan utama pemanfaatan radiasi pada pembangkit listrik tenaga nuklir dibandingkan dengan radiografi atau iradiasi pangan adalah radiasi berfungsi sebagai sumber panas dari reaksi fisi inti"
  },
  {
    question: "Penggunaan sinar X dan neutron dalam penelitian material canggih bertujuan utama untuk …",
    options:[
      "Menghancurkan struktur material",
      "Menghasilkan energi listrik",
      "Menyelidiki susunan atom dan sifat material",
      "Mengurangi massa material",
    ],
    answer:3,
    explanation: "Penggunaan sinar X dan neutron dalam penelitian material canggih bertujuan utama untuk menyelidiki susunan atom dan sifat material"

  },
  {
    question: "Pemanfaatan radiasi pada sistem pemindai bagasi di bandara dianggap aman bagi penumpang karena …",
    options: [
    "Radiasi yang digunakan bersifat radioaktif",
    "Paparan radiasi diatur sangat rendah dan berada di bawah batas keselamatan",
    "Radiasi hanya mengenai benda logam",
    "Radiasi tidak berinteraksi dengan tubuh manusia",
  ],
  answer: 2,
  explanation: "Pemanfaatan radiasi pada sistem pemindai bagasi di bandara dianggap aman bagi penumpang karena Paparan radiasi diatur sangat rendah dan berada di bawah batas keselamatan"
  },
  {
    question: "Prinsip utama yang digunakan dalam penanggalan radiokarbon (carbon-14 dating) adalah …",
    options: [
      "Perbedaan massa jenis bahan organik",
      "Perbandingan intensitas cahaya yang dipantulkan objek",
      "Laju peluruhan radioaktif isotop karbon-14 yang tetap",
      "Perubahan warna bahan organik seiring waktu",
    ],
    answer: 3,
    explanation: "Prinsip utama yang digunakan dalam penanggalan radiokarbon (carbon-14 dating) adalah Laju peluruhan radioaktif isotop karbon-14 yang tetap"
  },
  {
    question: "Dosimeter digital digunakan di lingkungan kerja yang melibatkan radiasi terutama untuk …",
    options: [
      "Menghilangkan radiasi di sekitar pekerja",
      "Menghasilkan radiasi untuk keperluan industri",
      "Memantau akumulasi dosis radiasi yang diterima pekerja",
      "Mengubah radiasi menjadi energi listrik",
    ],
    answer: 3,
    explanation: "Dosimeter digital digunakan di lingkungan kerja yang melibatkan radiasi terutama untuk Memantau akumulasi dosis radiasi yang diterima pekerja"
  },
  {
    question: "Pernyataan yang paling tepat membedakan radiasi yang digunakan dalam keamanan penerbangan dengan radiasi yang berperan dalam efek rumah kaca adalah …",
    options: [  
      "Keduanya merupakan radiasi pengion",
      "Radiasi pemindai bandara bersifat radioaktif, radiasi rumah kaca tidak",
      "Efek rumah kaca melibatkan radiasi inframerah non-ionisasi yang diserap atmosfer",
      "Radiasi bandara menyebabkan pemanasan global",
    ],
    answer: 3,
    explanation:  "Pernyataan yang paling tepat membedakan radiasi yang digunakan dalam keamanan penerbangan dengan radiasi yang berperan dalam efek rumah kaca adalah Efek rumah kaca melibatkan radiasi inframerah non-ionisasi yang diserap atmosfer"
  },
  {
    question: "Efek rumah kaca terjadi karena …",
    options: [
      "Radiasi pengion dari Matahari terperangkap di atmosfer",
      "Radiasi inframerah dari permukaan Bumi diserap dan dipancarkan kembali oleh gas rumah kaca",
      "Gelombang radio dipantulkan oleh awan",
      "Sinar X Matahari menembus atmosfer dan memanaskan Bumi",
    ],
    answer: 2,
    explanation: "Efek rumah kaca terjadi karena Radiasi inframerah dari permukaan Bumi diserap dan dipancarkan kembali oleh gas rumah kaca"
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
