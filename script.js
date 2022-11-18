const btn = document.querySelector('[data-form-btn]');

const createTask = (event) => {
    event.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    input.value = "";
    
    const task = document.querySelector('[data-task]');

    const content = `<div>
                        <i class="far fa-check-square icon"></i>
                        <span class="task">${value}</span>
                    </div>
                    <i class="fas fa-trash-alt trashIcon icon"></i>`
    task.innerHTML = content;
    console.log(task);

};

btn.addEventListener('click', createTask);