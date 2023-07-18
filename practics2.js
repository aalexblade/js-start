// const message = "JavaScript essentials";
// const sum = 10
// const messageLenght = message.length
// const messageSum = messageLenght * sum

// // console.log(message.split(""))
// // console.log(messageLenght)
// console.log(messageSum)

// const firstArray = ["Mercury", "Venus", "Earth"];
// const secondArray = ["Mars", "Jupiter"];
// const thirdArray = ["Saturn", "Uranus", "Neptune"];
// const allPlanets = firstArray.concat(secondArray, thirdArray)

// console.log(allPlanets)

// ============================================
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let idx = 0; idx < fruits.length; idx++) {
//     const fruit = fruits[idx];
//     console.log(fruit)
// }
// =============================================

// Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел,
//  і обчислює загальну суму його елементів.
// Загальна сума елементів повинна зберігатися у змінній total,
// яка повертається як результат роботи функції.

// const order = [412, 371, 94, 63, 176]
// let total = 0

// function calculateTotalPrice(order) {
//     for (let i = 0; i < order.length; i++) {
//         total += order[i];

//     }
//     return total
// }

// console.log(calculateTotalPrice(order))


// =====================================================
// знайти найдовше слово в речені

// let string = ("The quick brown fox jumped over the lazy dog");
// function findLongestWord(string) {
//     // Change code below this line
//     let arrayString = string.split(' ');
//     let wordLength = 0;
//     let findLongestWord;

//     for (let i = 0; i < arrayString.length; i += 1) {
//         wordLength = arrayString[1].length;

//         if (arrayString[i].length > wordLength) {
//             findLongestWord = arrayString[i];

//             return findLongestWord;
//         }

//     }
// };
// console.log(findLongestWord(string))
// console.log(findLongestWord("Google do a roll"))
// console.log(findLongestWord("May the force be with you"))
// ========================================================

// Доповни код функції createArrayOfNumbers(min, max) таким чином,
// щоб вона повертала масив усіх цілих чисел від значення min до max.

function createArrayOfNumbers(min, max) {
    const numbers = [];
    // Change code below this line
    for (let i = min; i <= max; i += 1) {
        numbers.push(i);

    }

    // Change code above this line
    return numbers;
}

console.log(createArrayOfNumbers(1, 3))
console.log(createArrayOfNumbers(14, 17))
console.log(createArrayOfNumbers(29, 33))