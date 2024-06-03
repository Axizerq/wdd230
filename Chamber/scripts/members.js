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
getMembers();

const gridContainer = document.querySelector('.grid-container');
gridContainer.classList.add('grid');

/*fetch('members.json')
    .then(response => response.json())
    .then(data => {
        // Get the container element
        const membersContainer = document.getElementById('members-container');

        // Create HTML elements based on the JSON data
        data.members.forEach(member => {
            const memberElement = document.createElement('div');
            memberElement.innerHTML = `
        <h2>${member.name}</h2>
        <p>Address: ${member.address}</p>
        <p>Phone: ${member.phone}</p>
        <p>Website: <a href="${member.website}">${member.website}</a></p>
        <img src="${member.image}" alt="${member.name}">
        <p>Membership Level: ${member.membershipLevel}</p>
        <p>Other Info: ${member.otherInfo}</p>
      `;
            membersContainer.appendChild(memberElement);
        });
    }); */