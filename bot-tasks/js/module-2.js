"use strict";
// task 9/32
// function getExtremeElements(array) {
//   // Change code below this line
//   let newArray = [];
//   const firstEl = array.shift();
//   const lastEl = array.pop();

//   newArray.push(firstEl, lastEl);
//   return newArray;
//   // Change code above this line
// }
// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(["apple", "peach", "pear", "banana"]);

// task 11/32
function calculateEngravingPrice(message, pricePerWord) {
  // Change code below this line
  const total = message.split(" ").length * pricePerWord;
  //   2-варіант
  //   const wordsArray = message.split(" ");
  //   const wordsQuantity = wordsArray.length;
  //   total = wordsArray.length * pricePerWord;
  return total;
  // Change code above this line
}
// calculateEngravingPrice("JavaScript is in my blood", 10);
// calculateEngravingPrice("Web-development is creative work", 40);

// task 13/32 (slug)
// function slugify(title) {
// const slug = title.toLowerCase().split(" ").join("-");
// console.log(slug);
//   return slug;

// old-school варіант 2
//   const normalizedTitle = title.toLowerCase();
//   const words = normalizedTitle.split(" ");
//   const slug = words.join("-");
// }
// slugify("Arrays for begginers");
// slugify("How to become a JUNIOR developer in TWO WEEKS");

// tast 16/32
// function makeArray(firstArray, secondArray, maxLength) {
// Change code below this line

//   const newArray = firstArray.concat(secondArray);
//   if (newArray.length > maxLength) {
//     return newArray.slice(0, maxLength);
//   }
//   return newArray;
//   // Change code above this line
// }
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);

// task 18/32
// function calculateTotal(number) {
//   // Change code below this line
//   let total = 0;
//   for (let i = 1; i <= number; i += 1) {
//     total += i;
//   }

//   return total;
//   // Change code above this line
// }
// console.log(calculateTotal(3));
// // 6
// console.log(calculateTotal(18));
// 171

// task 21/32
// function findLongestWord(string) {
//   const newString = string.split(" ");
//   let longestWord = newString[0];
//   for (const word of newString) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// task 22/32
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(29, 34));

// task 23/32
// function filterArray(numbers, value) {
//   // Change code below this line
//   const numberArray = [];
//   for (const number of numbers) {
//     if (number > value) {
//       numberArray.push(number);
//     }
//   }
//   return numberArray;
//   // Change code above this line
// }

// task 25/32
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const newArray = [];
//   for (const number of array1) {
//     if (array2.includes(number)) {
//       newArray.push(number);
//     }
//   }
//   return newArray;
//   // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

// task 31/32
// function findNumber(start, end, divisor) {
//   // Change code below this line

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return i;
//     }
//   }
//   // Change code above this line
// }
// findNumber(8, 17, 3);

// task 32/32
function includes(array, value) {
  // Change code below this line
  for (let i = 0; i < array.length; i += 1) {
    console.log(i);

    // let newlettet = arrayValue === value;
    // if (newlettet) {
    //   return newlettet;
    // }
    // if (!newlettet) {
    //   return !newlettet;
    // }
  }
}
console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes([1, 2, 3, 4, 5], 17));

// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");
// includes(["apple", "plum", "pear", "orange"], "kiwi");
// includes();
