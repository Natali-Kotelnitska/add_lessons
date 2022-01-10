//reduce()
//То есть метод reduce() используется когда необходимо взять «много» и привест
// В повседневных задачах его применение сводится к работе с числами.
//Легче всего представить его работу
// на примере подсчёта суммы элементов массива.
const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

// console.log(total); // 32

//
// # Вначале метод reduce() создаёт внутреннюю переменную-аккумулятор и
// # присваивает ей значение параметра initialValue или первого элемента
// # перебираемого массива, если initialValue не задан.
// previousValue = 0

// # Далее коллбек-функция вызывается для каждого элемента массива. Текущее значение
// # параметра previousValue это то, что вернула коллбек-функция на прошлой итерации.
// Итерация 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
// Итерация 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
// Итерация 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
// Итерация 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
// Итерация 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32

// # После того как весь массив перебран, метод reduce() возвращает значение аккумулятора.
//     Результат - 32
//

//TASK 34/48 Module 4
//Игровому сервису необходим функционал подсчёта среднего времени
// проведённого в играх.Дополни код так,
// чтобы в переменной totalPlayTime получилось общее игровое время
// из массива playtimes.
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line
// const totalPlayTime = playtimes.reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);
// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length; //673

//При работе с массивом объектов выполняется редуцирование по значению
// какого - то свойства.Например,
// есть массив студентов с баллами за тест.
// Необходимо получить средний бал.
const students = [
  { name: 'Mango', score: 83 },
  { name: 'Poly', score: 59 },
  { name: 'Ajax', score: 37 },
  { name: 'Kiwi', score: 94 },
  { name: 'Houston', score: 64 },
];

// Название аккумулятора может быть произвольным, это просто параметр функции
const totalScore = students.reduce((total, student) => {
  return total + student.score;
}, 0);

const averageScore = totalScore / students.length;

// TASK 35/48 Module 4
const players = [
  { name: 'Mango', playtime: 80, gamesPlayed: 4 },
  { name: 'Poly', playtime: 40, gamesPlayed: 2 },
  { name: 'Ajax', playtime: 60, gamesPlayed: 3 },
  { name: 'Kiwi', playtime: 20, gamesPlayed: 1 },
];
// Change code below this line
// 1-й варіант (без деструктуризації)
// const totalAveragePlaytimePerGame = players.reduce((previousValue, player) => {
//   return previousValue + player.playtime / player.gamesPlayed;
// }, 0);
// 1-й варіант (деструктуризація)
const totalAveragePlaytimePerGame = players.reduce(
  (previousValue, { playtime, gamesPlayed }) => {
    return previousValue + playtime / gamesPlayed;
  },
  0,
);

// console.log(totalAveragePlaytimePerGame);

/*
 * Считаем общую зарплату (О.Репета - Зан.1 Методи массива)
 */

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};
// Object.values () - повертає масив
const totalSalary = Object.values(salary).reduce(
  (total, value) => total + value,
  0,
);
// console.log(totalSalary);

/*
 * Считаем общее количество часов (О.Репета - Зан.1 Методи массива)
 */

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// const totalTimePlayed = players.reduce(
//   (totalTime, player) => totalTime + player.timePlayed,
//   0,
// );

// console.log(totalTimePlayed);

/*
 * Считаем общую сумму товаров корзины (О.Репета - Зан.1 Методи массива)
 */
const cart = [
  { label: 'Apples', price: 100, quantity: 2 },
  { label: 'Bananas', price: 120, quantity: 3 },
  { label: 'Lemons', price: 70, quantity: 4 },
];

const totalAmount = cart.reduce(
  (total, { price, quantity }) => total + price * quantity,
  0,
);

// console.log(totalAmount);

/*
 * Собираем все теги из твитов (О.Репета - Зан.1 Методи массива)
 */
const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);

console.log(allTags);

// acc = [], tweet.tags = ['js', 'nodejs'] return [...[], ...['js', 'nodejs']]
// acc = ['js', 'nodejs'] tweet.tags ['html', 'css']
// return  [...['js', 'nodejs'], ...['html', 'css']]
//  ['js', 'nodejs', 'html', 'css']

/*
 * Ведём статистику тегов
 */
// змінюєм ссилку(не добре)
// const tagsStats = allTags.reduce((acc, tag) => {
//   console.log(acc);

//   if (acc[tag]) {
//     acc[tag] += 1;

//     return acc;
//   }

//   acc[tag] = 1;

//   return acc;
// }, {});
// варіант без зміни оригіналу
// const tagsStats = allTags.reduce((acc, tag) => {
//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   };
// }, {});

const tagsStats = allTags.reduce(
  (acc, tag) => ({
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  }),
  {},
);
console.log(tagsStats);

// если свойство с ключом tag есть. увеличить его значение на 1
// если свойствоства нет с таким ключом что в tag, сделать и записать 1

// TASK 48 / 48 Module 4
// Дополни функцию getTotalBalanceByGender(users, gender) так,
// чтобы она возвращала общий баланс пользователей
// (свойство balance), пол которых(свойство gender)
// совпадает со значением параметра gender.
const getTotalBalanceByGender = (users, gender) =>
  users
    .filter(user => user.gender === gender)
    .map(user => user.balance)
    .reduce((balance, element) => balance + element, 0);
