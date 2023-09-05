// Ланцюжки методів

// У нас є масив об'єктів з іменами, балами і відвідуваними предметами
// кожного студента.

const students = [
    { name: "Манго", score: 83, courses: ["математика", "фізика"] },
    { name: "Полі", score: 59, courses: ["інформатика", "математика"] },
    { name: "Аякс", score: 37, courses: ["фізика", "біологія"] },
    { name: "Ківі", score: 94, courses: ["література", "інформатика"] },
];

// Необхідно отримати масив їхніх імен, відсортованих за зростанням балів за
// тест. З цією метою ми відсортуємо копію масиву методом sort(), після чого
// методом map() створимо масив значень властивості name з відсортованого масиву.

// const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
// const names = sortedByAscendingScore.map(student => student.name);

// console.log(names); // ['Аякс', 'Полі', 'Манго', 'Ківі']

// Позбутися таких «мертвих» змінних можна за допомогою групування викликів
// методів у ланцюжку. Кожний наступний метод буде виконуватися на основі
// результату роботи попереднього.

// const names = [...students]
//   .sort((a, b) => a.score - b.score)
//   .map(student => student.name);

// console.log(names); // ['Аякс', 'Полі', 'Манго', 'Ківі']

// 1.Робимо копію вихідного масиву перед сортуванням.
// 2.На копії викликаємо метод sort().
// 3.До результату роботи методу sort() застосовуємо метод map().
// 4.Змінній names присвоюється результат роботи методу map().

// Отримаємо масив унікальних відвідуваних предметів, відсортований за алфавітом.

const uniqueSortedCourses = students
    .flatMap(student => student.courses)
    .filter((course, index, array) => array.indexOf(course) === index)
    .sort((a, b) => a.localeCompare(b));

console.log(uniqueSortedCourses); // ['біологія', 'інформатика', 'література', 'математика', 'фізика']

// -На вихідному масиві викликаємо flatMap() і робимо розгладжений масив усіх курсів.
// -До результату методу flatMap() застосовуємо метод filter() для фільтрації унікальних елементів.
// -На результаті методу filter() викликаємо sort().
// -Змінній uniqueSortedCourses присвоюється результат роботи методу sort().

// Ланцюжок методів може бути довільної довжини, але, зазвичай, не більше 2-3
// операцій. По-перше, перебираючі методи використовуються для порівняно простих
// операцій над колекцією. По-друге, виклик кожного наступного методу - це
// додаткове перебирання масиву, що за великої кількості, може позначитися на
// продуктивності.