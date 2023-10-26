// Створення та видалення елементів

// Створення
// document.createElement(tagName);

// Створює елемент з ім'ям tagName і повертає посилання на нього як результат
// свого виконання.tagName - це рядок, що вказує тип елемента, який створюється.
// Елемент створюється в пам'яті, в DOM його ще немає.

// const heading = document.createElement("h1");
// console.log(heading); // <h1></h1>

// heading.textContent = "This is a heading";
// console.log(heading); // <h1>This is a heading</h1>

// const image = document.createElement("img");
// image.src = "https://cdn.shopify.com/s/files/1/2629/2348/files/artpainting_single_1.jpg?v=1634440470";
// image.alt = "Artpainting";
// console.log(image);

// ===================================================
// Додавання

// Щоб створений елемент відображався на сторінці, його необхідно додати до вже існуючого елемента в DOM - дереві.Припустимо,
// що додаємо до певного елемента element, для цього існують методи.

// element.append(el1, el2, ...) - додає один або декілька елементів після всіх дітей елемента element.
// element.prepend(el1, el2, ...) - додає один або декілька елементів перед усіма дітьми елемента element.
// element.after(el1, el2, ...) - додає один або декілька елементів після елемента element.
// element.before(el1, el2, ...) - додає один або декілька елементів перед елементом element.
// У всіх цих методах el - це елементи або рядки, в будь - якому поєднанні і кількості.Рядки додаються як текстові вузли.

// const list = document.querySelector('.usernames')

// const lastItem = document.createElement('li')
// lastItem.textContent = 'Poly'
// list.append(lastItem)

// const firstItem = document.createElement("li");
// firstItem.textContent = "Ajax";
// list.prepend(firstItem);

// const title = document.createElement('h2')
// title.textContent = 'USERNAMES';
// list.before(title)

// const text = document.createElement('p')
// text.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!";
// list.after(text)

// =============================================
// Видалення
// elem.remove();

// Для того, щоб видалити елемент, використовується метод remove().
// Він викликається на елементі elem, який необхідно видалити

// const text = document.querySelector('.text');
// text.remove();