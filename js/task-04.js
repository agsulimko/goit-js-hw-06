let counterValue = 0;
const div = document.querySelector("#counter");
const counterValueEl = document.querySelector("#value");


const buttonDecrementEl = div.firstElementChild; 
const handleButtonDecrementClick = (event) => {
    counterValue -= 1;
    value();
};

buttonDecrementEl.addEventListener("click", handleButtonDecrementClick);


const buttonIncrementEl = div.lastElementChild;
const handleButtonIncrementClick = (event, callback ) => {
    counterValue += 1;
    value();
};

buttonIncrementEl.addEventListener("click", handleButtonIncrementClick);

const value=() => {
    counterValueEl.textContent = counterValue;
   
};

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.



