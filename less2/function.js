//1. Function declaration

// function seyHi() {
//     console.log('Hello')
// }
// seyHi()

// =======================================
// 2. Function expression

// const seyHi = function () {
//     console.log('Hello')
// }
// seyHi()

// ======================================
// 3. Arrow functions
// const seyHi = () => {
//     console.log('Hello!')
// }
// seyHi()

// =========================================
// 4. IEFF функція миттєвого виклику
// ()()
// (function () {
//     console.log("Hello!")
// })()

// (() => {
//     console.log("Hello!")
// })()

// ========================================
// 5. CLB
// function seyHi(seyBy) {

// }
// function seyBy() {
//     coneole.log("Bob")
// }

// ========================================
// 6. Aninumus

// ["Alex", "Bob", "Mike"].forEach((item) => {
//     console.log(item)
// })

// =======================================
// Parameters and Agruments

// function seyHi(userName) { //params
//     console.log(`Hello ${userName}`)
// }
// seyHi('Bon') // arguments
// seyHi('Jan')

// const getSum = function (a, b, c) {
//     console.log(a + b + c)
// }
// getSum(1, 3, 5)
// getSum(21, 13, 5)
// //=================================================
// Default params

// const seyHi = function (userName = 'Linsi') { //params
//     console.log(`Hello ${userName}`)
// }
// seyHi();
// seyHi();
// seyHi("Bob");
// seyHi("Mike");

// ====================================
// 4. IEFF with params
// (function (userName) {
//     console.log("Hello" + " " + userName);
// })("Alex");

// Параметри та аргументи ====================

// // 1. Оголошення параметрів x, y, z
// function multiply(x, y, z) {
// ----тіло function {}
//     console.log(`Результат множення дорівнює ${x * y * z}`);
//   }

//   // 2. Передача аргументів
//   multiply(2, 3, 5); // Результат множення дорівнює 30
//   multiply(4, 8, 12); // Результат множення дорівнює 384
//   multiply(17, 6, 25); // Результат множення дорівнює 2550

// Повернення значення return===================

// function multiply(x, y, z) {
//     console.log("Код до return виконується звичайним чином");

//     // Повертаємо результат виразу множення
//     return x * y * z;

//     console.log("Цей лог ніколи не виконається, він стоїть після return");
//   }

//   // Результат роботи функції можна зберегти у змінну
//   let result = multiply(2, 3, 5);
//   console.log(result); // 30

//   result = multiply(4, 8, 12);
//   console.log(result); // 384

//   result = multiply(17, 6, 25);
//   console.log(result); // 2550

// Порядок виконання коду=====================
// function multiply(x, y, z) {
//     console.log(`Результат множення дорівнює ${x * y * z}`);
// }

// console.log("Лог до виклику функції multiply");
// multiply(2, 3, 5); // Результат множення дорівнює 30
// console.log("Лог після виклику функції multiply");

// Послідовність логів в консолі
// "Лог до виклику функції multiply"
// "Результат множення дорівнює 30"
// "Лог після виклику функції multiply"

//   Параметри за замовчуванням ========================

// function count(countFrom = 0, countTo = 10, step = 1) {
//     console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//     for (let i = countFrom; i <= countTo; i += step) {
//         console.log(i);
//     }
// }

// count(1, 5); // countFrom = 1, countTo = 5, step = 1
// count(2); // countFrom = 2, countTo = 10, step = 1
// count(); // countFrom = 0, countTo = 10, step = 1

// Псевдомасив arguments==============================

// function multiply() {
//     let total = 1;

//     for (const argument of arguments) {
//         total *= argument;
//     }

//     return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120)

// Перетворення псевдомасиву============================
// Зазвичай псевдомасив необхідно перетворити у повноцінний масив,
// оскільки у псевдомасиву відсутні методи масиву, наприклад slice() або includes().
// На практиці застосовують декілька основних способів.

// Використовуючи метод Array.from(), який створить масив із псевдомасиву.

// function fn() {
//     // Змінна args буде містити повноцінний масив
//     const args = Array.from(arguments);
// }

// //   Використовуючи операцію ... (rest), вона дозволяє зібрати будь-яку кількість елементів,
// //   у нашому випадку аргументів, в масив, і зберегти його в змінну.
// //   Збираємо всі аргументи, використовуючи операцію rest безпосередньо в підписі функції.

// function fn(...args) {
//     // Змінна args буде містити повноцінний масив
// }

// console.log(args)

// Патерн «Раннє повернення»========================
// Створимо функцію, яка обробляє зняття коштів з особистого рахунку в банку.
// Вона отримує суму для зняття і поточний баланс рахунку, після чого, залежно від умови,
// виконує необхідний блок коду.

// function withdraw(amount, balance) {
//     if (amount === 0) {
//       console.log("Для проведення операції введіть суму більшу за нуль");
//     } else if (amount > balance) {
//       console.log("Недостатньо коштів на рахунку");
//     } else {
//       console.log("Операція зняття коштів проведена успішно");
//     }
//   }

//   withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
//   withdraw(500, 300); // "Недостатньо коштів на рахунку"
//   withdraw(100, 300); // "Операція зняття коштів проведена успішно"

// Патерн «Раннє повернення»==================================
// Патерн «Раннє повернення» - це спосіб використовувати можливість дострокового повернення з функції
// за допомогою оператора return.Використовуючи цей прийом, ми отримуємо чистіший, плоскіший і
// зрозуміліший код, який простіше рефакторити.

// function withdraw(amount, balance) {
//     // Якщо умова виконується, викликається console.log
//     // і вихід із функції. Код після тіла if не виконається.
//     if (amount === 0) {
//         console.log("Для проведення операції введіть суму більшу за нуль");
//         return;
//     }

//     // Якщо умова першого if не виконалась, його тіло пропускається
//     // та інтерпретатор доходе до другого if.
//     // Якщо умова виконується, викликається console.log і вихід із функції.
//     // Код, що знаходиться після тіла if, не виконається.
//     if (amount > balance) {
//         console.log("Недостатньо коштів на рахунку");
//         return;
//     }

//     // Якщо жоден із попередніх if не виконався,
//     // інтерпретатор доходить до цього коду і виконує його.
//     console.log("Операція зняття коштів проведена");
// }

// withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
// withdraw(500, 300); // "Недостатньо коштів на рахунку"
// withdraw(100, 300); // "Операція зняття коштів проведена"

// Функціональний вираз===================================
// Функціональний вираз (function expression) - звичайне оголошення змінної, значенням
// якої буде функція. Альтернативний спосіб оголошення функції.

// // Оголошення функції (function declaration)
// function multiply(x, y, z) {
//     console.log(`Результат множення дорівнює ${x * y * z}`);
// }

// // Функціональний вираз (function expression)
// const multiply = function (x, y, z) {
//     console.log(`Результат множення дорівнює ${x * y * z}`);
// };

// // ❌ Помилка! Не працює виклик до оголошення
// multiply(1, 2, 3);

// const multiply = function (x, y, z) {
//     console.log(`Результат множення дорівнює ${x * y * z}`);
// };

// // ✅ Працює виклик після оголошення
// multiply(4, 5, 6);

// A оголошення функції можна викликати до місця її створення в коді.

// ✅ Працює виклик до оголошення
// multiply(1, 2, 3);

// function multiply(x, y, z) {
//     console.log(`Результат множення дорівнює ${x * y * z}`);
// }

// // ✅ Працює виклик після оголошення
// multiply(4, 5, 6);