document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const toggle = document.getElementById('themeToggle');
    const icon = toggle.querySelector('i');

    // Загрузка темы
    const savedTheme = localStorage.getItem('theme') || 'mono';
    applyTheme(savedTheme);

    // Переключение
    toggle.addEventListener('click', () => {
        const newTheme = body.classList.contains('mono') ? 'pink' : 'mono';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });

    function applyTheme(theme) {
        body.classList.remove('mono', 'pink');
        body.classList.add(theme);

        // смена иконки
        if (theme === 'mono') {
            icon.classList.replace('bi-sun-fill', 'bi-moon-stars-fill');
        } else {
            icon.classList.replace('bi-moon-stars-fill', 'bi-sun-fill');
        }
    }
});