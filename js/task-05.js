
const refs = {
     input: document.querySelector('#name-input'),
   
      span: document.querySelector('#name-output')  
}

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
 
    refs.span.textContent = event.currentTarget.value.trim();
    console.log(refs.span.textContent);
}




// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

