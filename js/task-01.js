const NumberOfCategories = document.querySelectorAll(".item");
console.log("Number of categories:", NumberOfCategories.length);
NumberOfCategories.forEach((el) => {
  const categoriesTitle = el.querySelector("h2").innerHTML;
  console.log("Category:", categoriesTitle);
  const itemsLength = el.querySelectorAll("li").length;
  console.log(" Elements:", itemsLength);
});










// const firstChild = ctgr.firstElementChild

// console.log ('Category:',firstChild.querySelector('h2').textContent);
// console.log ('Elements:',firstChild.querySelectorAll('li').length);

// const secondChild = firstChild.nextElementSibling

// console.log ('Category:',secondChild.querySelector('h2').textContent);
// console.log ('Elements:',secondChild.querySelectorAll('li').length);


// const thirdChild = secondChild.nextElementSibling

// console.log ('Category:',thirdChild.querySelector('h2').textContent);
// console.log ('Elements:',thirdChild.querySelectorAll('li').length);