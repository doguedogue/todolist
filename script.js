const btn = document.querySelector('[data-form-btn]');

console.log(btn);

btn.addEventListener('click', (event) => {
    event.preventDefault();
    const input = document.querySelector('[data-form-input]');
    console.log(input.value);
});