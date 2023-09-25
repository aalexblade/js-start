// Напиши функцію uniqueSortedFriends(users) таким чином, щоб вона повертала масив
// друзів всіх користувачів(властивість friends).У декількох користувачів
// можуть бути однакові друзі, зроби так, щоб масив, що повертається, не
// містив повторень.


// const users = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//         age: 37
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//         age: 34
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//         age: 24
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//         age: 21
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//         age: 27
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//         age: 38
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//         age: 39
//     }
// ]
// // ======================================
// const allFriends = users.flatMap(user => user.friends)
// console.log(allFriends);

// const uniqueFriends = allFriends.filter(
//     (friend, index, array) => array.indexOf(friend) === index
// );
// console.log(uniqueFriends)
// // ======================================
// const uniqueSortedFriends = users
//     .flatMap(user => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index)

// console.log(uniqueSortedFriends)

// ===========================================
// Використовуючи метод every(), перевіряємо масив на парнічті і не парність!

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const eachElementInFirstIsEven = firstArray.every(arr => arr % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(arr => arr % !2 === 0);

// const eachElementInSecondIsEven = secondArray.every(arr => arr.secondArray) % !2 === 0;
// const eachElementInSecondIsOdd = secondArray.every(arr => arr.secondArray) % 2 === 0;

// const eachElementInThirdIsEven = thirdArray.every(arr => arr.thirdArray) % 2 === 0;
// const eachElementInThirdIsOdd = thirdArray.every(arr => arr.thirdArray) % !2 === 0;

// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);

// console.log(eachElementInSecondIsEven);
// console.log(eachElementInSecondIsOdd);

// console.log(eachElementInThirdIsEven);
// console.log(eachElementInThirdIsOdd);

// ===============================================
// reduce()

// Ігровому сервісу необхідний функціонал підрахунку середнього часу, проведеного в іграх.
// Доповни код таким чином, щоб у змінній totalPlayTime вийшло загальний ігровий час з
// масиву playtimes.

// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// console.log(playtimes)

// const totalPlayTime = playtimes.reduce((total, players) => {
//     return total + players
// }, 0);
// console.log(totalPlayTime) //[2692]

// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(averagePlayTime) //[673]

// ====================================================
// Загальний час одного гравця

// проведений в одній грі для кожного гравця, і отримати загальну суму цих
// значень часу.Розрахувати час для кожного з гравців можна, розділивши його
// час(властивість playtime) на кількість ігор(властивість gamesPlayed

// const players = [
//     { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playtime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];


// const totalAveragePlaytimePerGame = players.reduce((total, { playtime, gamesPlayed }) => {
//     return total + playtime / gamesPlayed
// }, 0);

// console.log(totalAveragePlaytimePerGame);

// ==================================================
// напиши функцію, щоб вона рахувала і
// повертала загальну кількість друзів(властивість friends) усіх користувачів з
// масиву users.

// const users = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//         age: 37
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//         age: 34
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//         age: 24
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//         age: 21
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//         age: 27
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//         age: 38
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//         age: 39
//     }
// ];

// const allFriends = users.reduce((totalFriands, user) => {
//     totalFriands.push(...user.friends)

//     return totalFriands
// }, [])
// console.log(allFriends);


// const getTotalFriendCount = users => {

//     users.reduce((allFriends, user) => {
//         allFriends.push(...user.friends)

//         return allFriends
//     }, []);
// }


// повертаємо тільки length друзів
// const getTotalFriendCount = users => {
//     const tags = users.reduce((allTags, user) => {
//         allTags.push(...user.friends);
//         return allTags;
//     }, []);
//     return tags.length;
// };

// const getTotalFriendCount = users =>
//     users.reduce((total, value) => total + value.friends.length, 0);

// console.log(getTotalFriendCount(users))

// =====================================================
// sort()

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const sortedByAuthorName = [...books].sort(
//     (firstAuthor, seondAuthor) =>
//         firstAuthor.author.localeCompare(seondAuthor.author)
// );

// const sortedByReversedAuthorName = [...books].sort(
//     (firstAuthor, seondAuthor) =>
//         seondAuthor.author.localeCompare(firstAuthor.author)
// );

// const sortedByAscendingRating = [...books].sort(
//     (firstRating, secondRating) => firstRating.rating - secondRating.rating
// );

// const sortedByDescentingRating = [...books].sort(
//     (firstRating, secondRating) => secondRating.rating - firstRating.rating
// )

// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);


// const users = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male"
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female"
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male"
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female"
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male"
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male"
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female"
//     }
// ]

// const sortedByDescentingRating = [...users].sort(
//     (firstRating, secondRating) =>
//         secondRating.friends.length - firstRating.friends.length
// )


// console.log(sortedByDescentingRating)

// ============================================
// chaining

// Доповни код таким чином, щоб у змінній names вийшов масив імен
// авторів в алфавітному порядку, рейтинг книг яких більший за
// значення змінної MIN_BOOK_RATING.

// .filtre() - фільтруємо масив за рейтенгом
// .sort() - сортуємо новий в масив імен авторів в алфавітному порядку
// .map() - витягуємо з масива імена


// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     {
//         title: "The Dreams in the Witch House",
//         author: "Howard Lovecraft",
//         rating: 8.67,
//     },
// ];
// const MIN_BOOK_RATING = 8;

// const names = [...books]
//     .filter(book => book.rating >= MIN_BOOK_RATING)
//     .sort((a, b) => a.author.localeCompare(b.author))
//     .map(book => book.author)

// console.log(names)