var data = 'https://api-ninjas.com';
var category = 'wildlife'


$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/randomimage?category=' + category,
    headers: { 'X-Api-Key': 'YePz3VYyRGHEjqwsH/5pwQ==oBZwTWX7eSTVgfHR', 'Accept': 'image/jpg'},
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});