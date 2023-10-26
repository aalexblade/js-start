// Властивість innerHTML

// Читання

// Властивість innerHTML зберігає вміст елемента, включно з тегами,
// у вигляді рядка.Значення, що повертається, - це завжди валідний
// HTML - код.

// const article = document.querySelector(".article");
// console.log(article.innerHTML);

// const title = document.querySelector(".article .title");
// console.log(title.innerHTML);

// const text = document.querySelector(".article .text");
// console.log(text.innerHTML);

// const link = document.querySelector(".article .link");
// console.log(link.innerHTML);

// ==========================================
// Зміна

// Властивість innerHTML доступна і для читання, і для запису.
// Якщо записати в неї рядок з HTML - тегами, то браузер під час
// парсингу рядка перетворить їх у валідні елементи і додасть в
// DOM - дерево.

// const title = document.querySelector('.article .title')
// title.innerHTML = 'New and <span class="accent">Improved</span> title'

// ЦІКАВО
// Якщо у властивість innerHTML записати порожній рядок, то вміст елемента
// буде очищено.Це простий і швидкий спосіб видалення всього вмісту.

// За такого підходу, на відміну від document.createElement(),
// ми не отримуємо посилання на створений DOM - елемент.
// Це перший крок на шляху до шаблонізації - створення
// великої кількості однотипної розмітки з різними даними
// за наперед визначеним шаблоном.Наприклад, як у списку
// товарів інтернет магазину тощо.

// Однотипна(шаблонна) розмітка створюється із масиву даних.
// Прийом полягає у перебиранні цього масиву і складанні одного
// рядка з HTML - тегами, який потім записуємо в innerHTML елемента.

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];

// const list = document.querySelector('.list')

// const markup = technologies
//     .map((technology) => `<li class='list-item'>${technologies}</li>`)
//     .join('')
// console.log(markup)

// list.innerHTML = markup

// ============================================
// Додавання

// Зміна elem.innerHTML повністю видалить і повторно створить всі
// нащадки елемента elem.Якщо елемент спочатку не був порожній, то
// виникнуть додаткові витрати на серіалізацію вже існуючої розмітки,
// а це погано.

// const article = document.querySelector(".article");
// const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
//    <a class="link" href="#">Read more...</a>`;

// // Replace += with = operator. See the difference?
// // Article title is lost because we overwrite element content.
// article.innerHTML += htmlString;

// Використовуйте властивість elem.innerHTML для додавання тільки тоді,
// коли елемент elem - порожній, або якщо потрібно повністю замінити
// його вміст.

// ==============================================
// Метод insertAdjacentHTML()

// Сучасний метод для додавання рядка з HTML - тегами перед, після або
// всередину елемента.Вирішує проблему innerHTML з повторною серіалізацією
// вмісту елемента під час додавання розмітки до вже існуючої.

//     elem.insertAdjacentHTML(position, string);

// Аргумент position - це рядок, позиція щодо елемента elem.Приймає одне
// з чотирьох значень.

// Аргумент position - це рядок, позиція щодо елемента elem.Приймає одне з чотирьох значень.

// "beforebegin" - перед elem
// "afterbegin" - всередині elem, перед усіма дітьми
// "beforeend" - всередині elem, після усіх дітей
// "afterend" - після elem

const list = document.querySelector(".list");

const newTechnologies = ["React", "TypeScript", "Node.js"];
const markup = newTechnologies
    .map((technology) => `<li class="list-item new">${technology}</li>`)
    .join("");

list.insertAdjacentHTML("beforeend", markup);
list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");

// "beforebegin" і "afterend" працюють тільки тоді, коли elem вже знаходиться в DOM - дереві.