const formSubmit = document.querySelector('#theForm');

function redirectFunction(e) {
    e.preventDefault();
    window.location.href = '../week04/record.html'
}

formSubmit.addEventListener('submit', redirectFunction);