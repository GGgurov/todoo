// Добавление новой задачи
document.getElementById("createbutton").addEventListener("click", () => {
    const name = document.getElementById("name").value.trim();
    const description = document.getElementById("disc").value.trim();
    const date = document.getElementById("datepick").value;

    // Проверка на незаполненные поля
    if (!name || !description || !date) {
        alert("Заполни все поля!");
        return;
    }

    const task = { name, description, date };
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push(task); // Добавление задачи в список
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Сохранение в localStorage

    // Перенаправление после добавления
    window.location.href = "../index.html";
});

// Обработка фокуса/потери фокуса для полей с подсказками
const handleFocusBlur = (inputElement, placeholderText) => {
    inputElement.addEventListener('focus', () => {
        if (inputElement.value === placeholderText) inputElement.value = '';
    });

    inputElement.addEventListener('blur', () => {
        if (inputElement.value.trim() === '') inputElement.value = placeholderText;
    });
};

const nameInput = document.getElementById('name');
const descriptionInput = document.getElementById('disc');
const originalNameText = 'Название...';
const originalDescriptionText = 'Описание...';

// Инициализация обработчиков для полей
handleFocusBlur(nameInput, originalNameText);
handleFocusBlur(descriptionInput, originalDescriptionText);

// Обработка открытия и закрытия модального окна
const pickdate = document.getElementById('pickdate');
const modal = document.getElementById('modal');
let isModalOpen = false;

pickdate.addEventListener('click', () => {
    isModalOpen = !isModalOpen;  // Переключаем состояние модального окна
    modal.style.display = isModalOpen ? 'flex' : 'none';
});

// Обработчик для меню
document.addEventListener('DOMContentLoaded', () => {
    const closeMenu = document.getElementById('close-menu');
    const menu = document.getElementById('menu');

    closeMenu.addEventListener('click', () => {
        menu.classList.toggle('open');
        closeMenu.style.transform = menu.classList.contains('open') ? 'rotate(0deg)' : 'rotate(180deg)';
    });
});
