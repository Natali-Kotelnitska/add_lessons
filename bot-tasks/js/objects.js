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
// 1. варіант (for...in, .hasOwnProperty(obj))
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
//   // Change code above this line
// }
// 2. варіант (Object.keys(obj))
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
  //Task 17/41 Module 3.
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
  for (const color of colors) {
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
      if (product.name === productName) {
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
  // Module 3. Task 19/41.
  // Напиши функцию getAllPropValues(propName) которая принимает
  // один параметр propName - имя(ключ) свойства.
  // Функция должна вернуть массив всех значений свойства
  // с таким именем из каждого объекта в массиве products.
  // Если в объектах нет свойства с таким именем,
  //   функция должна вернуть пустой массив.
  const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
  ];

  // Варіант 1. Object.getOwnproperty(obj)
  function getAllPropValues(propName) {
    // Change code below this line
    //варіант 1.

    const newArray = [];
    for (const product of products) {
      if (product[propName]) {
        newArray.push(product[propName]);
      }
    }
    return newArray;
  }

  // варіант 2.
  // let valueArray = [];
  // for (const product of products) {
  //
  //   const ownProperty = Object.getOwnPropertyNames(product);
  //   // console.log(ownProperty);
  //   if (ownProperty.includes(propName)) {
  //     valueArray.push(product[propName]);
  //   }
  // }
  // return valueArray;

  //* варіант 3. (Object.keys(obj))
  // function getAllPropValues(propName) {
  // Change code below this line
  // const arrayOfValues = [];
  // for (const product of products) {
  // const keys = Object.keys(product);

  //   if (keys.includes(propName)) {
  //     arrayOfValues.push(product[propName]);
  //     // console.log(arrayOfValues);
  //   }
  // }
  // return arrayOfValues;
  // }
}

// Change code above this line

// console.log(getAllPropValues('name')); //["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues('quantity')); //[4, 3, 7, 9]
// console.log(getAllPropValues('price')); //[1300, 2700, 400, 1200]
// console.log(getAllPropValues('category'));

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
  let totalPrice = 0;
  for (const product of products) {
    // console.log(product.price);
    if (product.name === productName) {
      totalPrice = product.price * product.quantity;
    }
  }

  return totalPrice;
  // Пиши код выше этой строки

  // console.log(calculateTotalPrice('Blaster')); //0
  // console.log(calculateTotalPrice('Radar')); //5200
  // console.log(calculateTotalPrice('Droid')); //2800
  // console.log(calculateTotalPrice('Grip')); //10800
  // console.log(calculateTotalPrice('Scanner')); //8100
}

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   result = message.toLowerCase().includes('spam' || 'sale');
//   // Change code above this line
//   return result;
// }

const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }

    this.potions.push(newPotion);
    // return this.potions;
  },
  removePotion(potionName) {
    let potionIndex = -1;
    for (const potion of this.potions) {
      potionIndex += 1;

      if (potion.name === potionName) {
        this.potions.splice(potionIndex, 1);
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    let potionIndex = -1;

    for (const potion of this.potions) {
      potionIndex += 1;

      if (potion.name === oldName) {
        this.potions[potionIndex].name = newName;
        return;
      }
    }
    return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));
// console.log(atTheOldToad.addPotion({ name: 'Power potion', price: 270 }));
// console.log(atTheOldToad.potions);
// console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 })); //"Error! Potion Dragon breath is already in your inventory!"
// console.log(atTheOldToad.removePotion('Dragon breath'));
// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));

//Task 4/48 module 4
const pizzaPalace = {
  pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
  order(pizzaName, onSuccess, onError) {
    onSuccess(pizzaName);
    onError();
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

//Task 13/48 module 4 (не розвязується з перебираючими методами - лише з for)
function changeEven(numbers, value) {
  // Change code below this line
  const evenNumbers = [...numbers];
  console.log(evenNumbers);
  evenNumbers.map(element => {
    if (element % 2 === 0) {
      evenNumbers.push((element += value));
      console.log(element);
    }
  });
  // for (let i = 0; i < evenNumbers.length; i += 1) {
  //   if (evenNumbers[i] % 2 === 0) {
  //     evenNumbers[i] += value;
  //   }

  return evenNumbers;
  // Change code above this line
}

// console.log(changeEven([1, 2, 3, 4, 5], 10)); //[1, 12, 3, 14, 5]

// Task 29/48 Module 4
let users = [
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
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
const getUserWithEmail = (users, email) => {
  const userEmail = users.find(user => user.email === email);
  return userEmail;
};

console.log(getUserWithEmail(users, 'blackburndotson@furnigeer.com'));
