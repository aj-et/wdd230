var companiesDiv = document.querySelector(".companies");
var gridBtn = document.querySelector(".gridBtn");
var listBtn = document.querySelector(".listBtn");
var jsonData;

// Initialize view type
var viewType = "grid";

// Handle button clicks
gridBtn.addEventListener("click", function() {
    viewType = "grid";
    renderView();
    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
});

listBtn.addEventListener("click", function() {
    viewType = "list";
    renderView();
    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
});

// Fetch JSON data
fetch("data/member.json")
    .then(response => response.json())
    .then(data => {
        jsonData = data;
        renderView();
    })
    .catch(error => {
        console.log("Error fetching data:", error);
    });

// Render the view based on the selected type
function renderView() {
    companiesDiv.innerHTML = "";

    if (viewType === "grid") {
        companiesDiv.classList.remove("list-view");
        companiesDiv.classList.add("grid-view");
    } else if (viewType === "list") {
        companiesDiv.classList.remove("grid-view");
        companiesDiv.classList.add("list-view");
    }

    if (jsonData && jsonData.companies) {
        jsonData.companies.forEach(function(company) {
            var companyDiv = document.createElement("div");
            companyDiv.className = "company-card";
            companyDiv.innerHTML = "<h2>" + company.company + "</h2>";

            company.members.forEach(function(member) {
                var memberDiv = document.createElement("div");

                memberDiv.innerHTML = "<img src='" + member.imageFile + "' alt='" + member.imageName + "'>" +
                                    "<p>Name: " + member.name + "</p>" +
                                    "<p>Address: " + member.address + "</p>" +
                                    "<p>Phone Number: " + member.phoneNumber + "</p>" +
                                    "<p>Website: <a href='" + member.websiteURL + "'>" + member.websiteURL + "</a></p>" +
                                    // "<p>Image Name: " + member.imageName + "</p>" +
                                    "<p>Membership Level: " + member.membershipLevel + "</p>";
                companyDiv.appendChild(memberDiv);
            });

            companiesDiv.appendChild(companyDiv);
        });
    }
}