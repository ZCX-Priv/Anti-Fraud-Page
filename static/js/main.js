// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    console.log('反诈提示页面已加载');
});

// 将蓝色背景区图标精确对准下方文字的目标位置
function alignIcons() {
    const icons = document.querySelectorAll('.main-icons-row .main-icon');
    const targets = document.querySelectorAll('.main-titles-row .align-target');

    icons.forEach(function(icon, index) {
        const target = targets[index];
        if (!target) return;

        const targetRect = target.getBoundingClientRect();
        const iconRect = icon.getBoundingClientRect();

        // 目标点：字符取其中心，缝隙取其左边界（零宽元素中心即边界）
        const targetCenter = targetRect.left + targetRect.width / 2;
        // 图标当前中心
        const iconCenter = iconRect.left + iconRect.width / 2;
        // 需要平移的距离
        const offset = targetCenter - iconCenter;

        icon.style.transform = 'translateX(' + offset + 'px)';
    });
}

window.addEventListener('load', alignIcons);
window.addEventListener('resize', function() {
    requestAnimationFrame(alignIcons);
});
