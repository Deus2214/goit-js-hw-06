const ingredients = ["Potatoes","Mushrooms","Garlic","Tomatos"," Herbs,Condiments"];

const list = document.querySelector ('#ingredients');

const markup = ingredients.map (ingredient => {
  const li = document.createElement ('li');
  li.textContent = ingredient;
  return li
})

list.append(...markup)






// const listElements = document.querySelector("#ingridients");

// const makeMarkupCategories = ingridients => {
//   return ingredients.map(ingr => {
//     const itemEl = document.createElement("li");
//     itemEl.classList.add("item");
//     itemEl.textContent = ingr;

//     return itemEl;
//   });
// };

// const itemsElement = makeMarkupCategories(ingredients);
// listElements.append(...itemElements);
// console.log(ingredients);








// const textElement = document.getElementById('ingredients');


// const newElement = document.createElement('li');
// newElement.innerHTML = 'Potatoes'
// console.log(newElement);
// textElement.append(newElement);
// newElement.classList.add("item");

// const secondChild = document.createElement('li');
// secondChild.innerHTML = 'Mushrooms'
// console.log(secondChild);
// textElement.append(secondChild);
// secondChild.classList.add("item");

// const thirdChild = document.createElement('li');
// thirdChild.innerHTML = ' Garlic'
// console.log(thirdChild);
// textElement.append(thirdChild);
// thirdChild.classList.add("item");

// const nextSibling = document.createElement('li');
// nextSibling .innerHTML = ' Tomatos'
// console.log(nextSibling );
// textElement.append(nextSibling );
// nextSibling .classList.add("item");

// const fifthChild = document.createElement('li');
// fifthChild  .innerHTML = ' Herbs'
// console.log(fifthChild );
// textElement.append(fifthChild  );
// fifthChild .classList.add("item");

// const lastChild = document.createElement('li');
// lastChild .innerHTML = ' Condiments'
// console.log(lastChild );
// textElement.append(lastChild );
// lastChild.classList.add("item");











 




