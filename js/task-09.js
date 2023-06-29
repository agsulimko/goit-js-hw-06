function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

 const refs = {
  body: document.querySelector('body'),
  button: document.querySelector('button'),
  span:document.querySelector('span')
}

const body = document.querySelector('body');
refs.body.classList.add('body-color');

 const bodyStyleEl = document.querySelector('.body-color');

 

const handleClick = (event) => {
   
  refs.span.textContent = getRandomHexColor();
  bodyStyleEl.style.backgroundColor = refs.span.textContent;
  console.log( refs.span.textContent); 
};

refs.button.addEventListener("click", handleClick);


// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерации случайного цвета используй функцию getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }