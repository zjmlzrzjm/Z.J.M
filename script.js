document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");
    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px"
    };
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("hidden");
                observer.unobserve(entry.target);
            }
        });
    }, options);
    sections.forEach(section => {
        observer.observe(section);
    });
});
