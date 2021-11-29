// TASK 1:
// Як видалити дублікати із масива ? Унікальні покупці.
//     Створити унікальний масив.

const array = ['Anna', 'Eva', 'Liza', 'Eva'];
// 1-й варіант (Set)
// const uniqArray = new Set(array);
// 2-й варіант (Array.from, Set)
// const uniqArray = Array.from(new Set(array));
// 3-й варіант (.filter)
// const uniqArray = array.filter((item, index) =>index === array.indexOf(item));
//  4-й варіант(.reduce)
// const uniqArray = array.reduce((uniq, item) => {
//     return uniq.includes(item) ? uniq : [...uniq, item]
// }, [])
  
//  console.table(uniqArray);

const numbers = [1, 2, 3, 4, 5, 8, 9, 10, 12, 15, 25, 30, 100];
function isBigEnought(value) {
    return value >= 10;
}
const num = numbers.filter(isBigEnought);
console.log(num);
