document.addEventListener("DOMContentLoaded", function () {
    function showCategory(category) {
        document.querySelectorAll('.flipbook-container').forEach(container => {
            container.style.display = 'none';
        });

        document.getElementById(category).style.display = 'block';

        // 初始化翻页效果
        if (!document.getElementById(`flipbook-${category}`).classList.contains('turn-js')) {
            $(`#flipbook-${category}`).turn({
                width: 800,
                height: 600,
                autoCenter: true
            });
            document.getElementById(`flipbook-${category}`).classList.add('turn-js');
        }
    }

    function switchLanguage(lang) {
        document.querySelectorAll("[data-text-en]").forEach(el => {
            el.textContent = lang === "en" ? el.getAttribute("data-text-en") : el.getAttribute("data-text-zh");
        });
    }

    window.showCategory = showCategory;
    window.switchLanguage = switchLanguage;
});
