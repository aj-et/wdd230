// Function to check if the current day is Monday, Tuesday, or Wednesday
function isWeekday() {
    var today = new Date();
    var day = today.getDay();
    return (day >= 1 && day <= 3); // Monday = 1, Tuesday = 2, Wednesday = 3
}

// Function to close the banner
function closeBanner() {
    var bannerContainer = document.getElementById('bannerContainer');
    bannerContainer.style.display = 'none';
}

// Check if it's a weekday and display the banner
if (isWeekday()) {
    var bannerContainer = document.getElementById('bannerContainer');

    var bannerDiv = document.createElement('div');
    bannerDiv.classList.add('banner');

    var bannerContentDiv = document.createElement('div');
    bannerContentDiv.classList.add('content');

    var bannerText = document.createElement('p');
    bannerText.textContent = 'Join us for the Chamber of Commerce meet and greet on Wednesday at 7:00 p.m.';

    var closeButton = document.createElement('span');
    closeButton.classList.add('close-btn');
    closeButton.textContent = '❌';
    closeButton.addEventListener('click', closeBanner);

    bannerContentDiv.appendChild(bannerText);
    bannerContentDiv.appendChild(closeButton);

    bannerDiv.appendChild(bannerContentDiv);

    bannerContainer.appendChild(bannerDiv);
}