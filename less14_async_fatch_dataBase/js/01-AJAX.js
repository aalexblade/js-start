// AJAX

// AJAX(Asynchronous JavaScript and XML) - метод отримання або відправлення
// даних з подальшим оновленням інтерфейсу за цими даними, без потреби
// перезавантаження сторінки.Завдяки цьому зменшується час відгуку і веб
// - сторінка стає інтерактивнішою.Цей процес можна розібрати на прикладі
// завантаження даних.

// Fetch API
// Інтерфейс, вбудований в браузер, доступний на об'єкті window, який містить
// набір властивостей і методів для відправлення, отримання та обробки ресурсів
// від сервера.Метод fetch() надає сучасний інтерфейс для формування запитів до
// сервера і побудований на промісах.

// fetch(url, options)
// url - шлях до даних на бекенді, які необхідно отримати, створити або змінити.
//     Обов'язковий аргумент.
// options - об'єкт налаштувань запиту: метод (за замовчуванням GET),
//      заголовки, тіло тощо.Необов'язковий аргумент.

// Будемо робити запити до JSONPlaceholder API - публічного REST API для
// швидкого прототипування, який надає колекцію несправжніх користувачів в
// ресурсі / users.

// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then(json => console.log(json))


// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => {
//         // Response handling
//     })
//     .then(data => {
//         // Data handling
//     })
//     .catch(error => {
//         // Error handling
//     });


// Перевірка відповіді

// Значення промісу, який повертає метод fetch(), - це об'єкт зі службовою інформацією
// про стан відповіді сервера.Екземпляр класу Response містить різні методи і властивості.
// Залежно від типу отримуваного контенту, використовуються різні методи для перетворення
// тіла відповіді у дані.

// json() - парсить дані в JSON - форматі.
// text() - парсить дані в простому текстовому форматі, наприклад.csv(табличні дані).
// blob() - парсить дані, що описують файл, наприклад, зображення, аудіо або відео.
// У першому методі then() виконується перевірка статусу відповіді і перетворення даних у
// правильний формат, або явне створення помилки, щоб обробити невдалий HTTP - запит
// в блоці catch ().

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(response.status);
//         }
//         return response.json();
//     })
//     .then(data => {
//         // Data handling
//     })
//     .catch(error => {
//         // Error handling
//     });

// Це необхідно для того, щоб fetch() правильно зреагував на статус код 404,
// який, технічно, не є помилкою, але для клієнта - це неуспішний результат.

// Робота з публічним REST API
// Кожен бекенд унікальний, їх тисячі.З іншого боку REST API побудовані за
// стандартною архітектурою.Це означає, що можна зрозуміти принцип їх роботи,
// після чого, все що потрібно зробити - це ознайомитися з документацією того
// бекенду, який необхідно використовувати.

// Продовжимо працювати з JSONPlaceholder API.З документації беремо URL
// ресурсу для запиту інформації про колекції несправжніх користувачів.

// https://jsonplaceholder.typicode.com/users
// Цей шлях складається з наступних частин:

// https://jsonplaceholder.typicode.com - це ендпоінт, базовий URL, точка входу в API.
// /users - ресурс, до якого ми звертаємося.

// По кліку на кнопку «Fetch users» зробимо GET - запит і виведемо список
// користувачів за отриманими даними.

// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");

// fetchUsersBtn.addEventListener("click", (event) => {
//     event.preventDefault();
//     fetchUsers()
//         .then((users) => renderUsers(users))
//         .catch((error) => console.log(error));
// });

// function fetchUsers() {
//     return fetch("https://jsonplaceholder.typicode.com/users")
//         .then(
//             (response) => {
//                 if (!response.ok) {
//                     throw new Error(response.status);
//                 }
//                 return response.json();
//             }
//         );
// }

// function renderUsers(users) {
//     const markup = users
//         .map((user) => {
//             return `<li>
//           <p><b>Name</b>: ${user.name}</p>
//           <p><b>Email</b>: ${user.email}</p>
//           <p><b>Company</b>: ${user.company.name}</p>
//         </li>`;
//         })
//         .join("");
//     userList.insertAdjacentHTML("beforeend", markup);
// }



// Параметри рядка запиту
// Параметри запиту дозволяють вказати бекенду додаткові критерії.Наприклад,
// скільки елементів колекції ми хочемо отримати в запиті, можливо, необхідно
// додати сортування за якоюсь властивістю об'єкта, обмежити вибірку тощо. Список
// параметрів запиту, їх назви і можливі значення залежать від бекенду і описані в
// документації.

// Символ ? вказує на старт параметрів запиту.Кожен параметр - це пара ім'я=значення.
// Символ & використовується для зазначення смислового «І», розділяючи параметри в рядку запиту.

// const url = "https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name";

// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");

// fetchUsersBtn.addEventListener("click", () => {
//     fetchUsers()
//         .then((users) => renderUsers(users))
//         .catch((error) => console.log(error));
// });

// function fetchUsers() {
//     return fetch(
//         "https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name"
//     ).then((response) => {
//         if (!response.ok) {
//             throw new Error(response.status);
//         }
//         return response.json();
//     });
// }

// function renderUsers(users) {
//     const markup = users
//         .map((user) => {
//             console.log(user)
//             return `
//           <li>
//             <p><b>Id</b>: ${user.id}</p>
//             <p><b>Name</b>: ${user.name}</p>
//             <p><b>Email</b>: ${user.email}</p>
//             <p><b>Company</b>: ${user.company.name}</p>
//           </li>
//       `;
//         })
//         .join("");
//     userList.insertAdjacentHTML("beforeend", markup);
// }


// Клас URLSearchParams
// Параметрів може бути багато, і незручно складати з них один
// довгий рядок як для читабельності, так і для його подальшого
// редагування.Під час складання рядків параметрів, створюється
// екземпляр класу URLSearchParams та ініціалізується об'єктом.
// Результатом буде спеціальний об'єкт(ітератор) з методами, який
// у рядковому перетворенні повертає результат виклику методу toString() - своє
// рядкове відображення.

// const searchParams = new URLSearchParams({
//     _limit: 5,
//     _sort: "name",
// });

// console.log(searchParams.toString()); // "_limit=5&_sort=name"

// const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
// console.log(url); // "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name"


// HTTP - заголовки

// Клас Headers дозволяє виконувати різні дії в заголовках HTTP - запиту і
// відповіді.До цих дій належать діставання, налаштування, додавання і видалення заголовків.

const headers = new Headers({
    "Content-Type": "application/json",
    "X-Custom-Header": "custom value",
});

headers.append("Content-Type", "text/bash");
headers.append("X-Custom-Header", "custom value");
headers.has("Content-Type"); // true
headers.get("Content-Type"); // "text/bash"
headers.set("Content-Type", "application/json");
headers.delete("X-Custom-Header");

console.log(headers)

// Запит з використанням заголовків буде виглядати наступним чином.
fetch("https://jsonplaceholder.typicode.com/users", {
    headers: {
        Accept: "application/json",
    },
}).then(response => {
    // ...
});