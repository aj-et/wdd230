const baseURL = 'https://github.com/aj-et/wdd230';
const linksURL = 'https://github.com/aj-et/wdd230/data/links.json';
const linksPath = 'data/links.json'

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data);
    } catch (error) {
        console.log('Error:', error);
    }
}

function displayLinks(weeks) {
    const linksContainer = document.querySelector('.links-container');

    weeks.forEach((week) => {
        const weekDiv = document.createElement('div');
        weekDiv.classList.add('week');

        const weekHeader = document.createElement('h2');
        weekHeader.textContent = week.week;

        const linksList = document.createElement('ul');

        week.links.forEach((link) => {
            const listItem = document.createElement('li');
            const linkAnchor = document.createElement('a');
            linkAnchor.href = baseURL + link.url;
            linkAnchor.textContent = link.title;
            listItem.appendChild(linkAnchor);
            linksList.appendChild(listItem);
        });

        weekDiv.appendChild(weekHeader);
        weekDiv.appendChild(linksList);
        linksContainer.appendChild(weekDiv);
    });

}

getLinks();