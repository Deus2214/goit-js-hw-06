const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const textElement = document.querySelector('.gallery');
const markup = images.map(({ url, alt }) => `<li>
<img src="${url}" 
alt="${alt}" 
width="300" height="200">
</li>`).join("")
textElement.insertAdjacentHTML("beforeend", markup);






// const textElement = document.querySelector(".gallery");
// console.log(textElement)
// textElement.insertAdjacentHTML(
//   'afterbegin', '<li><img  src = "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt ="White and Black Long Fur Cat"></li>'
// );


// textElement.insertAdjacentHTML(
//   'beforeend', '<li><img  src = "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt ="Orange and White Koi Fish Near Yellow Koi Fish"></li>'
// );

// textElement.insertAdjacentHTML(
//   'beforeend', '<li><img  src = "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt ="Group of Horses Running"></li>'
// );
// textElement.style.display = "flex";
// textElement.style.gap = "20px";
// textElement.style.width = "300px";
// textElement.style.height = "300px";


// const elements = images.map(({ url, alt }) => {
//   const markup = ` <li><img class="image" src= ${url} alt= ${alt} width=400 /></li> `;
//   return markup;
// })
// .join("");
