(() => {
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

    const checkComplete = () => {
        const i = document.createElement("i");
        i.classList.add("far", "fa-check-square", "icon");
        i.addEventListener('click', completeTask);
        return i;
    };

    const completeTask = (event) => {
        const element = event.target;
        element.classList.toggle("fas");
        element.classList.toggle("completeIcon");
        element.classList.toggle("far");
    };

    const deleteIcon = () => {
        const i = document.createElement("i");
        i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
        i.addEventListener('click', deleteTask);
        return i;
    };

    const deleteTask = (event) => {
        const parent = event.target.parentElement;
        parent.remove();
    };

})();
