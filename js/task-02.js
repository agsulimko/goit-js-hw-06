const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('ul');

const array = ingredients[0];

const elements = ingredients.map(ingredient => {
  const itemEl = document.createElement('ul');
  itemEl.textContent = ingredient;
  return itemEl;   
}) 

console.log(elements);

list.append(...elements); 

console.log(list);










// Вариант №2
// const list = document.querySelector('ul');
// console.log(list);

// ingredients.forEach(function (number, index) {
//   const item = document.createElement('li');
//   item.textContent = number;
//   list.append(item);
// });
 


// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.
