// Фильтры для страницы projects — single-select + сохранение в localStorage

(function(){
  const STORAGE_KEY = 'projects-filter';
  const filtersContainer = document.getElementById('projectsFilters');
  const grid = document.getElementById('projectsGrid');
  if (!filtersContainer || !grid) return;

  const buttons = Array.from(filtersContainer.querySelectorAll('.filter'));
  const cards = Array.from(grid.querySelectorAll('.project-card'));

  function applyFilter(filter) {
    buttons.forEach(btn => {
      const matches = (btn.dataset.filter === filter);
      btn.classList.toggle('active', matches);
      btn.setAttribute('aria-pressed', matches.toString());
    });

    if (filter === 'all') {
      cards.forEach(c => c.classList.remove('is-hidden'));
    } else {
      cards.forEach(c => {
        const tags = (c.dataset.tags || '').split(/\s+/);
        const show = tags.includes(filter);
        c.classList.toggle('is-hidden', !show);
      });
    }

    localStorage.setItem(STORAGE_KEY, filter);
  }

  // обработчик клика/клавиш
  filtersContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter');
    if (!btn) return;
    applyFilter(btn.dataset.filter || 'all');
  });
  filtersContainer.addEventListener('keydown', (e) => {
    const btn = e.target.closest('.filter');
    if (!btn) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      applyFilter(btn.dataset.filter || 'all');
    }
  });

  // восстановление при загрузке
  const saved = localStorage.getItem(STORAGE_KEY) || 'all';
  // немного задержим, чтобы стили задействовались корректно
  window.addEventListener('DOMContentLoaded', () => applyFilter(saved));
})();