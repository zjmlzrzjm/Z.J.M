/* script.js */
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".flipbook").forEach(book => {
        $(book).turn({
            width: 700,
            height: 500,
            autoCenter: true
        });
    });
    
    setLanguage(localStorage.getItem("language") || "en");
});

function showCategory(category) {
    document.querySelectorAll(".flipbook-container").forEach(container => {
        container.style.display = "none";
    });
    document.getElementById(category).style.display = "block";
}

function setLanguage(lang) {
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
    document.title = lang === "zh" ? "照片画廊" : "Photo Gallery";
}
