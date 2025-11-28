document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', e => {
            e.preventDefault();
            let valid = true;
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    valid = false;
                    input.classList.add('is-invalid');
                } else {
                    input.classList.remove('is-invalid');
                }
            });

            if (valid) {
                alert('Форма отправлена');
                form.reset();
            } else {
                alert('Заполните все обязательные поля.');
            }
        });
    });
});