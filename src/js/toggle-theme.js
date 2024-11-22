
const toggle = document.querySelector('.toggle');
const bodyPortfolio = document.body;

toggle.addEventListener('click', () => {
    const isDarkMode = bodyPortfolio.classList.contains('bg-dark');

    if (isDarkMode) {
        bodyPortfolio.classList.remove('bg-dark');
        bodyPortfolio.classList.add('bg-light');
        toggle.classList.remove('dark');
    } else {
        bodyPortfolio.classList.remove('bg-light');
        bodyPortfolio.classList.add('bg-dark');
        toggle.classList.add('dark');
    }

});
