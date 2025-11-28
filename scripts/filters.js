document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('[data-filter]');
    const cards = document.querySelectorAll('#project-grid .col');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;

            // Сброс активной кнопки
            document.querySelectorAll('.btn-group .btn').forEach(b => {
                b.classList.remove('btn-primary', 'active');
                b.classList.add('btn-outline-primary');
            });
            btn.classList.add('btn-primary', 'active');
            btn.classList.remove('btn-outline-primary');

            // Фильтрация
            cards.forEach(card => {
                if (filter === 'all' || card.dataset.tech === filter) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});