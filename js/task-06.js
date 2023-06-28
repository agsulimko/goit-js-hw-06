const input = document.querySelector('input');
const inputClass=document.querySelector('#validation-input');
// console.log(Number(inputClass.getAttribute("data-length")));

input.addEventListener('input', onInputChange);


function onInputChange(event) {
        
        input.textContent = event.currentTarget.value.trim();
        const lengthInputEl = event.currentTarget.value.trim().length;
        console.log(input.textContent);
    if (lengthInputEl !== Number(inputClass.getAttribute("data-length"))) {
               input.classList.remove('valid');
               input.classList.add('invalid');
           } else {
            //    input.classList.replace('invalid', 'valid')
                 input.classList.remove('invalid');
               input.classList.add('valid');
    }
    
    }


    

// function onInputBlur() {
//         console.log('Импут забрал фокус- событие') 
//       }

//  function onInputFocus() {  
//       console.log('Импут получил фокус- событие')
//  }
     
       



    
 

  

// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.