document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".item");
    const themeToggle = document.getElementById("theme-toggle");
    const contactForm = document.getElementById("contact-form");

    // Check and apply saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
    }

    // Theme switcher
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");

        // Save theme preference
        if (document.body.classList.contains("dark-theme")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.removeItem("theme");
        }
    });

    // Project hover effect
    items.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "scale(1.1)";
            item.style.transition = "0.3s";
        });

        item.addEventListener("mouseleave", () => {
            item.style.transform = "scale(1)";
        });
    });

    // Contact form submission (Mock)
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for reaching out! I'll get back to you soon.");
    });
});