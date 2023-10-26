// Навігація по DOM

// document - це частина глобального об'єкта window, який доступний
// у скрипті, коли він виконується в браузері.Так само як alert,
// console.log, prompt і багато інших.

// Для навігації по цій ієрархії елементи мають наступні властивості.

// elem.parentNode - вибере батьківський elem.
// elem.childNodes - псевдомасив, зберігає всі дочірні елементи, включно з текстовими.
// elem.children - псевдомасив, зберігає тільки дочірні вузли - елементи, тобто ті, що відповідають тегам.
// elem.firstChild - вибере перший дочірній елемент всередині elem, включно з текстовими вузлами.
// elem.firstElementChild - вибере перший дочірній вузол - елемент всередині elem.
// elem.lastChild - вибере останній дочірній елемент всередині elem, включно з текстовими вузлами.
// elem.lastElementChild - вибере останній дочірній вузол - елемент всередині elem.
// elem.previousSibling - вибере елемент «зліва» від elem(його попереднього сусіда).
// elem.previousElementSibling - вибере вузол - елемент «зліва» від elem(його попереднього сусіда).
// elem.nextSibling - вибере елемент «праворуч» від elem(його наступного сусіда)
// elem.nextElementSibling - вибере вузол - елемент «праворуч» від elem(його наступного сусіда).

// console.log(document);

// const body = document.body;
// console.log(body);

// const list = document.querySelector(".list");
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const lastListItem = list.lastElementChild;
// console.log(lastListItem);

// const listItems = list.children;
// console.log(listItems);