// 1.获取到a标签注册事件
var newsT = document.getElementById('newsT');
var flag = document.getElementById('flag');
var container = document.getElementById('container');

for (var i = 0, len2 = newsT.children.length; i < len2 - 1; i++) {
    var link = newsT.children[i];
    link.onmouseover = linkMouseover;
    // 设置a标签的自定义属性，记录索引
    link.setAttribute('index', i);
}
// 当触发a标签的 mouseover，让红色的线执行动画
// flag下划线移动动画
function linkMouseover() {
    var offsetLeft = this.offsetLeft;
    animate(flag, offsetLeft + 30, 7);
    // 隐藏所有详细内容
    for (var i = 0, len2 = container.children.length; i < len2; i++) {
        var div = container.children[i];
        // 判断样式中是否有hide
        // indexOf如果找不到hide返回-1
        // 如果不存在hide添加hide
        if (div.className.indexOf('hide') === -1) {
            div.className = 'part hide';
        }
    }
    // 当前的内容显示
    var index = parseInt(this.getAttribute('index'));
    container.children[index].className = 'part show';
}