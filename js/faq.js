    document.querySelectorAll('.faq-question').forEach((question) => {
        question.addEventListener('click', () => {
        const faqItem = question.closest('.faq-item');
        const answer = faqItem.querySelector('.faq-answer');
        const isActive = faqItem.classList.contains('open');

        // Toggle open/close state
        if (isActive) {
            faqItem.classList.remove('open');
            answer.style.display = 'none';
        } else {
            faqItem.classList.add('open');
            answer.style.display = 'block';
        }

        // Toggle icon rotation
        const icon = question.querySelector('i');
        if (icon) {
            icon.style.transform = isActive ? 'rotate(0deg)' : 'rotate(180deg)';
        }
        });
    });



