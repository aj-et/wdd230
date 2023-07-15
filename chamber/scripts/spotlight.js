// Get the spotlight container element
var spotlightContainer = document.getElementById('spotlightContainer');

// Fetch the JSON data
fetch('./data/member.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        // Parse the JSON data and extract qualified members
        var qualifiedMembers = [];
        jsonData.companies.forEach(function(company) {
            company.members.forEach(function(member) {
                if (member.membershipLevel === 'Silver Membership' || member.membershipLevel === 'Gold Membership') {
                    qualifiedMembers.push(member);
                }
            });
        });

        // Randomly select two or three members
        var spotlightMembers = [];
        var numSpotlights = Math.floor(Math.random() * 2) + 2; // Randomly choose between 2 and 3 spotlights
        for (var i = 0; i < numSpotlights; i++) {
            var randomIndex = Math.floor(Math.random() * qualifiedMembers.length);
            spotlightMembers.push(qualifiedMembers[randomIndex]);
            qualifiedMembers.splice(randomIndex, 1); // Remove selected member to avoid duplication
        }

        // Display spotlight advertisements
        spotlightMembers.forEach(function(member) {
            var spotlightDiv = document.createElement('div');
            spotlightDiv.classList.add('spotlight');

            var image = document.createElement('img');
            image.src = member.imageFile;
            image.alt = member.imageName;

            var nameHeading = document.createElement('h3');
            nameHeading.textContent = member.name;

            var addressPara = document.createElement('p');
            addressPara.textContent = 'Address: ' + member.address;

            var phoneNumberPara = document.createElement('p');
            phoneNumberPara.textContent = 'Phone Number: ' + member.phoneNumber;

            var websiteLink = document.createElement('a');
            websiteLink.href = member.websiteURL;
            websiteLink.textContent = 'Website';

            spotlightDiv.appendChild(image);
            spotlightDiv.appendChild(nameHeading);
            spotlightDiv.appendChild(addressPara);
            spotlightDiv.appendChild(phoneNumberPara);
            spotlightDiv.appendChild(websiteLink);

            spotlightContainer.appendChild(spotlightDiv);
        });
    })
    .catch(function(error) {
        console.error('Error fetching JSON data:', error);
    });