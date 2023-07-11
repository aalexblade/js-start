// scope
// Глобальна область видимості=================

// const globalValue = 11;

// console.log(globalValue)

// function foo() {
//     console.log(globalValue)
// }

// for (let i = 0; i < 5; i++) {
//     console.log(globalValue); // 11

//     if (i === 2) {
//         console.log(globalValue); // 11
//     }
// }

// Блокова область видимості========================

// function foo() {
//     const a = 20;
//     console.log(a); // 20

//     for (let i = 0; i < 5; i++) {
//         console.log(a); // 20

//         if (i === 2) {
//             console.log(a); // 20
//         }
//     }
// }

// // ❌ Помилка! Змінна a - недоступна у глобальній області видимості
// console.log(a);

// for (let i = 0; i < 3; i++) {
//     // ❌ Помилка! Змінна a - недоступна в цій області видимості
//     console.log(a);
// }


// for (let i = 0; i < 5; i++) {
//     const a = 20;
//     console.log(a); // 20

//     if (i === 2) {
//         const b = 30;
//         console.log(a); // 20
//         console.log(b); // 30
//     }

//     if (i === 3) {
//         console.log(a); // 20

//         // ❌ Помилка! Змінна b - недоступна в цій області видимості
//         console.log(b);
//     }
// }


// function getSum(a, b) {

//     return a + b
//     console.log(a + b)
// }

// console.log(getSum(10, 15))
// // getSum(29, 33)