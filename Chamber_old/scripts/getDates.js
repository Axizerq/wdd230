// Получаем элементы, в которые будем выводить дату и время
const yearElement = document.getElementById('year');
const lastModifiedElement = document.getElementById('lastModified');

// Получаем текущий год
const currentYear = new Date().getFullYear();

// Выводим текущий год в элемент
yearElement.textContent = currentYear;

// Получаем и выводим дату и время последнего изменения документа
const lastModified = document.lastModified;
lastModifiedElement.textContent = lastModified;



const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});
