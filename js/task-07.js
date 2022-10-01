const controller = document.querySelector('#font-size-control');
const textForChange = document.querySelector('#text');
textForChange.style.fontSize = "56px"

controller.addEventListener('input', () => {
    textForChange.style.fontSize = `${controller.value}px`;
 });
//    Напиши скрипт, который реагирует на изменение значения 
// input#font-size-control(событие input) и изменяет инлайн-стиль 
// span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.