const baseURL = "https://axizerq.github.io/wdd230/";

const linksURL = "https://axizerq.github.io/wdd230/data/links.json";

// Asynchronous function to fetch the JSON data
async function getLinks() {
    const response = await fetch(linksURL);
    if (response.ok) {
        const data = await response.json();
        displayLinks(data);
    } else {
        console.error('Failed to fetch links data:', response.statusText);
    }
}

// Function to display links
function displayLinks(weeks) {
    const container = document.querySelector('#links-container');
    weeks.forEach(week => {
        // Create a section for each week
        const weekSection = document.createElement('section');
        const weekTitle = document.createElement('h2');
        weekTitle.textContent = week.week;
        weekSection.appendChild(weekTitle);

        // Create a list for the links
        const linksList = document.createElement('ul');
        week.links.forEach(link => {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.textContent = link.title;
            listItem.appendChild(anchor);
            linksList.appendChild(listItem);
        });

        weekSection.appendChild(linksList);
        container.appendChild(weekSection);
    });
}

// Call the function to get and display the links
getLinks();