// Меню
document.addEventListener('DOMContentLoaded', () => {
    const closemenu = document.getElementById('close-menu');
    const menu = document.getElementById('menu');

    closemenu.addEventListener('click', () => {
        menu.classList.toggle('open');
        closemenu.style.transform = menu.classList.contains('open') ? 'rotate(0deg)' : 'rotate(180deg)';
    });
});

// Перенос задачи
window.addEventListener("DOMContentLoaded", () => {
    const taskListContainer = document.getElementById("tasklist");
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => {
        const taskHTML = `
        <div class="task">
            <div class="name-task">
                <input type="checkbox" class="checkbox">
                <p class="task-name">${task.name}</p>
            </div>
            <p class="discription">${task.description}</p>
            <div class="task-date">
                <img class="calendar" src="./img/calendar.png" alt="calendar"> 
                <p class="date">${task.date}</p>
                <img class="redact" src="./img/redact.png" alt="edit task">
            </div>
        </div>
        `;
        taskListContainer.insertAdjacentHTML("beforeend", taskHTML);
    });
});


