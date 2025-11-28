const modal = document.getElementById('projectModal');
modal?.addEventListener('show.bs.modal', event => {
    const button = event.relatedTarget;
    const title = button.getAttribute('data-title');
    const desc = button.getAttribute('data-desc');

    modal.querySelector('.modal-title').textContent = title;
    modal.querySelector('#modal-desc').textContent = desc;
});