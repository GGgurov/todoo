// Меню
document.addEventListener('DOMContentLoaded', () => {
    const closemenu = document.getElementById('close-menu');
    const menu = document.getElementById('menu');

    closemenu.addEventListener('click', () => {
        menu.classList.toggle('open');

        if (menu.classList.contains('open')) {
            closemenu.style.transform = 'rotate(0deg)';
        } else {
            closemenu.style.transform = 'rotate(180deg)';
        }
    });
});

// Лист задач




// Создание задачи
const input = document.getElementById('name');
const originalText = 'Название...';

input.addEventListener('focus', () => {
    if (input.value === originalText) input.value = '';
});

input.addEventListener('blur', () => {
    if (input.value.trim() === '') input.value = originalText;
});



const disc = document.getElementById('disc');
const originalText2 = 'Описание...';

disc.addEventListener('focus', () => {
    if (disc.value === originalText2) disc.value = '';
});

disc.addEventListener('blur', () => {
    if (disc.value.trim() === '') disc.value = originalText2;
});



const pickdate = document.getElementById(`pickdate`)
const modal = document.getElementById(`modal`)
let dur = 0
    pickdate.addEventListener(`click`, () => {
        if (dur == 0) {
            modal.style.display = `flex`
            dur = 1
        } else {
            modal.style.display = `none`
            dur = 0
        }
    })

// Логика создания задачи

