function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxesDiv = document.querySelector('#boxes');
console.log(input);
console.log(btnCreate);
console.log(btnDestroy);
console.log(boxesDiv);

btnCreate.addEventListener('click', createBoxes);
let boxSize = 20;
function createBoxes(amount) {
  amount = input.value;
  const countOfDivs = [];
  for (let i = 0; i < amount; i += 1) {
    const oneDivBox = document.createElement("div");
    boxSize += 10;
    oneDivBox.style.background = `${getRandomHexColor()}`; 
    oneDivBox.style.height = `${boxSize}px`;
    oneDivBox.style.width = `${boxSize}px`;
    countOfDivs.push(oneDivBox);
    console.log(oneDivBox);
  }
  boxesDiv.append(...countOfDivs);
  input.value = '';
}

btnDestroy.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  boxesDiv.innerHTML = '';
  boxSize = 20;
};
//   Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
// после чего рендерится коллекция. При нажатии на кнопку Очистить, 
// коллекция элементов очищается.
//   Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.
//   Размеры самого первого <div> - 30px на 30px.
//   Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
//   Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.
//   Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, 
// тем самым удаляя все созданные элементы.
