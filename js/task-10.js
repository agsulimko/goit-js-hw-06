function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const button = document.querySelectorAll('button');
const boxes = document.querySelector("#boxes");
console.log(boxes);


// "buttonCreate was clicked"

  
// считываем введенное число
function onInputChange(event) {
  
  input.textContent = event.currentTarget.value.trim();
  console.log(input.textContent);
  const amount = Number(input.textContent);

  const handleClick = () => {
    console.log("Button was clicked");
    


    // создаем и добавляем DIV 
    
   

    let index = 20;
    for (let i = 0; i < amount; i += 1) {
      index += 10;
      const indexString = String(index) + 'px';
      console.log(indexString);
      const boxesEl = document.createElement('div');
      boxes.append(boxesEl);


      // создаем квадраты цветные
      boxesEl.style.backgroundColor = getRandomHexColor();
      boxesEl.style.height = indexString;
      boxesEl.style.width = indexString;
    
      console.log(boxes);
      console.log(boxesEl);
    };
    
    
    
  };
  // console.log(button[0]);
  button[0].addEventListener
    ("click", handleClick);
  


}

  
input.addEventListener('input', onInputChange);


 
const destroyBoxes = () => {
  
  
  // console.log(firstdiv);

 
  console.log(boxes);

  const newArrayLastdiv = boxes.querySelector('div');
  console.log(newArrayLastdiv);


//     
      newArrayLastdiv.remove();
  
  console.log('Введенные данные очищенны!!!', newArrayLastdiv);
    };

   button[1].addEventListener
     ("click", destroyBoxes);
 


 

 



// // считываем введенное число
// refs.input.addEventListener('input', onInputChange);
// function onInputChange(event) {
        
//   refs.input.textContent = event.currentTarget.value.trim();
//   console.log(refs.input.textContent);
//   const amount = Number(refs.input.textContent);


// };



    // удаляем 
    // const destroyBoxes = () => {
    //   divEl.remove();
    // };
    //   destroyBoxes();
    //   };
 
    //   console.log('Введенные данные очищенны!!!');
 
  



// const buttonCreate = document.querySelector('button');
// console.log(buttonCreate);

// const handleClick = () => {
//   console.log("Button was clicked");
// };

// buttonCreate.addEventListener
//   ("click", handleClick);




// const button = document.querySelector(".btn");

// const handleClick = (event) => {
//   console.log("event: ", event);
//   console.log("event type: ", event.type);
//   console.log("currentTarget: ", event.currentTarget);
// };

// button.addEventListener("click", handleClick);






// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.