function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const button = document.querySelectorAll('button');
const boxes = document.querySelector("#boxes");
console.log(boxes);




// считываем введенное число
function onInputChange(event) {
  
  input.textContent = event.currentTarget.value.trim();
  console.log(input.textContent);
  let amount = Number(input.textContent);
  console.log(amount);
  event.currentTarget.value = "";
  if (amount < Number(input.getAttribute("min")) || amount > Number(input.getAttribute("max"))) { alert("min=1, max=100"); return  };
    
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
  }
  
  button[0].addEventListener("click", handleClick);

  // удаляем 
  const destroyBoxes = () => {
  
    for (let i = 0; i < amount; i += 1) {
      boxes.firstElementChild.remove();
    }
    amount = 0;
    console.log(boxes);
    console.log(amount);
  }
  button[1].addEventListener("click", destroyBoxes);
  
}
input.addEventListener('change', onInputChange);


  


const min = Number(input.getAttribute("min"));
console.log(min);
const max = Number(input.getAttribute("max"));
console.log(max);


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