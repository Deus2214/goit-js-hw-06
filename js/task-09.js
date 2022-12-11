const button = document.querySelector('#btn');

const body = document.querySelector('body');

const value = document.querySelector('span.color');

const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']; 

button.addEventListener('click', getValue);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
