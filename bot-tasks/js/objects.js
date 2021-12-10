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
{
  const apartment = {
    descr: 'Spacious apartment in the city center',
    rating: 4,
    price: 2153,
  };
  const values = [];
  // Change code below this line
  const keys = Object.keys(apartment);
  for (const key of keys) {
    values.push(apartment[key]);
  }
}

// Module 3. Task 16/41. (Object.keys()) i for ...of.
// Напиши функцию countTotalSalary(salaries) которая
// принимает объект зарплат, где имя свойства это имя сотрудника,
//  а значение свойства это зарплата.
// Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её.
// Используй переменную totalSalary для хранения общей суммы зарплаты.
function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
  const keys = Object.keys(salaries);

  for (const key of keys) {
    totalSalary += salaries[key];
  }
  // Change code above this line
  return totalSalary;
}

console.log(countTotalSalary({})); //0
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); //330
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); //400
