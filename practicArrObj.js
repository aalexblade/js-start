// for in==========

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
// };

// for (const key in book) {
//     console.log(key)
//     // console.log(book[key])
// }
// ==============================
// hasOwnProperty()s

// const animal = {
//     legs: 4,
// }

// const dog = Object.create(animal)
// dog.name = "Mango"

// console.log(dog)
// console.log(dog.name)
// console.log(dog.legs)
// for...in, не робить різниці між власними та невласними властивостями об'єкта.
// ❌ Повертає true для всіх властивостей
// console.log("name" in dog); // true
// console.log("legs" in dog); // true

// ✅ Повертає true тільки для власних властивостей
// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false

// Тому, перебираючи циклом for...in, необхідно на кожній ітерації додати перевірку власної
// властивості.Навіть, якщо зараз ми впевнені у тому, що в об'єкті відсутні невласні властивості,
//  це захистить від можливих помилок у майбутньому.

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };

//   for (const key in book) {
//     // Якщо це власна властивість - виконуємо тіло if
//     if (book.hasOwnProperty(key)) {
//       console.log(key);
//       console.log(book[key]);
//     }

//     // Якщо це невласна властивість - нічого не робимо
//   }

// ======================================================
// Метод Object.keys()
// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
//   console.log(keys); // ['title', 'author', 'genres', 'rating']

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);

//   for (const key of keys) {
//     // Ключ
//     console.log(key);
//     // Значення властивості
//     console.log(book[key]);
//   }

// Ми перебираємо масив ключів об'єкта і на кожній ітерації отримуємо значення властивості
// з таким ключем.

// ======================================================
// Метод Object.values()повертає масив ключів власних властивостей об'єкта,
//  то метод Object.values(obj)
// Object.keys(obj)

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// for..of

// const goods = {
//     apples: 6,
//     grapes: 3,
//     bread: 4,
//     cheese: 7,
// };

// const values = Object.values(goods)
// // console.log(values)
// let total = 0
// for (const value of values) {
//     total += value
// }
// console.log(total)

