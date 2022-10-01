const inputField = document.querySelector('#name-input');
const spanText = document.querySelector('#name-output');
// console.log(inputField);
// console.log(spanText.textContent);

inputField.addEventListener('input', (event) => {
    // console.log(event.currentTarget.value);
    if(event.currentTarget.value !== '') {
        return spanText.textContent = event.currentTarget.value;
    }
        return spanText.textContent = 'Anonymous';
});

//     Напиши скрипт который, при наборе текста в инпуте input#name-input 
// (событие input), подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous"