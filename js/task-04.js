let counterValue = 0;
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const counterValueNumber = document.querySelector('#value');
console.log(btnDecrement, btnIncrement, counterValueNumber);

btnDecrement.addEventListener("click", (event) => { 
    counterValue += Number(event.currentTarget.textContent);
    console.log(counterValue);
    counterValueNumber.textContent = counterValue;
 });
btnIncrement.addEventListener("click", (event) => {
    counterValue += Number(event.currentTarget.textContent);
    console.log(counterValue);
    counterValueNumber.textContent = counterValue;
 });
// Создай переменную counterValue в которой будет храниться текущее 
//значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай 
//или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.