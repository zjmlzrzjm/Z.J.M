document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const sections = document.querySelectorAll(".section");
    const galleryContainer = document.querySelector(".gallery-container");

    function updateGalleryPosition() {
        galleryContainer.style.transform = `translateX(-${currentIndex * 100}vw)`;
    }

    document.addEventListener("wheel", function (event) {
        if (event.deltaY > 0) {
            currentIndex = Math.min(currentIndex + 1, sections.length - 1);
        } else {
            currentIndex = Math.max(currentIndex - 1, 0);
        }
        updateGalleryPosition();
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowRight") {
            currentIndex = Math.min(currentIndex + 1, sections.length - 1);
        } else if (event.key === "ArrowLeft") {
            currentIndex = Math.max(currentIndex - 1, 0);
        }
        updateGalleryPosition();
    });

    // 切换类别
    function showCategory(category) {
        document.querySelectorAll(".flipbook-container").forEach(el => el.style.display = "none");
        const selectedContainer = document.getElementById(category);
        if (selectedContainer) {
            selectedContainer.style.display = "block";
        }

        // 初始化 Flipbook
        initializeFlipbook(category);
    }

    // 语言切换
    function switchLanguage(lang) {
        document.querySelectorAll("[data-text-en]").forEach(el => {
            el.textContent = lang === "en" ? el.getAttribute("data-text-en") : el.getAttribute("data-text-zh");
        });
    }

    window.switchLanguage = switchLanguage;
    window.showCategory = showCategory;

    // 初始化 flipbook
    function initializeFlipbook(category) {
        const flipbookId = `flipbook-${category}`;
        const flipbookElement = document.getElementById(flipbookId);

        if (!flipbookElement) return;

        if ($(flipbookElement).data("initialized")) return; // 避免重复初始化

        $(flipbookElement).turn({
            width: 800,
            height: 600,
            autoCenter: true,
            elevation: 50,
            gradients: true,
            display: "double"
        });

        $(flipbookElement).data("initialized", true);
    }
});

