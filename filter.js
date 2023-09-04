// Метод filter()
// Метод filter(callback) використовується для єдиної операції
// - фільтрації масиву, тобто, коли необхідно вибрати більше одного елемента
// з колекції за певним критерієм.

// масив.filter((element, index, array) => {
//     // Тіло колбек-функції
//   });

// - Не змінює оригінальний масив.
// - Поелементо перебирає оригінальний масив.
// - Повертає новий масив.
// - Додає у масив, що повертається, елементи, які задовольняють умови колбек-функції.
// - Якщо колбек повернув true, елемент додається у масив, що повертається.
// - Якщо колбек повернув false, елемент не додається у масив, що повертається.
// - Якщо жоден елемент не задовольнив умову, повертає порожній масив.

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []

// // Оригінальний масив не змінився
// console.log(values); // [51, -3, 27, 21, -68, 42, -37]

// Тобто метод filter викликає колбек-функцію для кожного елемента вихідного масиву
// і, якщо результат її виконання - true, додає поточний елемент у новий масив.

// ===================================================
// Фільтрація унікальних елементів
// Використовуючи метод filter(), можна виконати фільтрацію масиву таким чином,
// що у ньому залишаться тільки унікальні елементи.
// Цей прийом працює тільки з масивом примітивних значень - не об'єктів.

// Повернемося до групи студентів і масиву усіх відвідуваних предметів,
// які ми отримали методом flatMap().

// const students = [
//     { name: "Манго", courses: ["математика", "фізика"] },
//     { name: "Полі", courses: ["інформатика", "математика"] },
//     { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];
// console.log(allCourses)
// // Cтворитюємо новий масив, в якому будуть тільки унікальні предмети, тобто без повторень.
// const uniqueCourses = allCourses.filter(
//     (course, index, array) => array.indexOf(course) === index
// );
// console.log(uniqueCourses)

// ===============================================
// Масив об'єктів
// Під час роботи з масивом об'єктів виконується фільтрація за значенням певної
// властивості. У підсумку, утворюється новий масив відфільтрованих об'єктів.

// Наприклад, у нас є масив студентів з балами за тест. Необхідно відфільтрувати
// кращих (бал вище 80), гірших (бал нижче 50) і середніх студентів (бал від 50
// до 80).

const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
    { name: "Манго", score: 83 },
    { name: "Полі", score: 59 },
    { name: "Аякс", score: 37 },
    { name: "Ківі", score: 94 },
    { name: "Х'юстон", score: 64 },
];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Масив об'єктів з іменами Манго і Ківі

// const worst = students.filter(({ score }) => score < LOW_SCORE);
// console.log(worst); // Масив з одним об'єктом Аякс

// // В колбек-функції зручно деструктуризувати властивості об'єкта
// const average = students.filter(
//     ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Масив об'єктів з іменами Полі і Х'юстон