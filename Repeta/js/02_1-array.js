// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);
// const lastIndex = friends.length - 1;

// for (let i = 0; i < friends.length; i += 1) {
//   friends[i] += `-${i}`;
//   console.log(friends[i])
// }

// for (let friend of friends) {
//   console.log(friend);
// }

// console.table(friends);

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
// }

// // for (let value of cart) {
// //   value = Math.round(value * 1.1);
// // }

// console.log(cart);

function findLongestWord(string) {
  const convertedString = string.split(' ');
  console.log(convertedString);

  let wordLength = convertedString[0].length;
  // console.log('length: ', convertedString[0].length);
  // console.log(convertedString[0]);

  let longestWord;
  for (let i = 0; i < convertedString.length; i += 1) {
    // console.table(convertedString[i]);
    // console.log(convertedString[i].length);
    if (convertedString[i].length > wordLength) {
      console.log(i);
      console.log(convertedString[i]);
      // longestWord = convertedString[i];
      // return longestWord;
    }
  }
  // return longestWord;
}
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you'));
