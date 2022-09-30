const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients = document.querySelector('#ingredients');
// console.log(listOfIngredients);

const ingredientsMarkup = [];
ingredients.forEach((ingr) => {
  const item = document.createElement('li');
  const title = ingr;
  item.textContent = title;
  item.classList.add('item'); 
  // console.log(item);
  ingredientsMarkup.push(item);  
});

// console.log(ingredientsMarkup);
listOfIngredients.after(...ingredientsMarkup);

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.