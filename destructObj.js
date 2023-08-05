// Деструктуризація об'єктів

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
// };

// const accessType = book.isPublic ? "публічному" : "закритому";
// console.log(accessType)
// const message = `Книга ${book.title} автора ${book.author} з рейтингом ${book.rating} знаходиться в ${accessType} доступі.`;
// console.log(message)

// Деструктуризація дозволяє «розпакувати» значення властивостей об'єкта у локальні змінні.
// Це робить код в місці їх використання менш «шумним».

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: false,
//     rating: 8.38,
// };

// // Деструктуризуємо
// const { title, author, isPublic, rating, coverImage } = book;
// console.log(coverImage); // undefined

// const accessType = isPublic ? "публічному" : "закритому";
// const message = `Книга ${title}, автора ${author}, з рейтингом ${rating}, знаходиться в ${accessType}, доступі.`;
// console.log(message)

// ==================================================
// Значення за замовчуванням

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//   };

//   // Додамо зображення обкладинки, якщо воно відсутнє в об'єкті книги
//   const {
//     title,
//     coverImage = "https://via.placeholder.com/640/480",
//     author,
//   } = book;

//   console.log(title); // The Last Kingdom
//   console.log(author); // Bernard Cornwell
//   console.log(coverImage); // https://via.placeholder.com/640/480

//   =====================================================
// Зміна імені змінної

// const firstBook = {
//     title: "The Last Kingdom",
//     coverImage:
//         "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };

// const {
//     title: firstTitle,
//     coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
// } = firstBook;

// console.log(firstTitle); // The Last Kingdom
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

// const secondBook = {
//     title: "Сон смішної людини",
// };

// const {
//     title: secondTitle,
//     coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
// } = secondBook;

// console.log(secondTitle); // Сон смішної людини
// console.log(secondCoverImage); // https://via.placeholder.com/640/480

// Такий запис читається як «Створити змінну firstTitle, в яку помістити
// значення властивості title з об'єкта firstBook» тощо.

// ================================================================
// Деструктуризація в циклах
// Перебираючи масив об'єктів циклом for...of, утворюються багаторазові
// звернення до властивостей об'єкта.

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
// ];

// for (const book of books) {
//     console.log(book.title);
//     console.log(book.author);
//     console.log(book.rating);
// }

// Для того, щоб скоротити кількість повторень, можна деструктуризувати властивості
// об'єкта у локальні змінні в тілі циклу.

// for (const book of books) {
//     const { title, author, rating } = book;
//     console.log(title);
//     console.log(author);
//     console.log(rating);
// }

// Якщо в об'єкті небагато властивостей, можна виконати деструктуризацію безпосередньо
// у місці оголошення змінної book.

// for (const { title, author, rating } of books) {
//     console.log(title)
//     console.log(author)
//     console.log(rating)
// }

// =====================================================
// Глибока деструктуризація

// Для деструктуризації властивостей вкладених об'єктів використовуються ті самі
// принципи, що й в трьох попередніх вправах.

// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// const {
//     name,
//     tag,
//     stats: { followers, views: userViews = 777, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// ===================================================
// const rgb = [255, 100, 80];
// const [red, green, blue] = rgb
// console.log(red, green, blue)

// ===================================================
// const authors = {
//     kiwi: 7,
//     poly: 9,
//     ajax: 4,
//     mango: 8
// };

// const entries = Object.entries(authors)

// for (const [name, rating] of entries) {
//     // const [name, rating] = entry

//     // const name = entry[0]
//     // const rating = entry[1]

//     console.log(name, rating)

// }

// =====================================================
// object params

const showProfileInfo = function (userProfile) {
    const {
        name,
        tag,
        location,
        avatar,
        ...restProps
    } = userProfile;
    // console.log(name, tag, location, avatar, followers, views, likes)
    console.log(restProps)
};

const profile = {
    name: "Jacques Gluke",
    tag: "jgluke",
    location: "Ocho Rios, Jamaica",
    avatar: "https://via.placeholder.com/640/480",
    stats: {
        followers: 5603,
        views: 4827,
        likes: 1308,
    },
};

showProfileInfo(profile)