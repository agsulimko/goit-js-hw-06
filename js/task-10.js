function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector('input'),
  // button: document.querySelector('button'),
 
};



// "buttonCreate was clicked"
const button = document.querySelectorAll('button');
// console.log(buttonCreate[0]);
 

  // console.log(buttonCreate[0]);
 
  
// считываем введенное число
function onInputChange(event) {
  
  refs.input.textContent = event.currentTarget.value.trim();
  console.log(refs.input.textContent);
  const amount = Number(refs.input.textContent);

  const handleClick = () => {
    console.log("Button was clicked");
    


    // создаем и добавляем DIV 
    const firstdiv = document.querySelector('div');
    // console.log(firstdiv);

    const lastdiv = firstdiv.nextElementSibling;

    let index = 20;
    for (let i = 0; i < amount; i += 1) {
      index += 10;
      const indexString = String(index) + 'px';
      console.log(indexString);
      const divEl = document.createElement('div');
      lastdiv.append(divEl);


      // создаем квадраты цветные
      divEl.style.backgroundColor = getRandomHexColor();
      divEl.style.height = indexString;
      divEl.style.width = indexString;
    
      console.log(lastdiv);
      console.log(divEl);
    };
    
    
    
  };
  // console.log(button[0]);
  button[0].addEventListener
    ("click", handleClick);
  
  

   
// удаляем 
    
      
    //   };
 
    //   console.log('Введенные данные очищенны!!!');


}

  
refs.input.addEventListener('input', onInputChange);


 
const destroyBoxes = () => {
  
  const firstdiv = document.querySelector('div');
  // console.log(firstdiv);

  const lastdiv = firstdiv.nextElementSibling;
  console.log(lastdiv);

  const newArrayLastdiv = lastdiv.querySelectorAll('div');
  console.log(newArrayLastdiv);


//     
      lastdiv.remove();
  
  console.log('Введенные данные очищенны!!!', lastdiv);
    };

   button[1].addEventListener
     ("click", destroyBoxes);
 


 
// console.log(buttonCreate[0].dataset.create);

 



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