// src/scripts/scroll-animations.js

// ===============================
// Seccion2 - tarjetas de servicios
// ===============================
function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-left, .fade-right');
    
    // ajuste de distancia
    const animationDistance = window.innerWidth < 768 ? 50 : 150;
    document.documentElement.style.setProperty('--animate-distance', `${animationDistance}px`);

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' 
    });
    elements.forEach(el => observer.observe(el));
}

// reiniar la animacion
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        initScrollAnimations();
    }, 250);
});


document.addEventListener('DOMContentLoaded', initScrollAnimations);
document.addEventListener('astro:after-swap', initScrollAnimations);

// ===============================
// Seccion3 - tarjtas de servicios
// ===============================
function initCardAnimations() {
    const cards = document.querySelectorAll(".service-card");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("opacity-0", "translate-y-6");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    cards.forEach(card => observer.observe(card));
    const flipCards = document.querySelectorAll(".service-card > div");
    flipCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.querySelector(".flip-card-front").classList.add("rotate-y-180");
            card.querySelector(".flip-card-back").classList.remove("rotate-y-180");
        });
        card.addEventListener("mouseleave", () => {
            card.querySelector(".flip-card-front").classList.remove("rotate-y-180");
            card.querySelector(".flip-card-back").classList.add("rotate-y-180");
        });
        
        card.addEventListener("click", () => {
            const front = card.querySelector(".flip-card-front");
            const back = card.querySelector(".flip-card-back");
            
            if (front.classList.contains("rotate-y-180")) {
                front.classList.remove("rotate-y-180");
                back.classList.add("rotate-y-180");
            } else {
                front.classList.add("rotate-y-180");
                back.classList.remove("rotate-y-180");
            }
        });
    });
}

// ===============================
// Seccion4 - scroll
// ===============================
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    const section = document.getElementById("contador-section");

    const speed = 150; 

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute("data-target");
                const count = +counter.innerText.replace('+','');
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
});


document.addEventListener("DOMContentLoaded", initCardAnimations);
document.addEventListener('astro:after-swap', initCardAnimations);

