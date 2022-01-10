// const students = [
//   { name: 'Mango', score: 83 },
//   { name: 'Poly', score: 59 },
//   { name: 'Ajax', score: 37 },
//   { name: 'Kiwi', score: 94 },
// ];
//сортировка по возрастанию
// const inAscendingScoreOrder = [...students].sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score,
// );
// // console.log(inAscendingScoreOrder);
// //сортировка по убиванию
// const inDescendingScoreOrder = [...students].sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score,
// );
// //сортировка строк в алфавітному порядку
// const inAlphabeticalOrder = [...students].sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name),
// );

//TASK 41/48 Module 4
// Дополни код так, чтобы:

// В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном порядке.
// В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((firstAuthor, secondAuthor) =>
//   firstAuthor.author.localeCompare(secondAuthor.author),
// );
// // console.log(sortedByAuthorName);

// const sortedByReversedAuthorName = [...books].sort(
//   (firstAuthor, secondAuthor) =>
//     secondAuthor.author.localeCompare(firstAuthor.author),
// );

// const sortedByAscendingRating = [...books].sort(
//   (firstAuthor, secondAuthor) => firstAuthor.rating - secondAuthor.rating,
// );

// const sortedByDescentingRating = [...books].sort(
//   (firstAuthor, secondAuthor) => secondAuthor.rating - firstAuthor.rating,
// );

// *
//TASK 41/48 Module 4
// Необходимо получить массив их имён отсортированный по возрастанию баллов за тест.
// Для этого мы отсортируем копию массива методом sort(),
// после чего методом map() составим массив значений свойства name из сортированного массива.
const students = [
  { name: 'Mango', score: 83, courses: ['mathematics', 'physics'] },
  { name: 'Poly', score: 59, courses: ['science', 'mathematics'] },
  { name: 'Ajax', score: 37, courses: ['physics', 'biology'] },
  { name: 'Kiwi', score: 94, courses: ['literature', 'science'] },
];

// const sortedByAscendingScore = [...students]
//   .sort(
//     (firstStudent, secondStudent) => firstStudent.score - secondStudent.score,
//   )
//   .map(student => student.name);
// console.log(sortedByAscendingScore); //["Ajax", "Poly", "Mango", "Kiwi"]

//сортированный по алфавиту массив уникальных посещаемых предметов.
const uniqueSortedCourses = students
  .flatMap(student => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .sort((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]

//TASK 45/48 Module 4
const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  {
    title: 'The Dreams in the Witch House',
    author: 'Howard Lovecraft',
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
// Change code below this line
// const filtered = [...books].filter(book => book.rating > MIN_BOOK_RATING);
// console.log(filtered); //масив обєктів [{…}, {…}, {…}]
// const mapped = filtered.map(book => book.author);
// console.log(mapped); // масив ['Bernard Cornwell', 'Robert Sheckley', 'Howard Lovecraft']
// const sorted = mapped.sort();
// console.log(sorted); //['Bernard Cornwell', 'Howard Lovecraft', 'Robert Sheckley']

const names = [...books]
  .filter(book => book.rating > MIN_BOOK_RATING)
  .map(book => book.author)
  .sort();
// console.log(names);

//TASK 46/48 Module 4
// Дополни функцию getNamesSortedByFriendCount(users) так,
// чтобы она возвращала массив имён пользователей отсортированный
// по возрастанию количества их друзей(свойство friends).

// const getNamesSortedByFriendCount = users =>
//   [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(user => user.name);

//TASK 47/48 Module 4
const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
    isActive: true,
    balance: 3951,
    gender: 'male',
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: [
      'Jacklyn Lucas',
      'Linda Chapman',
      'Adrian Cross',
      'Solomon Fokes',
    ],
    isActive: false,
    balance: 1498,
    gender: 'male',
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
  },
];

const getSortedFriends = users =>
  users
    .flatMap(user => user.friends)
    .filter((friend, index, array) => array.indexOf(friend) === index)
    .sort();

// console.log(getSortedFriends(users));
