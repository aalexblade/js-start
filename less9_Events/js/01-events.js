// Події
// Метод addEventListener()
// Додає слухача події на елемент.

//     element.addEventListener(event, handler, options);

// - event - ім'я події, рядок, наприклад "click".
// - handler - колбек - функція, яка буде викликана під час настання події.
// - options - необов'язковий об'єкт параметрів з розширеними налаштуваннями.

// const button = document.querySelector(".my-button");

// const handleClick = () => {
//     console.log('Button was click')
// }

// button.addEventListener('click', handleClick)

// ==========================================
// На одному елементі може бути будь - яка кількість обробників подій, навіть
// подій одного типу.Колбек - функції будуть викликатися у порядку їх реєстрації
// в коді.

// const singleBtn = document.querySelector("#single");

// const handleClick = () => {
//     console.log("click event listener callback");
// };

// singleBtn.addEventListener("click", handleClick);

// ===============================================
// const multiBtn = document.querySelector("#multiple");

// const firstCallback = () => {
//     console.log("First callback!");
// };
// const secondCallback = () => {
//     console.log("Second callback!");
// };
// const thirdCallback = () => {
//     console.log("Third callback!");
// };

// multiBtn.addEventListener("click", firstCallback);
// multiBtn.addEventListener("click", secondCallback);
// multiBtn.addEventListener("click", thirdCallback);

// ===============================================
// Метод removeEventListener()

// Видаляє слухача події з елемента.Аргументи аналогічні методу addEventListener().

//     element.removeEventListener(event, handler, options);

// Для видалення потрібно передати посилання саме на ту колбек - функцію, яка
// була призначена в addEventListener().У такому разі, для колбеків
// використовують окрему функцію і передають її за ім'ям (посиланням).

// const addListenerBtn = document.querySelector('.js-add');
// const removeListenerBtn = document.querySelector('.js-remove');
// const btn = document.querySelector(".target-btn");

// const handleClick = () => {
//     console.log("click event listener callback");
// };

// addListenerBtn.addEventListener("click", () => {
//     btn.addEventListener("click", handleClick);
//     console.log("click event listener was added to btn");
// });

// removeListenerBtn.addEventListener('click', () => {
//     btn.removeEventListener('click', handleClick)
//     console.log("click event listener was removed from btn")
// })

// ==========================================
// Ключове слово this

// Якщо колбеком буде функція, яка використовує this, за замовчуванням контекст
// всередині неї буде посилатися на DOM - елемент, на якому висить слухач.

// const mango = {
//     username: "Mango",
//     showUsername() {
//         console.log(this);
//         console.log(`My username is: ${this.username}`);
//     },
// };

// const btn = document.querySelector(".js-btn");

// // ✅ Працює
// mango.showUsername();

// // ❌ this буде посилатися на button, якщо використовувати showUsername як callback
// btn.addEventListener("click", mango.showUsername); // не працює

// // ✅ Не забувайте прив'язувати контекст методів об'єкта
// btn.addEventListener("click", mango.showUsername.bind(mango));