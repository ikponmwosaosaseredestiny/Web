const sliderTrack = document.querySelector(".slider-track");
const cards = document.querySelectorAll(".project-card");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;
let autoSlide;

// Number of cards visible
function getCardsPerView() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1100) return 2;
    return 3;
}

function updateSlider() {

    const cardsPerView = getCardsPerView();

    const cardWidth = cards[0].offsetWidth;
    const gap = 28;

    sliderTrack.style.transform =
        `translateX(-${currentIndex * (cardWidth + gap)}px)`;

}

// Next

function nextSlide() {

    const cardsPerView = getCardsPerView();

    if (currentIndex >= cards.length - cardsPerView) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }

    updateSlider();

}

// Previous

function prevSlide() {

    const cardsPerView = getCardsPerView();

    if (currentIndex <= 0) {
        currentIndex = cards.length - cardsPerView;
    } else {
        currentIndex--;
    }

    updateSlider();

}

// Buttons

nextBtn.addEventListener("click", () => {

    nextSlide();

    resetAutoSlide();

});

prevBtn.addEventListener("click", () => {

    prevSlide();

    resetAutoSlide();

});

// Auto Slide

function startAutoSlide() {

    autoSlide = setInterval(nextSlide, 4000);

}

function resetAutoSlide() {

    clearInterval(autoSlide);

    startAutoSlide();

}

// Pause on hover

sliderTrack.addEventListener("mouseenter", () => {

    clearInterval(autoSlide);

});

sliderTrack.addEventListener("mouseleave", () => {

    startAutoSlide();

});

// Responsive

window.addEventListener("resize", updateSlider);

// Initialize

updateSlider();

startAutoSlide();