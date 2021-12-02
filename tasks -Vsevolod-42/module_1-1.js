"use strict"
// const f = 'Hello world!';
// console.log('test ' + 1 + ' test');
// console.log(`Test: ${200 + 100}: ${f}`);

/* Example 4 - Класс Math
Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. значения переменной value. 
Используй методы Math.floor(), Math.ceil() и Math.round(). Проверь что будет в консоли при значениях 27.3 и 27.9. */

/* const value = 27.5;
console.log('floor', Math.floor(27.5));
console.log('ceil', Math.ceil(27.5));
console.log('round', Math.round(27.5));
console.log('round', Math.round(27.4)); */

/* Example 6 - Методы строк и чейнинг
Напиши скрипт который рассчитывает индекс массы тела человека. 
Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.
Вес и высота хранятся в переменных weight и height, но не как числа, а в виде строк (специально для задачи). 
Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.
Индекс массы тела необходимо округлить до одной цифры после запятой; */

/* let weight = '88,3';
let height = '1.75';
const weightFloat = parseFloat(weight.replace(',', '.'));
const heightFloat = parseFloat(height.replace(',', '.'));
const bmi = weightFloat / (heightFloat ** 2);

console.log(+bmi.toFixed(1)); // 28.8 */

/* Example 7 - Операторы сравнения и приведение типов
Каким будет результат выражений? 
https://en.wikipedia.org/wiki/List_of_Unicode_characters
*/

// console.log(5 > 4);
// console.log(10 >= '7');
// console.log('2' > '12');
// console.log('2' < '12');
// console.log('4' == 4);
// console.log('6' === 6);
// console.log('false' === false);
// console.log(1 == true);
// console.log(1 === true);
// console.log('0' == false);
// console.log('0' === false);
// console.log('Papaya' < 'papaya');
// console.log('Papaya' === 'papaya');
// console.log(undefined == null);
// console.log(undefined === null);


/* Example 9 - Значение по умолчанию и оператор нулевого слияния
Отрефактори код так, чтобы в переменную value присваивалось значение переменной incomingValue, если оно не равно undefined или null. 
В противном случае должно присваиваться значение defaultValue. 
Проверь работу скрипта для следующих значений переменной incomingValue: null, undefined, 0, false. 
Используй оператор ?? (nullish coalescing operator). */

// const incomingValue = undefined;
// const defaultValue = 10;
// const value = incomingValue ?? defaultValue;
// const value = incomingValue===null || incomingValue===undefined? defaultValue :incomingValue;

// console.log(value);


/* Example 10 - Опертор % и методы строк
Напиши скрипт который переведёт значение totalMinutes (количество минут) в строку в формате часов и минут HH:MM.
70 покажет 01:10
450 покажет 07:30
1441 покажет 24:01 */

const totalMinutes = 1441;
const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;

const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2,0)

console.log(`${doubleDigitHours}:${doubleDigitMinutes}`)




// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);

// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);


// function multiply() {
//   let total = 1;

//   for (const argument of arguments) {
//     total *= argument;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120

const array = ['is', 'this', 'is', 'javascript'];
// let result = 'IsThisIsJavascript'; (edited) 

for (const i = 0; i < array.length; i + 1) {
  array[i] = array[i].charAt(0).toUpperCase() + array[0].slice(1);

  console.log(array[i])
};
