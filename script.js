const btn = document.querySelector('[data-form-btn]');

const createTask = (event) => {
    event.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    input.value = "";
    
    const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
    task.classList.add('card');
    const content = `<div>
                        ${checkComplete()}
                        <span class="task">${value}</span>
                    </div>
                    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    task.innerHTML = content;
    console.log(task);

    list.appendChild(task);

};

btn.addEventListener('click', createTask);

const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far");
    i.classList.add("fa-check-square");
    i.classList.add("icon");

    return i;
}