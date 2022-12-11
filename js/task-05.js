const inputEl = document.querySelector('#name-input');
// console.log(inputEl);
const textEl = document.querySelector('#name-output');
// console.log(textEl);

inputEl.addEventListener('input',onInput);

function onInput(event) {
textEl.textContent = event.currentTarget.value;
if(inputEl.value === ""){
    return textEl.textContent = "Anonymous";
 }
 
}