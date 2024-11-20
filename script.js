const inputElement = document.querySelector('input');
const translateButton = document.querySelector('#translateButton');

document.addEventListener('DOMContentLoaded', (event) => {
    translateButton.addEventListener('click', () => {
        console.log(inputElement.value);
    });
});
