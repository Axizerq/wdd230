document.addEventListener('DOMContentLoaded', () => {
    fetch('path/to/your/members.json')
        .then(response => response.json())
        .then(data => {
            const members = data.members;
            const qualifiedMembers = members.filter(member =>
                member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver'
            );

            // Shuffle the qualified members array
            qualifiedMembers.sort(() => 0.5 - Math.random());

            // Select 2 or 3 random members
            const selectedMembers = qualifiedMembers.slice(0, 3);

            // Get the ads container
            const adsContainer = document.getElementById('ads-container');

            // Display the selected members
            selectedMembers.forEach(member => {
                const memberDiv = document.createElement('div');
                memberDiv.className = 'ad-member';
                memberDiv.innerHTML = `
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.website}" target="_blank">Visit Website</a>
                    <img src="path/to/images/${member.image}" alt="${member.name}">
                    <p>${member.otherInfo}</p>
                `;
                adsContainer.appendChild(memberDiv);
            });
        })
        .catch(error => console.error('Error fetching the members data:', error));
});
