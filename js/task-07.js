

const inputClass = document.querySelector('#font-size-control');
// console.log(inputClass.value);
// За умовченням встановлюємо у мінімальне положення!
 inputClass.value =Number(inputClass.min); 
// console.log(inputClass.min);

inputClass.addEventListener("input", onInputChange);

function onInputChange(event) {
        
    inputClass.textContent = event.currentTarget.value;
    // console.log(inputClass.textContent);
    
    const volueFontSizeEl = String(inputClass.textContent) + 'px';
     console.log(volueFontSizeEl);

    const spanClass = document.querySelector('#text');
// console.log(spanClass);
// console.log(spanClass.textContent);
 spanClass.style.fontSize =  volueFontSizeEl;

    // console.log("Ползунок получил слушаеля");
}






// font-size: 12px;
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>