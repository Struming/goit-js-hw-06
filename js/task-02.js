const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector('#ingredients');
let liElements = '';

ingredients.forEach((ingredient) => {
  liElements += `<li class="item">${ingredient}</li>`;
});

ul.innerHTML = liElements;
