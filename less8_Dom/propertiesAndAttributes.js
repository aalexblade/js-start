// Властивості та атрибути
// Під час побудови DOM - дерева, деякі стандартні HTML - атрибути стають властивостями елементів.Подивимося на декілька властивостей, які часто використовуються.

// value - містить поточний текстовий контент елементів форм.
// checked - зберігає стан чекбокса або радіокнопки.
// name - зберігає значення, вказане в HTML - атрибуті name.
// src - шлях до зображення тегу < img >.

// const image = document.querySelector('.image')
// console.log(image.src)
// console.log(image.alt)

// image.src = "https://picsum.photos/id/13/640/480";
// image.alt = "River bank";

// console.log(image)

// ======================================
// Властивість textContent

// elem.textContent повертає текстовий контент всередині елемента.
// Доступний для читання і запису.Неважливо, що буде передано в
// textContent, дані завжди будуть записані як текст.

// const textEl = document.querySelector(".article-text");
// // console.log(textEl.textContent); // text inside p.article-text

// const titleEl = document.querySelector(".article-title");
// titleEl.textContent = 'Welcome to Bahamas!';

// ============================================
// Властивість classList

// У властивості classList зберігається об'єкт з методами для роботи з класами елемента.

// elem.classList.contains(cls) - повертає true або false, залежно від наявності класу cls в елемента.
// elem.classList.add(cls) - додає клас cls до списку класів елемента.
// elem.classList.remove(cls) - видаляє клас cls зі списку класів елемента.
// elem.classList.toggle(cls) - якщо відсутній клас cls, то додає його, якщо - присутній, навпаки - видаляє.
// elem.classList.replace(oldClass, newClass) - замінює існуючий клас oldClass на вказаний newClass.

// const link = document.querySelector(".link");
// console.log(link.classList);

// const hasActiveClass = link.classList.contains("is-active");
// console.log(`hasActiveClass - ${hasActiveClass}`);

// link.classList.add("special");
// console.log(link.classList);

// link.classList.remove("is-active");
// console.log(link.classList);

// link.classList.toggle("is-active");
// console.log(link.classList);

// link.classList.replace("special", "regular");
// console.log(link.classList);

// ========================================
// Властивість style

// const button = document.querySelector(".btn");

// button.style.backgroundColor = "teal";
// button.style.fontSize = "24px";
// button.style.textAlign = "center";

// console.dir(button.style); // inline styles object

// =====================================================
// Атрибути
// DOM - елементам відповідають HTML - теги, які містять текстові атрибути.Доступ до атрибутів здійснюється за допомогою стандартних методів.Ці методи працюють зі значенням, яке знаходиться в HTML.

// elem.hasAttribute(name) - перевіряє наявність атрибута, повертає true або false.
// elem.getAttribute(name) - отримує значення атрибута і повертає його.
// elem.setAttribute(name, value) - встановлює атрибут.
// elem.removeAttribute(name) - видаляє атрибут.
// elem.attributes - властивість, що повертає об'єкт усіх атрибутів елемента.

// const image = document.querySelector(".image");

// console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

// console.log(image.hasAttribute("src")); // true

// console.log(image.getAttribute("alt")); // "Rocks and waterfall"

// image.setAttribute("alt", "Amazing nature");

// console.log(image.getAttribute("alt")); // Amazing nature

// ====================================================
// data - атрибути

// const saveBtn = document.querySelector('button[data-action="save"]');
// console.log(saveBtn.dataset.action); // "save"

// const closeBtn = document.querySelector('button[data-action="close"]');
// console.log(closeBtn.dataset.action); // "close"

const saveBtn = document.querySelector('.editor button[data-action="save"]')
const closeBtn = document.querySelector('.editor button[data-action="close"]')

console.log(saveBtn.dataset.action)
console.log(closeBtn.dataset.action)