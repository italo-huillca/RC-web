// src/scripts/scroll-animations.js

// ===============================
// Seccion2 - tarjetas de servicios
// ===============================
function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-left, .fade-right');
    if (!elements.length) return; 

    const animationDistance = window.innerWidth < 768 ? 50 : 150;
    document.documentElement.style.setProperty('--animate-distance', `${animationDistance}px`);

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                obs.unobserve(entry.target); 
            }
        });
    }, { 
        threshold: 0.2,
        rootMargin: '0px 0px -20px 0px' 
    });

    elements.forEach(el => observer.observe(el));
}

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(initScrollAnimations, 250);
});

document.addEventListener('DOMContentLoaded', initScrollAnimations);
document.addEventListener('astro:after-swap', initScrollAnimations);

// ===============================
// Seccion3 - tarjetas de servicios
// ===============================
function initCardAnimations() {
    const cards = document.querySelectorAll(".service-card");
    if (!cards.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("opacity-0", "translate-y-6");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));

    const flipCards = document.querySelectorAll(".service-card > div");
    flipCards.forEach(card => {
        const front = card.querySelector(".flip-card-front");
        const back = card.querySelector(".flip-card-back");

        card.addEventListener("mouseenter", () => {
            front.classList.add("rotate-y-180");
            back.classList.remove("rotate-y-180");
        });

        card.addEventListener("mouseleave", () => {
            front.classList.remove("rotate-y-180");
            back.classList.add("rotate-y-180");
        });

        card.addEventListener("click", () => {
            front.classList.toggle("rotate-y-180");
            back.classList.toggle("rotate-y-180");
        });
    });
}

document.addEventListener("DOMContentLoaded", initCardAnimations);
document.addEventListener('astro:after-swap', initCardAnimations);

// ===============================
// Seccion4 - experiencia (contador)
// ===============================
function initCounterAnimation() {
    const counters = document.querySelectorAll(".counter");
    const section = document.getElementById("contador-section");
    const speed = 150;

    if (!section) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(counter => {
                    const updateCount = () => {
                        const target = +counter.getAttribute("data-target");
                        const count = +counter.innerText.replace('+', '');
                        const increment = Math.ceil(target / speed);

                        if (count < target) {
                            counter.innerText = `${count + increment}+`;
                            setTimeout(updateCount, 80);
                        } else {
                            counter.innerText = `${target}+`;
                        }
                    };
                    updateCount();
                });
                obs.disconnect();
            }
        });
    }, { threshold: 0.3 });

    observer.observe(section);
}

document.addEventListener("DOMContentLoaded", initCounterAnimation);
document.addEventListener('astro:after-swap', initCounterAnimation);


// ===============================
// Seccion4 - clientes
// ===============================

function initClientesSlider() {
    const slider = document.getElementById("clientes-slider");
    if (!slider) return;

    const items = Array.from(slider.children);
    let itemsPerView = window.innerWidth < 768 ? 1 : 3; 

    items.forEach(item => {
        const clone = item.cloneNode(true);
        slider.appendChild(clone);
    });

    slider.style.display = "flex";
    slider.style.flexWrap = "nowrap";
    slider.style.transition = "transform 0.5s linear";

    let index = 0;
    let slideWidth = 100 / itemsPerView; 

    setInterval(() => {
        index++;
        slider.style.transform = `translateX(-${index * slideWidth}%)`;

        if (index >= items.length) {
            setTimeout(() => {
                slider.style.transition = "none";
                slider.style.transform = "translateX(0)";
                index = 0;
                setTimeout(() => {
                    slider.style.transition = "transform 0.5s linear";
                }, 50);
            }, 500);
        }
    }, 2000);
}

document.addEventListener("DOMContentLoaded", () => {
    initCounterAnimation();
    initClientesSlider();
});

document.addEventListener("astro:after-swap", () => {
    initCounterAnimation();
    initClientesSlider();
});

