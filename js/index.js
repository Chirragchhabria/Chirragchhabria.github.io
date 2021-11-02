// Splide
new Splide('.splide', {
    type: 'loop',
    height: "450px",
    autoWidth: true,
    gap: "25px",
    arrows: false,
    pagination: false,
    perMove: 1,
}).mount();

// Intro
var tl = gsap.timeline()
tl.from('.row', {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "expo.inOut"
}, "<").from('.splide__slide', {
    y: 100,
    opacity: 0,
    duration: 1.1,
    stagger: 0.1,
    ease: "expo.inOut"
}, "<-1");

// Cursor move
document.addEventListener('mousemove', e => {
    gsap.set(".cursor-sm", { top: e.clientY, left: e.clientX });
    gsap.set(".cursor-text", { top: e.clientY, left: e.clientX });
    gsap.to(".cursor-lg", { top: e.clientY, left: e.clientX, duration: 0.2, ease: "power2.out" });
});

// Cursor click
document.addEventListener('mousedown', () => { gsap.to(".cursor-lg", { scale: 0.8, duration: 0.1, ease: "power2.in" }) });
document.addEventListener('mouseup', () => { gsap.to(".cursor-lg", { scale: 1, duration: 0.1, ease: "power2.out" }) });

// Slideshow drag cursor
document.querySelector('.splide').addEventListener('mouseover', () => {
    gsap.set('.cursor-sm', { opacity: 0 });
    gsap.set('.cursor-lg', { opacity: 0 });
    gsap.set('.cursor-text', { opacity: 1 });
});

document.querySelector('.splide').addEventListener('mouseout', () => {
    gsap.set('.cursor-sm', { opacity: 1 });
    gsap.set('.cursor-lg', { opacity: 1 });
    gsap.set('.cursor-text', { opacity: 0 });
});

// Link/Button hover cursor
document.querySelectorAll('a').forEach(
    function(link) {

        link.addEventListener('mouseover', () => {
            gsap.set('.cursor-lg', { backgroundColor: "#fff", duration: 0.1, ease: "power2.in" });
            gsap.set('.cursor-sm', { opacity: 0 });
        });

        link.addEventListener('mouseout', () => {
            gsap.set('.cursor-lg', { backgroundColor: "#000", duration: 0.1, ease: "power2.in" });
            gsap.set('.cursor-sm', { opacity: 1 });
        });

    }
)

