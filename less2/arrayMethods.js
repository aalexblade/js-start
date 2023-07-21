// Методи split() і join()

// split()=============================

// const name = "Mango"
// console.log(name.split(""))

// const message = "JavaScript - це цікаво"
// console.log(message.length)
// console.log(message.split(""))

// join()===============================

// const words = ["JavaScript", "це", "цікаво"]
// console.log(words.join(""))
// console.log(words.join(" "))
// console.log(words.join("-"))

// Метод indexOf()=====================

// const clients = ["Pop", "Merty", "Nick", "Brayan"]
// console.log(clients.indexOf("Nick"))
// console.log(clients.indexOf("Raga"))

// Метод includes()======================

// const clients = ["Pop", "Merty", "Nick", "Brayan"]
// console.log(clients.includes("Brayan")) //true
// console.log(clients.includes("Monkong")); // false

// Перевірка багатьох умов з includes()===========

// const fruit = "apple";

// if(fruit==="apple" || fruit ==="srtawbery"){
//     console.log("It is a red fruit")
// }


// const redFruits = ["apple", "strawbery", "chery", "cranberries"]
// const fruit = "chery"
// // const fruitToLowerCase = fruit.toLocaleLowerCase()

// const hasFruit = redFruits.includes(fruit)

// if (hasFruit) {
//     console.log(`${fruit} is red fruit`)
// }


// Методи push() і pop()

// push() ================================
// Метод push() додає один або декілька елементів наприкінці масиву, без необхідності зазначати індекси
// елементів, що додаються. Повертає довжину масиву після додавання елементів.

// const numbers = []

// numbers.push(1)
// console.log(numbers

// numbers.push(2)
// console.log(numbers)

// numbers.push(3)
// console.log(numbers)

// numbers.push(4)
// console.log(numbers)

// numbers.push(5)
// console.log(numbers.length)

// pop()====================================
// Метод pop() видаляє останній елемент з кінця масиву і повертає видалений елемент.
// Якщо масив порожній, метод повертає undefined.

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]

// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]

// console.log(numbers.pop()); //  2
// console.log(numbers); // [1]

// console.log(numbers.pop()); //  1
// console.log(numbers); // []

// Метод slice()============================
// slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його.
// Копія створюється з begin і до, але не включно, end - індекси елементів вихідного масиву.

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1,3)); // ["Ajax", "Poly"]

// Якщо begin і end не зазначені, буде створена повна копія вихідного масиву.

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]

// Якщо не зазначено end, копіювання буде зі start і до кінця вихідного масиву.

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
// console.log(clients.slice(2)); // ["Poly", "Kiwi"]

// Якщо значення start від'ємне, а end не зазначено
// - будуть скопійовані останні start елементи

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(-2)); // ["Poly", "Kiwi"]

// Метод splice()===============================
// Швейцарський ніж для роботи з масивами, якщо вихідний масив необхідно змінити.
// Видаляє, додає і замінює елементи у довільному місці масиву.

// Видалення
// Щоб видалити елементи в масиві, передаються два аргументи.

// splice(position, num)

// position - вказує на позицію (індекс) першого елемента для видалення
// num - визначає кількість елементів, що видаляються

// const scores = [1, 2, 3, 4, 5];

// // Видаляємо три елементи масиву, починаючи з першого елемента (індекс 0)
// const deletedScores = scores.splice(0, 3);

// // Тепер масив scores містить два елементи
// console.log(scores); // [4, 5]

// // А масив deletedScores містить три видалені елементи
// console.log(deletedScores); // [1, 2, 3]

// Додавання==============================
// Для того, щоб додати один або декілька елементів в масив, необхідно передати три або більше аргументи,
// за такої умови, другий аргумент повинен дорівнювати нулю.

// splice(position, 0, new_element_1, new_element_2, ...)

// Аргумент position вказує початкову позицію в масиві, куди будуть вставлені нові елементи.
// Другий аргумент - це нуль, він говорить методу не видаляти елементи в місці додавання нових.
// Третій, четвертий і всі наступні аргументи - це нові елементи, які додаються в масив.

// const colors = ["red", "green", "blue"];

// colors.splice(1, 0, "yellow", "pink");
// console.log(colors); // ["red", "yellow", "pink", "green", "blue"]

// Заміна=================================
// Заміна - це операція додавання, в якій видаляються елементи в місці додавання нових.
// Для цього необхідно передати мінімум три аргументи.
// Кількість елементів, що видаляються і додаються, може не збігатися.

// splice(position, num, new_element_1, new_element_2, ...)

// position - вказує на позицію (індекс) першого елемента для видалення
// num - визначає кількість елементів, що видаляються
// Третій, четвертий і всі наступні аргументи - це нові елементи, які додаються в масив.
// Наприклад, у нас є масив мов програмування з чотирьох елементів.

// const languages = ["C", "C++", "Java", "JavaScript"];

// // Заміняємо елемент з індексом 1 на новий
// languages.splice(1, 1, "Python");
// console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// // Заміняємо один елемент (з індексом 2) на декілька
// languages.splice(2, 1, "C#", "Swift", "Go");
// console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]

// Метод concat()==========================
// Об'єднує два або більше масивів в один. Він не змінює масив, на якому викликається, а повертає новий.
//  Порядок аргументів методу впливає на порядок елементів нового масиву.

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkong", "Singu"];

// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

// console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(newClients); // ["Monkong", "Singu"]