const switchMode = document.querySelector('#mode');
const body = document.querySelector('*');

// This will switch modes
body.style.background = '#f0ead6';

switchMode.addEventListener('click', () => {
    if (switchMode.textContent.includes('Dark Mode')) {
        body.style.background = '#121212';
        body.style.color = '#f0ead6';
        switchMode.textContent = 'Light Mode';
    } else {
        body.style.background = '#f0ead6';
        body.style.color = '#121212';
        switchMode.textContent = 'Dark Mode';
    }
});