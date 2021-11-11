// String
// Number
// Boolean

// null
// undefined
// BigInt
// Symbol

// Object

// Type Hinting - за нас JS
// Casting - делаем мы

// String
// Number
// Boolean

let urlToParse =
    `https://content.guardianapis.com/search?page=2&q=debate&api-key=test`.split(
        "?"
    )[1];

console.log(urlToParse);

// let urlArr = urlToParse.split("&");

// let obj = {};

// urlArr.forEach((el) => {
//     let key = el.split("=");
//     // console.log(key);
//     obj[key[0]] = key[1];
// });

// console.log(obj);

// // let obj = {
// //     page: 2,
// //     q: debate,
// // };
