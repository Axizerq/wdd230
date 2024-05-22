// Получить текущую дату
const currentDate = Date.now();

// Получить последнюю дату посещения из localStorage
const lastVisitDate = localStorage.getItem('lastVisitDate');

// Если это первый визит пользователя
if (!lastVisitDate) {
    document.getElementById('visit-message').textContent = 'Welcome! Let us know if you have any questions.';
} else {
    // Разница в днях между текущей датой и последним посещением
    const daysSinceLastVisit = Math.floor((currentDate - Date.now(lastVisitDate)) / (1000 * 60 * 60 * 24));

    // Если промежуток времени между визитами меньше суток
    if (daysSinceLastVisit < 1) {
        document.getElementById('visit-message').textContent = 'Back so soon! Awesome!';
    } else {
        // Отобразить количество дней в сообщении
        let message = `You last visited ${daysSinceLastVisit}`;
        if (daysSinceLastVisit === 1) {
            message += 'days ago.';
        } else {
            message += 'days ago.';
        }
        document.getElementById('visit-message').textContent = message;
    }
}

// Сохранить текущую дату в localStorage
localStorage.setItem('lastVisitDate', currentDate);