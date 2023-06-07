const rangevalue = document.querySelector('#rangevalue');
const range = document.querySelector('#r');

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}