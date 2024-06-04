function displayAds() {
    fetch('members.json')
        .then(response => response.json())
        .then(data => {
            const members = data.members;
            const qualifiedMembers = members.filter(member => member.membershipLevel === "Silver" || member.membershipLevel === "Gold");
            const adSection = document.querySelector('.section.ad');
            adSection.innerHTML = '';
            const randomMembers = getRandomMembers(qualifiedMembers, 3); // Выбираем случайных 3 участников
            randomMembers.forEach(member => {
                const adDiv = document.createElement('div');
                adDiv.innerHTML = `
                    <h2>${member.name}</h2>
                    <p>Адрес: ${member.address}</p>
                    <p>Телефон: ${member.phone}</p>
                    <p>Веб-сайт: <a href="${member.website}" target="_blank">${member.website}</a></p>
                    <img src="${member.image}" alt="${member.name}">
                    <p>${member.otherInfo}</p>
                `;
                adSection.appendChild(adDiv);
            });
        })
        .catch(error => console.log(error));
}

function getRandomMembers(members, count) {
    const shuffled = members.sort(() => 0.5 - Math.random()); // Перемешиваем участников
    return shuffled.slice(0, count); // Выбираем случайное количество участников
}

displayAds();