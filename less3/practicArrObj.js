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
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//     // Ключ
//     console.log(key);
//     // Значення властивості
//     console.log(book[key]);
// }

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

// let total = 0;

// for (const value of values) {
//     total += value
// }

// console.log(total)

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "На березі спокійних вод",
//         author: "Роберт Шеклі",
//         rating: 8.51,
//     },
//     {
//         title: "Сон смішної людини",
//         author: "Федір Достоєвський",
//         rating: 7.75,
//     },
// ];

// for (let book of books) {
//     console.log(book.title)
// }

// =================================================
const friends = [
    { name: 'Mango', online: true },
    { name: 'Bob', online: true },
    { name: 'Marty', online: false },
    { name: 'Rayan', online: true },
];

console.table(friends)
// Шкажмо друга по імені
const flindFriandByName = function (allFriends, friendName) {
    for (const friend of allFriends) {
        // console.log(friend)
        if (friend.name === friendName) {
            return 'Знайшли!!!'
        }
    }
    return 'Не знайшли!!!'
}
// console.log(flindFriandByName(friends, 'Bob'))
// console.log(flindFriandByName(friends, 'Kany'))

// Отримуємо імена всіх друзів
const getAllNames = function (allFriends) {

    const names = [];

    for (const friend of allFriends) {
        // console.log(friend.name)
        names.push(friend.name)
    }

    return names;
}

// console.log(getAllNames(friends))

// Отримуємо значення друзів які онлайн
const getOnlineFriends = function (allFriends) {
    const friendsOnline = [];

    for (const friend of allFriends) {
        console.log(friend)
        console.log(friend.online)

        if (friend.online) {
            friendsOnline.push(friend)
        }
    }
    return friendsOnline;
}

// console.log(getOnlineFriends(friends))

// Отримуємо значення друзів які не онлайн
const getOffLineFriends = function (allFriends) {
    const offLineFriens = [];

    for (const friend of allFriends) {
        console.log(friend.online)
        if (!friend.online) {
            offLineFriens.push(friend)
        }
    }
    return offLineFriens;
}

// console.log(getOffLineFriends(friends))

const getFriehdsByOnlineStutus = function (allFriends) {
    const friendsByStutus = {
        online: [],
        offline: []
    }

    for (const friend of allFriends) {

        if (friend.online) {
            friendsByStutus.online.push(friend)
            continue;
        }
        friendsByStutus.offline.push(friend)
        // const key = friend.online ? 'online' : 'offline';
        // friendsByStutus[key].push(friend);
    }
    return friendsByStutus;
};

// console.log(getFriehdsByOnlineStutus(friends));


// const x = {
//     a: 1,
//     b: 5,
//     c: 34,
//     d: 87
// }

// console.log(Object.keys(x).length)