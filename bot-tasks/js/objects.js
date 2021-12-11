// Module 3. Task 11/41
// obj.hasOwnProperty(key)
// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city center';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
//   // Change code above this line
// }

// Module 3. Task 12/41 і 14/41.
// Напиши функцию countProps(object), которая считает и возвращает
// количество собственных свойств объекта в параметре object.
// Используй переменную propCount для хранения количества свойств объекта.
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   propCount = Object.keys(object).length;
//   // Change code above this line
//   return propCount;
// }

// console.log(countProps({})); //0;
// console.log(countProps({ name: 'Mango', age: 2 })); //2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); //3

// Module 3. Task 13/41
// Перебери объект apartment используя метод Object.keys()
// и цикл for...of.Запиши в переменную keys
// массив ключей собственных свойств объекта apartment,
// и добавь в массив values все значения его свойств.
// {
//   const apartment = {
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];
//   // Change code below this line
//   const keys = Object.keys(apartment);
//   for (const key of keys) {
//     values.push(apartment[key]);
//   }
// }

// {
  // Module 3. Task 16/41. (Object.keys()) i for ...of.
  // Напиши функцию countTotalSalary(salaries) которая
  // принимает объект зарплат, где имя свойства это имя сотрудника,
  //  а значение свойства это зарплата.
  // Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её.
  // Используй переменную totalSalary для хранения общей суммы зарплаты.
//   function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     // Change code below this line
//     const keys = Object.keys(salaries);

//     for (const key of keys) {
//       totalSalary += salaries[key];
//     }
//     // Change code above this line
//     return totalSalary;
//   }

//   console.log(countTotalSalary({})); //0
//   console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); //330
//   console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); //400
// }

{
// Перебери массив объектов colors используя цикл for...of.
// Добавь в массив hexColors значения свойств hex,
//     а в массив rgbColors значения свойств rgb из всех
//     объектов массива colors.
  
  const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line
for (const color of colors){
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}

}

{
  // Module 3. Task 18/41.
  // Задача. Поиск объекта по значению свойства
  // Напиши функцию getProductPrice(productName) которая принимает один параметр
  // productName - название продукта.Функция ищет объект продукта с таким именем(свойство name) 
  // в массиве products и возвращает его цену(свойство price).
  // Если продукт с таким названием не найден, функция должна возвращать null.
  
  const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
  for (const product of products) {
    if(product.name === productName) {
      return product.price;
    } 
    
  }
  return null;
  
  // Change code above this line
}

  // console.log(getProductPrice("Radar")); //1300
  // console.log(getProductPrice("Grip")); //1200
  // console.log(getProductPrice("Scanner")); //2700
  // console.log(getProductPrice("Droid")); //400
  // console.log(getProductPrice("Engine")); //null
}

{
  const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
  const arrayOfValues = [];

  for (const product of products) {
    if (propName === Object.keys(product)) {
      arrayOfValues.push(product.name);
      console.log(arrayOfValues)
    }
  }
    // const keys = Object.keys(product);
    // console.log(keys);
    // if (keys.includes(propName)) {
      // console.log(keys[0])
      // arrayOfValues.push(product[name])
    }

    // for (const key of keys) {
    //   console.log(key)
    //   if (key === propName) {
    //     console.log (product[key])
    //     // arrayOfValues.push(product[key]);
    //   }
    // }
    // arrayOfValues.push(product[key]);
  }
  
  
  // Change code above this line

  console.log(getAllPropValues("name")); //["Radar", "Scanner", "Droid", "Grip"]
  // console.log(getAllPropValues("quantity")); //[4, 3, 7, 9]
