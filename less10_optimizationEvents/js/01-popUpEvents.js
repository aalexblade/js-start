// Спливання подій

// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");

// parent.addEventListener("click", () => {
//     console.log("Parent click handler");
// });

// child.addEventListener("click", () => {
//     console.log("Child click handler");
// });

// descendant.addEventListener("click", () => {
//     console.log("Descendant click handler");
// });

// ===================================
// Властивість event.target

//-event.target - це посилання на вихідний елемент, на якому відбулася
// подія, в процесі спливання вона - незмінна.

//-event.currentTarget - це посилання на поточний елемент, до якого
//дійшло спливання, на ньому зараз виконується обробник події.

// const parent = document.querySelector("#parent");

// parent.addEventListener("click", (event) => {
//     console.log("event.target: ", event.target);
//     console.log("event.currentTarget: ", event.currentTarget);
// });

// ==========================================================
// Припинення спливання
//stopPropagation().- частково припиняє спливання
//stopImmediatePropagation() - повністю припиняє вспливання

// Не припиняйте спливання без необхідності.Припинення спливання створює 
// свої підводні камені, які потім доводиться обходити.Наприклад,
// аналітика використовує спливання, щоб відстежувати події на сторінці.


const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const descendant = document.querySelector("#descendant");

parent.addEventListener("click", () => {
    alert(
        "Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
    );
});

child.addEventListener("click", () => {
    alert(
        "Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
    );
});

descendant.addEventListener("click", (event) => {
    event.stopPropagation();
    alert("Descendant click handler");
});