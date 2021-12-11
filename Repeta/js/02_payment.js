/*
 * Напиши функцию calculateTotalPrice(items)
 * которая принимает массив цен (чисел) и возвращает их сумму
 */

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (const value of cart) {
//   total += value;
// }

// console.log('Total: ', total);

const calculateTotalPrice = function (items) {
  console.log('items внутри функции: ', items);

  let total = 0;

  for (const item of items) {
    total += item;
  }

  return total;
};

const r1 = calculateTotalPrice([1, 2, 3]);

console.log(`Общая сумма покупок ${r1}`); // 6
console.log(calculateTotalPrice([5, 10, 15, 20])); // 50
console.log(calculateTotalPrice([100, 200, 300])); // 600

// * PAYMENT
//  * Посчитать общую сумму покупок в корзине
//  */

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

// 2 сделать переменную total до цикла
// let total = 0;

// 1 перебрать массив
// for (let i = 0; i < cart.length; i += 1) {
// console.log(cart[i]);
//   // 3 каждый элемент приплюслвать к total
//   total += cart[i];
//   // total = total + cart[i];
// }

// for (const value of cart) {
//   total += value;
// }

// console.log('Total: ', total);

// // Добавить такс

// for (let i = 0; i < cart.length; i += 1) {
//   cart[i] = Math.round(cart[i] * 1.1);
//   console.log(cart[i]);
// }

// // for (let value of cart) {
// //   value = Math.round(value * 1.1);
// // }

// console.log(cart);


