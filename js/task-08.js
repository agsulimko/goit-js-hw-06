const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
    const message = "Please fill in all the fields!";

     if (email.value === "" || password.value === "") {
         return alert(message);
         
  }
    // console.log(event.currentTarget);
    // console.log(`Login: ${email.value}, Password: ${password.value}`);

  const newObject = {
      email: email,
    password:password,
    };
    // newObject.email = email.value;
    // newObject.password = password.value;
    console.log('Обьект с введенными данными:', newObject);
    event.currentTarget.reset();
    console.log('Введенные данные очищенны!!!');
    
});

const button = form.querySelector("button");
button.classList.add('btn');
// console.log(button);

const handleClick = (event) => {
};

button.addEventListener("click", handleClick);


// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// +Обработка отправки формы form.login-form должна быть по событию submit.
// +При отправке формы страница не должна перезагружаться.
// +Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// +Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// +Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.
