//Напиши класс Client котрорый создает объект
//со свойствами login email и password
//Свойства #password приватное
//доступ к которому сделай через геттер и сеттер
// class Client {
//   static status = false;
//   #password;

//   constructor({ login, email, password }) {
//     this.login = login;
//     this.email = email;
//     this.#password = password;
//   }
//   get showPassword() {
//     return this.#password;
//   }
//   set showPassword(password) {
//     this.#password = password;
//   }
// }

// const client = new Client({
//   login: 'Natali',
//   email: '123@gmail.com',
//   password: '12345',
// });
// console.log(client);
// console.log(Client.status);

// class ClientMessage extends Client {
//   constructor({ login, password, email, message }) {
//     super({ login, password, email });
//     this.message = message;
//   }
// }
// const clientMessageExample = new ClientMessage({
//   password: '45677',
//   login: 'Hello',
//   email: 'qwert@mail',
//   message: 'Hello World',
// });
// console.log(clientMessageExample);

//DOM
// const fonts = ['Geneva', 'Arial', 'Helvetica', 'sans - serif'];
// const colors = ['black', 'órange', 'blue', 'pink'];
// const sizes = ['20px', '25px', '35px', '40px'];

// let count = 0;

// const text = document.getElementById('text');
// const button = document.getElementById('jsstyle');

// checkCount();
// button.addEventListener('click', onButtonClick);

// function onButtonClick() {
//   text.style.fontFamily = fonts[count];
//   text.style.fontSize = sizes[count];
//   text.style.color = colors[count];

//   count += 1;

//   if (count > colors.length - 1) {
//     count = 0;
//   }
//   localStorage.setItem('count', count);
// }

// function checkCount() {
//   const countStorage = localStorage.getItem('count');
//   if (countStorage) {
//     count = countStorage;
//   } else {
//     localStorage.setItem('count', 0);
//   }
// }

// TASK 2
// const form = document.getElementById('form1');
// console.log(form);
// console.dir(form);

// function onFormSubmit(name, surname) {
//   if (name === '' || surname === '') {
//     alert('Please insert ane data');
//   } else {
//     console.log(`name: ${name}, surname: ${surname}`);
//   }
// }
// form.addEventListener('submit', onFormSubmit(form.inputMode.value));

const date = new Date();
console.log(date);
