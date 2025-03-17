function switchLanguage(lang) {
    document.querySelectorAll('[data-text-en]').forEach(el => {
        el.textContent = lang === 'en' ? el.getAttribute('data-text-en') : el.getAttribute('data-text-zh');
    });

    document.querySelectorAll('img').forEach(img => {
        img.alt = lang === 'en' ? img.getAttribute('data-alt-en') : img.getAttribute('data-alt-zh');
    });
}
