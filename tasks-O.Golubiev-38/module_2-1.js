// Разбор задач
// Основные функции массивов js/script-task-3.js
// Функция возвращающая наименьшее значение js/script-task-4.js
// Перебор массива js/script-task-5.js
// Сортировка js/script-task-6.js (.sort())
// Найти наименьшее значение в массиве js/script-task-7.js
// Псевдомассив arguments js/script-task-8.js

//Array example - task-2
//Table

// const medals = [
//   ['Country', 'Hokey', 'Football', 'Volleyball'],
//   ['Ukraine', 1, 5, 3],
//   ['Canada', 10, 2, 4],
//   ['USA', 6, 1, 2],
// ];

// for (const raw of medals) {
//   let tableLine = '';
//   for (const line of raw) {
//     tableLine += ' ' + String(line).padStart(10, ' ');
//   }
//   console.log(tableLine);
// }

// из такого массива получить
// const medalsReverse = [
//   ['Country', 'Ukraine', 'Canada', 'USA'],
//   ['Hokey', 1, 10, 6],
//   ['Football', 5, 2, 1],
//   ['Volleyball', 3, 4, 2],
// ];

// такую табличку
// Country      Hokey   Football Volleyball
// Ukraine          1          5          3
// Canada          10          2          4
// USA              6          1          2

/**
 * // Основные функции массивов js/script-task-3.js
 * 
 * Array basic functions
 * 1. Add 'Rock' to the end
 * 2. Replace middle value to 'Classic'. It have to work with any length!
 * 3. Remove first element and type in console
 * 4. Add 'Rap' and 'Raggy' to the start
 */

// const styles = ['Jazz', 'Blues'];

// styles.push('Rock');

// styles[Math.floor(styles.length / 2)] = 'Classic';
// styles[parseInt(styles.length / 2)] = 'Classic';
// styles.splice(styles.length / 2, 1, 'Classic');

// console.log(styles.shift());

// styles.unshift('Rap', 'Raggy');

// console.log(styles)

/**
 * // Функция возвращающая наименьшее значение js/script-task-4.js
 * Create function that returns smallest value
 */
// 'use strict';
// const returnMinValue = function (a,b) {
    
//     if (a > b) {
//         return b;
//     }
//     return a;
// }
// console.log(returnMinValue([3, 2], 1));


// const min = function (a, b) {
//   if (a > b) {
//     return b;
//   }
//   return a;
// };

// function min(a, b) {
//   if (a > b) {
//     return b;
//   }
//   return a;
// }

// console.log(min(1, 4));
// console.log(min(3, 2));
// console.log(min(-1, -5));

// function min(a, b) {
//   return 0;
// }

/**
 * // Перебор массива js/script-task-5.js
 * Array brute force
 * Log in console array in format <item number> - <item value>
 * Number starts from 1
 * Example "1 - Jazz"
 */

// const array = ['Mango', 'Poly', 'Ajax'];

// for (let i = 0; i < array.length; i += 1) {
//   console.log(`${i + 1} - ${array[i]}`);
// }

/**
 * // Сортировка js/script-task-6.js  (.sort()) - переробляє все в строку.
 */

// const arrNumber = [8, 6, 22, 99];
// const arrString = ['HTML', 'JavaScript', 'CSS'];

// arrString.sort();
// arrNumber.sort();
// console.log(arrNumber);
// console.log(arrString);


/**
 * Find smallest number in array
* Найти наименьшее значение в массиве js/script-task-7.js

// const array1 = [2, 17, 94, 1, 23, 37];
// const array2 = [49, 4, 83, 7, 12];

// const minInArray = function (array) {
//   let min = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (min > array[i]) {
//       min = array[i];
//     }
//   }
//   return min;
// };

// console.log(minInArray(array1));
// console.log(minInArray(array2));

/**
 * Array-like object arguments
* Псевдомассив arguments js/script-task-8.js

const argFunc = function () {
  //for (const item of arguments) console.log(item);
  //for (let i = 0; i < arguments.length; i++) console.log(arguments[i]);

  const array = Array.from(arguments);
  arguments[arguments.length] = 'new';
  console.log(arguments);
  console.log(array);
};

argFunc(1, 3, 2, 0);
// console.log([1, 3, 2, 0]);

/*
"const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
*/