document.addEventListener("DOMContentLoaded", function () {
    const imageData = {
        women_story: ["001.jpg", "002.jpg", "003.jpg"],
        cityscape: ["001.jpg", "002.jpg", "003.jpg"],
        self_expression: ["001.jpg", "002.jpg", "003.jpg"]
    };

    for (let category in imageData) {
        let slider = document.getElementById(`slider-${category}`);
        if (slider) {
            imageData[category].forEach(image => {
                let img = document.createElement("img");
                img.src = `images/${category}/${image}`;  // 确保你在 images 里分类存放
                img.alt = category;
                slider.appendChild(img);
            });
        }
    }
});

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
