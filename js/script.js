document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const sections = document.querySelectorAll(".section");
    const galleryContainer = document.querySelector(".gallery-container");

    // 调整图片大小的函数
    function adjustImageSize(img) {
        const ratio = img.naturalWidth / img.naturalHeight;  // 获取图片宽高比

        if (ratio > 1) {
            // 横向图片
            img.style.width = '100%';        // 宽度为100%
            img.style.height = 'auto';       // 高度自动
        } else {
            // 纵向图片
            img.style.width = 'auto';        // 宽度自动
            img.style.height = '100%';       // 高度为100%
        }

        // 调整图片容器的大小（父容器）
        const container = img.parentElement;
        if (ratio > 1) {
            container.style.width = '100%';  // 容器宽度为100%
            container.style.height = 'auto'; // 容器高度自适应
        } else {
            container.style.width = 'auto'; // 容器宽度自适应
            container.style.height = '100%';// 容器高度为100%
        }
    }

    // 更新画廊位置
    function updateGalleryPosition() {
        galleryContainer.style.transform = `translateX(-${currentIndex * 100}vw)`;
    }

    // 监听滚轮事件
    document.addEventListener("wheel", function (event) {
        if (event.deltaY > 0) {
            currentIndex = Math.min(currentIndex + 1, sections.length - 1);
        } else {
            currentIndex = Math.max(currentIndex - 1, 0);
        }
        updateGalleryPosition();
    });

    // 监听键盘左右箭头键事件
    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowRight") {
            currentIndex = Math.min(currentIndex + 1, sections.length - 1);
        } else if (event.key === "ArrowLeft") {
            currentIndex = Math.max(currentIndex - 1, 0);
        }
        updateGalleryPosition();
    });

    // 自动切换图片
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

    // 调整所有图片的大小
    const images = document.querySelectorAll('.flipbook .page img');
    images.forEach(img => {
        img.onload = () => adjustImageSize(img);  // 在图片加载完成后调整尺寸
    });

    // 切换语言
    function switchLanguage(lang) {
        document.querySelectorAll("[data-text-en]").forEach(el => {
            el.textContent = lang === "en" ? el.getAttribute("data-text-en") : el.getAttribute("data-text-zh");
        });
    }

    window.switchLanguage = switchLanguage;
});
