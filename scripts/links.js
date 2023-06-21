const baseURL = 'https://github.com/aj-et/wdd230';
const linksURL = 'https://github.com/aj-et/wdd230/data/links.json';
const linksPath = 'data/links.json'

async function getLinks() {
    try {
        const response = await fetch(linksPath);
        const data = await response.json();
        displayLinks(data);
    } catch (error) {
        console.log('Error:', error);
    }
}

function displayLinks(weks) {
    const linksContainer = document.querySelector('.links-container');

    const weeks = Array.isArray(weks.weeks) ? weks.weeks : [];

    weeks.forEach((week) => {
    })

    weeks.forEach((week) => {
        const weekDiv = document.createElement('div');
        weekDiv.classList.add('week');

        const weekHeader = document.createElement('h4');
        weekHeader.textContent = week.week;

        const linksList = document.createElement('ul');

        week.links.forEach((link) => {
            const listItem = document.createElement('li');
            const linkAnchor = document.createElement('a');
            linkAnchor.href = link.url;
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