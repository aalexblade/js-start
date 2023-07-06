// Ітерація по масиву ===================

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length - 1; i += 1) {
//   console.log(clients[i]);
// }

// Цикл for...of ===================

// for (const variable of iterable) {
//     // тіло циклу
//   }

// variable — змінна, яка буде зберігати значення елемента на кожній ітерації.
// iterable — колекція, яка містить ітерабельні (що можна порахувати) елементи,
//  наприклад масив.

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(clients);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// Оператори break і continue ====================

// const clients = ["Puma", "Monica", "Ocsford"];
// const clientNameToFind = 'Monica'
// let message;

// for (const client of clients) {

//     if (client === clientNameToFind) {
//         message = "Клієнт з таким ім'ям є в базі даних!";
//    break;
//     }
//     message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }

// console.log(message)


// const clients = ["Puma", "Monica", "Ocsford"];
// const clientNameToFind = "Puma"
// let message = "Клієнт з таким ім'ям відсутній в базі даних!";

// for (const client of clients) {
//     if (client === clientNameToFind) {
//         message = "Клієнт з таким ім'ям є в базі даних!";
//         break;
//     }
// }

// console.log(message);

// Використовуємо цикл для виведення тільки чисел, більших за певне значення.

// const numbers = [1, 2, 4, 5, 56, 16, 7, 6, 32]
// const threshold = 15

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] < threshold) {
//         continue;
//     }
//     console.log(`Число більше за ${threshold}: ${numbers[i]}`)
// }


// let users = ["alex", "vova", "jony", "marly"]

// users[0]
// users[1]
// users[3]

// const len = users.length;

// for (let i = 0; i < len; i++) {
//     // console.log(i)
//     // console.log(users[i])

//     let userToUpperCase = users[i][0].toUpperCase() + users[i].slice(1);

//     console.log(`index user:${i} user name: ${userToUpperCase}`)

// }


// for - of =================================

// let nums = [10, 30, 40, 50]

// // for (let num of nums) {
// //     console.log(num + 2)
// // }

// nums.forEach((num) => {
//     console.log(num)
// })

// for in only Object======================
// let users = ["alex", "vova", "jony", "marly"]

// // users[0]
// // users[1]
// // users[3]

// for (let idx in users) {
//     console.log(users[idx])
// }


