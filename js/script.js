// 语言数据
const translations = {
    zh: {
        title: "Z.J.M 的摄影",
        women: "女性故事",
        cityscapes: "城市风景",
        self: "自我表达"
    },
    en: {
        title: "Z.J.M Photography",
        women: "Women’s Stories",
        cityscapes: "Cityscapes",
        self: "Self-Expression"
    }
};

// 当前语言，默认中文
let currentLang = "zh";

// 语言切换函数
window.switchLanguage = function(lang) {
    currentLang = lang;
    document.getElementById("page-title").innerText = translations[lang].title;
    document.getElementById("btn-women").innerText = translations[lang].women;
    document.getElementById("btn-cityscapes").innerText = translations[lang].cityscapes;
    document.getElementById("btn-self").innerText = translations[lang].self;
};

// 显示指定类别的相册
window.showCategory = function(category) {
    document.querySelectorAll('.flipbook-container').forEach(container => {
        container.style.display = 'none';
    });

    document.getElementById(category).style.display = 'block';
    
    // 延迟初始化 flipbook 以确保图片已加载
    setTimeout(initializeFlipbook, 200);
};

// 初始化 turn.js 翻页效果
function initializeFlipbook() {
    $('.flipbook').turn({
        width: 500,
        height: 300,
        autoCenter: true
    });
}

// 页面加载后显示默认相册
window.onload = function() {
    showCategory('women');
};
