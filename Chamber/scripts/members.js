/* const baseURL = "https://axizerq.github.io/wdd230/Chamber/";
const membersURL = `https://axizerq.github.io/wdd230/Chamber/data/members.json`;


// Asynchronous function to fetch the JSON data
async function getMembers() {
    try {
        const response = await fetch(membersURL);
        if (response.ok) {
            const data = await response.json();
            console.log('The received data:', data); // Для отладки
            displayMembers(data.members);
        } else {
            console.error('Link data could not be retrieved:', response.statusText);
        }
    } catch (error) {
        console.error('Error when receiving link data', error);
    }
}

const container = document.querySelector('#members-container');

// Function to display members
function displayMembers(members) {
    // Clear any existing content
    container.innerHTML = '';

    members.forEach(member => {
        // Create a section for each member
        const memberSection = document.createElement('section');

        const memberName = document.createElement('h2');
        memberName.textContent = member.name;
        memberSection.appendChild(memberName);

        const memberAddress = document.createElement('p');
        memberAddress.textContent = `Address: ${member.address}`;
        memberSection.appendChild(memberAddress);

        const memberPhone = document.createElement('p');
        memberPhone.textContent = `Phone: ${member.phone}`;
        memberSection.appendChild(memberPhone);

        const memberWebsite = document.createElement('a');
        memberWebsite.href = member.website;
        memberWebsite.textContent = 'Website';
        memberSection.appendChild(memberWebsite);

        const memberImage = document.createElement('img');
        memberImage.src = `${baseURL}images/${member.image}`;
        memberImage.alt = member.name;
        memberSection.appendChild(memberImage);

        const memberLevel = document.createElement('p');
        memberLevel.textContent = `Membership Level: ${member.membershipLevel}`;
        memberSection.appendChild(memberLevel);

        const memberInfo = document.createElement('p');
        memberInfo.textContent = `Other Info: ${member.otherInfo}`;
        memberSection.appendChild(memberInfo);

        container.appendChild(memberSection);
    });
}


// Call the function to get and display the members
getMembers(); */

const baseURL = "https://axizerq.github.io/wdd230/Chamber/";
const membersURL = `https://axizerq.github.io/wdd230/Chamber/data/members.json`;

// Asynchronous function to fetch the JSON data
async function getMembers() {
    try {
        const response = await fetch(membersURL);
        if (response.ok) {
            const data = await response.json();
            console.log('The received data:', data); // Для отладки
            displayMembers(data.members);
        } else {
            console.error('Link data could not be retrieved:', response.statusText);
        }
    } catch (error) {
        console.error('Error when receiving link data', error);
    }
}

const container = document.querySelector('#members-container tbody');

// Function to display members in a 3x3 grid
function displayMembers(members) {
    // Clear any existing content
    container.innerHTML = '';

    let row;
    members.forEach((member, index) => {
        // Create a new row for every 3 members
        if (index % 3 === 0) {
            row = document.createElement('tr');
            container.appendChild(row);
        }

        // Create a cell for each member
        const cell = document.createElement('td');
        const memberContent = `
            <h2>${member.name}</h2>
            <p>Address: ${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <a href="${member.website}">Website</a>
            <img src="${baseURL}images/${member.image}" alt="${member.name}" />
            <p>Membership Level: ${member.membershipLevel}</p>
            <p>Other Info: ${member.otherInfo}</p>
        `;
        cell.innerHTML = memberContent;
        row.appendChild(cell);
    });
}




const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
    // example using arrow function
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}






// Call the function to get and display the members
getMembers();
