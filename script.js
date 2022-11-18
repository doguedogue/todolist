const btn = document.querySelector('[data-form-btn]');

const createTask = (event) => {
    event.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    input.value = "";
    console.log(value);
};

btn.addEventListener('click', createTask);