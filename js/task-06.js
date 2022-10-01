
const inputField = document.querySelector('#validation-input');
const dataLength = Number(inputField.getAttribute('data-length'));
// console.log(typeof dataLength);
// console.log(inputField);

inputField.addEventListener('blur', (event) => {
    const inputValue = event.currentTarget.value;
    if (inputValue.length !== dataLength &&
        inputField.classList.contains("valid") !== true) {
        inputField.classList.add("invalid");
    } else if (inputValue.length !== dataLength &&
        inputField.classList.contains("valid") === true) {
        inputField.classList.replace("valid", "invalid");
    } else if (inputValue.length === dataLength &&
        inputField.classList.contains("invalid") === true) {
        inputField.classList.replace("invalid", "valid");
    } else {
        inputField.classList.add("valid");
    }
 });

//   Напиши скрипт, который при потере фокуса на инпуте(событие blur), 
// проверяет его содержимое на правильное количество введённых символов.
//   Сколько символов должно быть в инпуте, указывается в его атрибуте 
// data - length.
//   Если введено подходящее количество символов, то border инпута 
// становится зелёным, если неправильное - красным.
//   Для добавления стилей, используй CSS-классы valid и invalid, 
// которые мы уже добавили в исходные файлы задания.

