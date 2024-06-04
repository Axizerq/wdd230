function getRandomMembers(members, count) {
    const qualifiedMembers = members.filter(member => member.membershipLevel === "Silver" || member.membershipLevel === "Gold");
    const randomMembers = [];
    while (randomMembers.length < count && qualifiedMembers.length > 0) {
        const randomIndex = Math.floor(Math.random() * qualifiedMembers.length);
        randomMembers.push(qualifiedMembers.splice(randomIndex, 1)[0]);
    }
    return randomMembers;
}

function displaySpotlightAds(members) {
    const adsContainer = document.getElementById('ads-container');
    const randomMembers = getRandomMembers(members, 3);
    randomMembers.forEach(member => {
        const adDiv = document.createElement('div');
        adDiv.classList.add('ad-item');
        adDiv.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.otherInfo}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;
        adsContainer.appendChild(adDiv);
    });
}

fetch('members.json')
    .then(response => response.json())
    .then(data => {
        displaySpotlightAds(data.members);
    })
    .catch(error => {
        console.error('Error:', error);
    });