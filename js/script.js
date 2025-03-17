let currentIndex = 0;

function nextSlide() {
    const slides = document.querySelector('.slides');
    currentIndex = (currentIndex + 1) % slides.children.length;
    updateSlide();
}

function prevSlide() {
    const slides = document.querySelector('.slides');
    currentIndex = (currentIndex - 1 + slides.children.length) % slides.children.length;
    updateSlide();
}

function updateSlide() {
    const slides = document.querySelector('.slides');
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function switchLanguage(lang) {
    document.querySelectorAll('[data-text-en]').forEach(el => {
        el.textContent = lang === 'en' ? el.getAttribute('data-text-en') : el.getAttribute('data-text-zh');
    });

    document.querySelectorAll('img').forEach(img => {
        img.alt = lang === 'en' ? img.getAttribute('data-alt-en') : img.getAttribute('data-alt-zh');
    });
}
