const spotlightContainer = document.querySelector('#spotlight-container');

const membersData = {
    "members": [
        {
            "name": "Company 1",
            "address": "123 Main Street, City, Country",
            "phone": "123-456-7890",
            "website": "https://www.company1.com",
            "image": "images/company.webp",
            "membershipLevel": "Gold",
            "otherInfo": "There can be absolutely any other information here."
        },
        {
            "name": "Company 2",
            "address": "456 Second Street, City, Country",
            "phone": "987-654-3210",
            "website": "https://www.company2.com",
            "image": "images/company.webp",
            "membershipLevel": "Silver",
            "otherInfo": "There can be absolutely any other information here."
        },
        {
            "name": "Company 3",
            "address": "789 Third Street, City, Country",
            "phone": "111-222-3333",
            "website": "https://www.company3.com",
            "image": "images/company.webp",
            "membershipLevel": "Bronze",
            "otherInfo": "There can be absolutely any other information here."
        },
        {
            "name": "Company 4",
            "address": "987 Fourth Street, City, Country",
            "phone": "444-555-6666",
            "website": "https://www.company4.com",
            "image": "images/company.webp",
            "membershipLevel": "Standard",
            "otherInfo": "There can be absolutely any other information here."
        },
        {
            "name": "Company 5",
            "address": "654 Fifth Street, City, Country",
            "phone": "777-888-9999",
            "website": "https://www.company5.com",
            "image": "images/company.webp",
            "membershipLevel": "Gold",
            "otherInfo": "There can be absolutely any other information here."
        },
        {
            "name": "Company 6",
            "address": "321 Sixth Street, City, Country",
            "phone": "000-111-2222",
            "website": "https://www.company6.com",
            "image": "images/company.webp",
            "membershipLevel": "Silver",
            "otherInfo": "There can be absolutely any other information here."
        },
        {
            "name": "Company 7",
            "address": "555 Seventh Street, City, Country",
            "phone": "333-444-5555",
            "website": "https://www.company7.com",
            "image": "images/company.webp",
            "membershipLevel": "Bronze",
            "otherInfo": "There can be absolutely any other information here."
        }
    ]
};

// Функция для случайной выборки элементов из массива
function getRandomElements(arr, count) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Функция для отображения выбранных членов
function displaySpotlightMembers(members) {
    spotlightContainer.innerHTML = ''; // Очистка предыдущих данных

    members.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.classList.add('spotlight');
        memberDiv.innerHTML = `
            <h3>${member.name}</h3>
            <img src="${member.image}" alt="${member.name}">
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>
            <p>${member.otherInfo}</p>
        `;
        spotlightContainer.appendChild(memberDiv);
    });
}

// Основная логика
function init() {
    const qualifiedMembers = membersData.members.filter(member => member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver');
    const spotlightMembers = getRandomElements(qualifiedMembers, 3);
    displaySpotlightMembers(spotlightMembers);
}

init();