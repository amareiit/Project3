document.getElementById('current-year').textContent = new Date().getFullYear();

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        const countSpan = this.querySelector('.click-count');
        if (countSpan) {
            let count = parseInt(countSpan.textContent, 10) || 0;
            count++;
            countSpan.textContent = count;
        }
    });
});
