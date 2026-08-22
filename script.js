document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    // Pastikan elemen tersedia
    if (!menuToggle || !navMenu) {
        return;
    }

    // Kondisi awal
    menuToggle.setAttribute("aria-expanded", "false");

    // Buka / tutup menu mobile
    menuToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );
    });

    // Tutup menu setelah memilih menu
    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        });
    });

    // Tutup menu ketika menekan Escape
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            navMenu.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        }
    });

    // Tutup menu ketika pengguna mengetuk area di luar navbar
    document.addEventListener("click", (event) => {
        const clickedInsideNavbar =
            event.target.closest(".navbar");

        if (!clickedInsideNavbar) {
            navMenu.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        }
    });

    // Tutup menu ketika kembali ke tampilan desktop
    window.addEventListener("resize", () => {
        if (window.innerWidth > 900) {
            navMenu.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        }
    });
});
