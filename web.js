// reveal on scroll
 
  function revealOnScroll() {
        const reveals = document.querySelectorAll(".reveal");

        reveals.forEach((el) => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 120;

            if (elementTop < windowHeight - elementVisible) {
                el.classList.add("active");
            }
        });
    }

        const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
            });
        },
        {
        threshold: 0.15
        }
    );

    /* jalan saat scroll */
    window.addEventListener("scroll", revealOnScroll);

    /* ⬅️ PENTING: jalan saat pertama kali load */
    window.addEventListener("load", revealOnScroll);

    
    // search bar functionality
    document.addEventListener("DOMContentLoaded", () => {

    const searchBox   = document.querySelector(".menu-search");
    const searchInput = document.querySelector(".menu-search input");
    const items = document.querySelectorAll(".search-item");

    if (!searchBox || !searchInput) {
        console.warn("Search bar tidak ada di halaman ini");
        return;
    }

    console.log("SEARCH READY");

    searchInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        e.preventDefault();

        const firstVisible = [...items].find(
            item => item.style.display !== "none"
        );

        if (firstVisible) {
            firstVisible.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
            firstVisible.classList.add("search-focus");

            setTimeout(() => {
                firstVisible.classList.remove("search-focus");
            }, 1200);
        }
    }
});

    // klik area search → focus
    searchBox.addEventListener("click", () => {
        searchInput.focus();
    });

    // search realtime
    searchInput.addEventListener("input", () => {
        const keyword = searchInput.value.toLowerCase().trim();

        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(keyword) ? "" : "none";
        });
    });

    // esc reset
    document.addEventListener("keydown", e => {
        if (e.key === "Escape") {
            searchInput.value = "";
            items.forEach(item => item.style.display = "");
        }
    });
});


// navbar mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuNav = document.querySelector('.menu-nav');
    const hamburger = document.querySelector('#hamburger-menu');
    const closeMenu = document.querySelector('#close-menu');

    // Buka menu
    if (hamburger) {
        hamburger.addEventListener('click', function(e) {
            e.preventDefault();
            menuNav.classList.add('active');
        });
    }

    // Tutup menu
    if (closeMenu) {
        closeMenu.addEventListener('click', function(e) {
            e.preventDefault();
            menuNav.classList.remove('active');
        });
    }

    // Tutup jika klik di luar sidebar
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !menuNav.contains(e.target)) {
            menuNav.classList.remove('active');
        }
    });
});




