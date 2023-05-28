const visitsInADAy = document.querySelector('.visitsInADay');

document.addEventListener('DOMContentLoaded', function() {
    var lastVisitDate = localStorage.getItem('lastVisitDate');
    var currentDate = new Date().toDateString();
    var message;

    if (!lastVisitDate) {
        message = 'Welcome! Let us know if you have any questions.';
    } else {
        var timeDiff = Math.abs(new Date(currentDate) - new Date(lastVisitDate));
        var daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

        if (daysDiff < 1) {
        message = 'Back so soon! Awesome!';
        } else if (daysDiff === 1) {
        message = 'You last visited 1 day ago.';
        } else {
        message = 'You last visited ' + daysDiff + ' days ago.';
        }
    }

    visitsInADAy.textContent = message;
    localStorage.setItem('lastVisitDate', currentDate);
});