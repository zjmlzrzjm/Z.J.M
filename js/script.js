document.addEventListener("DOMContentLoaded", function () {
    const categories = ['women', 'cityscape', 'self'];

    // 自动加载图片
    function loadImages(category) {
        const flipbookContainer = document.getElementById(`flipbook-${category}`);
        flipbookContainer.innerHTML = ''; // 清空之前的内容
        
        // 假设每个分类的图片按一定规则命名，比如：women1.jpg, women2.jpg ...
        for (let i = 1; i <= 3; i++) {  // 假设每个分类有3张图片
            const page = document.createElement('div');
            page.classList.add('page');
            page.innerHTML = `<img src="images/${category}/${category}${i}.jpg" alt="Page ${i}">`;
            flipbookContainer.appendChild(page);
        }
        
        // 初始化翻书效果
        $("#" + `flipbook-${category}`).turn({
            width: 800,
            height: 600,
            autoCenter: true,
        });
    }

    // 切换显示不同分类
    function showCategory(category) {
        categories.forEach(c => {
            const categoryDiv = document.getElementById(c);
            if (c === category) {
                categoryDiv.style.display = 'block';
                loadImages(c);  // 加载图片
            } else {
                categoryDiv.style.display = 'none';
            }
        });
    }

    // 默认显示 Women's Stories
    showCategory('women');
});
