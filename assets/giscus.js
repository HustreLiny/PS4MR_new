// 若当前 mdBook 主题为 Light 或 Rust ，则将 giscus 主题设置为 light
let giscus_theme = "transparent_dark";
const themeClass = document.getElementsByTagName("html")[0].className;
if (themeClass.indexOf("light") !== -1 || themeClass.indexOf("rust") !== -1) {
    giscus_theme = "light";
} else if (
    themeClass.indexOf("coal") !== -1 ||
    themeClass.indexOf("navy") !== -1 ||
    themeClass.indexOf("ayu") !== -1
  ) {
    giscus_theme = "dark_tritanopia";
}

// 设定默认的语言
var giscus_lang = "zh-CN";

// 插入评论区脚本元素
var giscus = function () {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://giscus.app/client.js";


    script.setAttribute("data-repo", "HustreLiny/PS4MR");
    script.setAttribute("data-repo-id", "R_kgDOPDbYXg");
    script.setAttribute("data-category", "Announcements");
    script.setAttribute("data-category-id", "DIC_kwDOPDbYXs4Csf4r");

    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "1");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", giscus_theme);
    script.setAttribute("data-lang", giscus_lang);
    script.crossOrigin = "anonymous";
    script.async = true;
    // 将脚本元素放入 giscus-container 元素
    document.getElementById("giscus-container").appendChild(script);
};

// 开始加载
window.addEventListener('load', giscus);
