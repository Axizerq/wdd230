function displayAds() {
    fetch('members.json')
        .then(response => response.json())
        .then(data => {
            const members = data.members;
            const qualifiedMembers = members.filter(member => member.membershipLevel === "Silver" || member.membershipLevel === "Gold");
            const adSection = document.querySelector('.section.ad');
            adSection.innerHTML = '';
            qualifiedMembers.slice(0, 3).forEach(member => {
                const adDiv = document.createElement('div');
                adDiv.innerHTML = `
                    <h2>${member.name}</h2>
                    <p>Address: ${member.address}</p>
                    <p>Phone: ${member.phone}</p>
                    <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
                    <img src="${member.image}" alt="${member.name}">
                    <p>${member.otherInfo}</p>
                `;
                adSection.appendChild(adDiv);
            });
        })
        .catch(error => console.log(error));
}

// Вызов функции displayAds для отображения рекламы
displayAds();