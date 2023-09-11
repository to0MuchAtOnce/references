const buttons = document.querySelectorAll('button');
// btn.addEventListener('click', () => { alert('Hello World')});

buttons.forEach((button) => {
button.addEventListener('click', () => {
    alert(button.id);
})
})


