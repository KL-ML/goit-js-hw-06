function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const button = document.querySelector('.change-color');
const textColor = document.querySelector('.color');

button.addEventListener('click', onChangeColor);
function onChangeColor() {
  const randomColor = `${getRandomHexColor()}`
  body.style.background = `${randomColor}`;
  textColor.textContent = `${randomColor}`;
}



//   Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль 
// при клике на button.change-color и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.