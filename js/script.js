function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
}

window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 10) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const phones = document.querySelectorAll(".phone-img");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("phone-animate");
                }
            });
        },
        { threshold: 0.3 }
    );

    phones.forEach(phone => observer.observe(phone));
});






/*nethni */
// 3D Hover Tilt Effect
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 12; 
        const rotateX = ((y / rect.height) - 0.5) * -12;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
        card.style.transition = "transform 0.1s ease-out";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0) scale(1)";
        card.style.transition = "transform 0.4s ease";
    });
});
