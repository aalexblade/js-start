// import { save, load } from './storage';


// Локальне сховище

// Дозволяє зберігати дані без закінчення терміну дії у форматі пар ключ:значення
// на комп'ютері користувача і читати їх при повторному відвідуванні сторінки.
// Локальне сховище і сховище сесії - це частина браузера, тому вони доступні
// як властивості об'єкта window, мають однаковий набір властивостей і методів,
// і відрізняються тільки поведінкою.

// setItem(key, value) - створює новий, або оновлює вже існуючий запис у сховищі.
// getItem(key) - повертає зі сховища значення з ключем key.
// removeItem(key) - видаляє зі сховища запис з ключем key.
// clear() - повністю очищає всі записи сховища.
// length - кількість записів у сховищі.

// ==============================================================
// Збереження
// Використовуючи метод setItem(key, value), можна додати
// новий запис у вигляді пари ключ: значення.

// localStorage.setItem('ui-them', 'light')
// localStorage.setItem('sidebar', 'explanded')
// localStorage.setItem('notification', 'mute')

// JSON.stringify().
// Якщо необхідно зберегти щось, крім рядка, наприклад, масив або об'єкт,
// необхідно перетворити їх у рядок методом JSON.stringify().

// const settings = {
//     them: 'dark',
//     isAuntenticated: 'true',
//     options: [1, 2, 3]
// }

// localStorage.setItem('settings', JSON.stringify(settings))

// ====================================================
// Читання getItem(key)

// Метод getItem(key) дозволяє прочитати зі сховища запис з ключем key.Якщо
// у сховищі відсутній запис з таким ключем, метод повертає null.
// Якщо значення - це звичайний рядок, немає потреби його парсити.

// localStorage.setItem("ui-theme", "dark");

// const theme = localStorage.getItem("ui-theme");
// console.log(theme);// "dark")

// В іншому випадку, необхідно розпарсити значення методом
// JSON.parse(), щоб отримати валідні дані.

// const settings = {
//     theme: "dark",
//     isAuthenticated: true,
//     options: [1, 2, 3],
// };

// localStorage.setItem("settings", JSON.stringify(settings));

// const savedSettings = localStorage.getItem("settings");
// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings);// settings object

// // ==========================================================
// Видалення
// Метод removeItem(key) видаляє зі сховища вже існуючий запис з ключем key.

// localStorage.setItem("ui-theme", "dark");
// console.log(localStorage.getItem("ui-theme"));// "dark"

// localStorage.removeItem("ui-theme");
// console.log(localStorage.getItem("ui-theme"));// null

// ===================================================================
// Очищення сховища
// clear()

// localStorage.setItem("ui-theme", "light");
// localStorage.setItem("sidebar", "expanded");
// localStorage.setItem("notification-level", "mute");
// console.log(localStorage.getItem("ui-theme"));// "light"
// console.log(localStorage.getItem("sidebar"));// "expanded"
// console.log(localStorage.getItem("notification-level"));// "mute"

// localStorage.clear();
// console.log(localStorage.getItem("ui-theme"));// null
// console.log(localStorage.getItem("sidebar"));// null
// console.log(localStorage.getItem("notification-level"));// null

// =================================================================
// Зберігаємо повідомлення
// Створимо форму для введення повідомлення і будемо зберігати його в
// localStorage по сабміту.Змінюйте значення текстового поля і натискайте
// кнопку «Save». Текст в полі виведення зміниться на введений.Перезавантажте
// сторінку, і ви побачите той самий текст, хоча нічого ще не вводили.При
// завантаженні сторінки ми беремо з localStorage останнє збережене значення.
// Спочатку такий запис у сховищі відсутній, тому буде виведений порожній рядок.

const form = document.querySelector(".feedback-form");
const localStorageKey = "goit-example-message";

form.elements.message.value = localStorage.getItem(localStorageKey) ?? "";

form.addEventListener("input", (evt) => {
    localStorage.setItem(localStorageKey, evt.target.value);
});

form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    localStorage.removeItem(localStorageKey);
    form.reset();
});