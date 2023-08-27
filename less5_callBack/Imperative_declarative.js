// Різновиди коду

// Імперативне програмування Можна провести аналогію з рецептом приготування страви.
// Рецепт - це набір покрокових інструкцій для отримання бажаного результату.

// Декларативне програмування
// Можна провести аналогію з меню ресторану. Це декларативний набір страв,
// які можна замовити, подробиці приготування і подачі яких приховані.

// Імперативний vs декларативний
// Розглянемо різницю підходів на прикладі базової операції фільтрації колекції.
// Напишемо код перебирання і фільтрації масиву чисел за певним критерієм.

// Імперативний підхід
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > 3) {
//     filteredNumbers.push(numbers[i]);
//   }
// }

// console.log(filteredNumbers); // [4, 5]

// Метод filter() приховує в собі логіку перебирання колекції і викликає callback-функцію, яку ми йому
// передаємо для кожного елемента, повертаючи масив елементів, що відповідають критерію.

// Декларативний підхід
const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter(value => value > 3);
console.log(filteredNumbers); // [4, 5]