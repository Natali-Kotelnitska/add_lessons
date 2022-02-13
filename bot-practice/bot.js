'use script';

// const x = 5;
// const y = 3;
// const reason = 'x is expected to be less than y';
// console.assert(x < y, {x, y, reason});

// let password = "";

// do {
//   password = prompt("Введите пароль длиннее 4-х символов", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// оператор break
// for (let i = 1; i <= 6; i += 1) {
//     console.log(i);

//     if (i === 3) {
//         console.log(`Number ${i} found`);
//         break;
//     }
// }

// Оператор continue

const number = 10;
for (let i = 0; i <= number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }
  // console.log('нечетное і', i);
}

var isSquare = function (n) {
  return Math.sqrt(n) % 1 === 0; // fix me
};
console.log(isSquare(0));
console.log(isSquare(-2));
console.log(isSquare(25));
console.log(Number.isInteger(-1));
