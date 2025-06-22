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
            <button class="close-btn">&times;</button>
        </div>
        <p class="discription">${task.description}</p>
        <div class="task-date">
            <img class="calendar" src="./img/calendar.png" alt="calendar"> 
            <p class="date">${task.date}</p>
        </div>
    </div>
`;
        
        taskListContainer.insertAdjacentHTML("beforeend", taskHTML);
    });

    document.querySelectorAll('.close-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const updatedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        updatedTasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        location.reload();
    });
});

});


