
const inputField = document.querySelector('#validation-input');
const dataLength = Number(inputField.getAttribute('data-length'));
// console.log(typeof dataLength);
// console.log(inputField);

inputField.addEventListener('blur', (event) => {
    inputField.classList.remove(`valid`);
    inputField.classList.remove(`invalid`);
    if (event.currentTarget.value.length === dataLength) {
        event.currentTarget.classList.add("valid");
    } else if (event.currentTarget.value.length !== 0){
        event.currentTarget.classList.add("invalid");
    }
}

    // const inputValue = event.currentTarget.value;
    // if (inputValue.length === dataLength) {
    //     if (inputField.classList.contains("invalid")) {
    //         inputField.classList.replace("invalid", "valid")
    //     } else {
    //         inputField.classList.add("valid");
    //     }
    // } else if (inputValue.length === 0) {
    //     inputField.classList.remove("valid") || inputField.classList.remove("invalid");
    // } else { inputField.classList.add("invalid")
    //     // if (inputField.classList.contains("valid")) {
    //     //     inputField.classList.replace("valid", "invalid")
    //     // } else {
    //     //     inputField.classList.add("invalid");
    //     // }
    // }
 );

//   Напиши скрипт, который при потере фокуса на инпуте(событие blur), 
// проверяет его содержимое на правильное количество введённых символов.
//   Сколько символов должно быть в инпуте, указывается в его атрибуте 
// data - length.
//   Если введено подходящее количество символов, то border инпута 
// становится зелёным, если неправильное - красным.
//   Для добавления стилей, используй CSS-классы valid и invalid, 
// которые мы уже добавили в исходные файлы задания.

