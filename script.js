document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");
    
    function revealSections() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.75) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); // Trigger on load

    function switchLanguage(lang) {
        document.querySelectorAll("[data-text-en]").forEach(element => {
            element.textContent = element.getAttribute(`data-text-${lang}`);
        });
        document.querySelectorAll("[data-alt-en]").forEach(element => {
            element.alt = element.getAttribute(`data-alt-${lang}`);
        });
    }
});
