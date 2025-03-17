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

    document.querySelectorAll(".image-slider").forEach(slider => {
        let images = slider.getElementsByTagName("img");
        let index = 0;

        function showNextImage() {
            images[index].classList.remove("active");
            images[index].classList.add("prev");
            index = (index + 1) % images.length;
            images[index].classList.add("active");
        }

        setInterval(showNextImage, 3000);
    });

    function switchLanguage(lang) {
        document.querySelectorAll("[data-text-en]").forEach(el => {
            el.textContent = lang === "en" ? el.getAttribute("data-text-en") : el.getAttribute("data-text-zh");
        });
    }

    window.switchLanguage = switchLanguage;
});
