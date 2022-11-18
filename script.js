import checkComplete from './components/checkComplete.js';
import deleteIcon from './components/deleteIcon.js';


const btn = document.querySelector('[data-form-btn]');

const createTask = (event) => {
    event.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    input.value = "";

    const list = document.querySelector('[data-list]');

    const task = document.createElement('li');
    task.classList.add('card');

    const taskContent = document.createElement('div');
    taskContent.appendChild(checkComplete());

    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);
    
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());

    list.appendChild(task);

};

btn.addEventListener('click', createTask);

