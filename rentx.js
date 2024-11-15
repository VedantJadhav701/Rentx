// GSAP for Hero Section Animation
gsap.from('.hero-content h1', { opacity: 0, y: -50, duration: 1, ease: 'power2.out' });
gsap.from('.hero-content p', { opacity: 0, y: 50, duration: 1, delay: 0.5, ease: 'power2.out' });
gsap.from('.hero-content .btn', { opacity: 0, scale: 0.5, duration: 1, delay: 1, ease: 'elastic.out(1, 0.5)' });

// GSAP Scroll Animations for E-Bikes Section
gsap.from('.bike-card', {
    scrollTrigger: {
        trigger: '.bike-card',
        start: 'top 80%',
        toggleActions: 'play none none none',
    },
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.3,
    ease: 'power2.out'
});

// GSAP Footer Fade-in
gsap.from('footer', { opacity: 0, y: 50, duration: 1.5, ease: 'power2.out' });

// JavaScript for Form Transitions
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Add event listeners to toggle between sign-in and sign-up forms
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
