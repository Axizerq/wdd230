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