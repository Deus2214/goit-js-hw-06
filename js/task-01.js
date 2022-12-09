const ctgr = document.querySelector('#categories');
console.log ('Number of categories',ctgr.children.length);

const firstChild = ctgr.firstElementChild

console.log ('Category:',firstChild.querySelector('h2').textContent);
console.log ('Elements:',firstChild.querySelectorAll('li').length);

const secondChild = firstChild.nextElementSibling

console.log ('Category:',secondChild.querySelector('h2').textContent);
console.log ('Elements:',secondChild.querySelectorAll('li').length);


const thirdChild = secondChild.nextElementSibling

console.log ('Category:',thirdChild.querySelector('h2').textContent);
console.log ('Elements:',thirdChild.querySelectorAll('li').length);