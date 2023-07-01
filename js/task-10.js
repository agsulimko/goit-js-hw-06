function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
input: document.querySelector('input'),
boxes: document.querySelector("#boxes"),
createBtn: document.querySelector('[data-create]'),
destroyBtn: document.querySelector('[data-destroy]'),
};

const inputOption = {
  min: Number(refs.input.min),
  max: Number(refs.input.max),
  step: Number(refs.input.step),
};

console.log(boxes);
// считываем введенное число
 
  const handleClick = () => {
    let amount = Number(refs.input.value);
    
    console.log("Button was clicked");
    if (amount < inputOption.min || amount > inputOption.max) { alert("min=1, max=100"); return };
    // создаем и добавляем DIV 
    const boxArr = [];
    const size = 30;
    const font = 20;
    for (let i = 0; i < amount; i += inputOption.step) {
      let growingSize = size + i * 10;
      let growingFont = font + i;
      console.log(growingSize);
      const boxesEl = `<div style="width:${growingSize > 70 ? 70 : growingSize}px;height:${growingSize}px;background-color:${createRGB()};display:flex;justify-content:center;align-items:center;"><p style="color:white;mix-blend-mode: difference;font-size:${growingFont > 80 ? 80 : growingFont}px;font-weight:500;">Q</p></div>`;
      boxArr.push(boxesEl);
      console.log(refs.boxes);
      // console.log(boxesEl); 
    };
    refs.boxes.insertAdjacentHTML("beforeend", boxArr.join(''));
  };
  
  refs.createBtn.addEventListener("click", handleClick);

  // удаляем 
  const destroyBoxes = () => {
    refs.boxes.innerHTML = '';
    refs.input.value = '';
    
  };
refs.destroyBtn.addEventListener("click", destroyBoxes);

// ============================================================
const createRGB = () => {
  const red = Math.round(Math.random(0, 1) * 255);
  const green = Math.round(Math.random(0, 1) * 255);
  const blue = Math.round(Math.random(0, 1) * 255);
  return `rgb(${red},${green}, ${blue})`;
 };
console.log(createRGB());

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