// Синтаксис spread і rest
// В сучасному стандарті з'явився новий синтаксис для роботи з ітерабельними сутностями, як-от рядок, масив або об'єкт.
// Його функціонал і назва залежить від місця застосування.

// ======================================
// spread: передача аргументів

// Наприклад, метод Math.max(аргументи) шукає і повертає найбільший з аргументів(чисел), тобто очікує не масив значень,
// а довільну кількість аргументів.
// Math.max(аргументи)

// const temps = [14, -4, 25, 8, 11];

// // В консолі буде масив
// console.log(temps);
// // ❌ Так не спрацює, тому що передаємо цілий масив
// console.log(Math.max(temps)); // NaN

// // В консолі буде набір окремих чисел
// console.log(...temps);
// // ✅ Розподілимо колекцію елементів у якості окремих аргументів
// console.log(Math.max(...temps)); // 25

// ===============================================
// spread: створення нового масиву
// Операція ... (spread) дозволяє створити копію масиву або «склеїти»
// довільну кількість масивів в один новий. Раніше для цього
// використовували методи slice() і concat(), але операція розподілу дозволяє зробити те саме у коротшій формі.

// const temps = [14, -4, 25, 8, 11];

// // Це точна, але незалежна копія масиву temps
// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps]
// console.log(allTemps)

// ==================================================
// spread: створення нового об'єкта

// Операція ... (spread) дозволяє розподілити властивості довільної кількості
// об'єктів в один новий.

// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// Порядок розподілу має значення. Імена властивостей об'єкта - унікальні,
// тому властивості об'єкта, що розподіляється, можуть перезаписати значення вже існуючої
// властивості, якщо їх імена збігаються.

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // {propC: 50, propD: 20, propA: 5, propB: 10}

// Під час розподілу можна додавати властивості у довільне місце. Головне пам'ятати про унікальність
// імені властивості і про те, що її значення може бути перезаписане.

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 10, propB: 10, propC: 15 }

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }

// =========================================================
// rest: збирання всіх аргументів функції

// Як оголосити параметри функції таким чином,
// щоб можна було передати будь-яку кількість аргументів?

// function multiply(...args) {
//     console.log(args); // масив усіх аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);
// Ім'я параметра може бути довільним. Найчастіше його називають args,
// restArgs або otherArgs - скорочено від arguments.

// ==========================================================
// rest: збирання частини аргументів функції

// Операція ... (rest) також дозволяє зібрати в масив тільки ту частину
// аргументів, яка необхідна, оголосивши параметри до «збирання».

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//     console.log(firstNumber); // Значення першого аргументу
//     console.log(secondNumber); // Значення другого аргументу
//     console.log(otherArgs); // Масив інших аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);
// Всі аргументи, для яких будуть оголошені параметри, передадуть їм свої значення,
// інші аргументи будуть поміщені в масив. Операція rest збирає решту
// усіх аргументів, а тому повинна бути останньою у підписі функції, інакше виникне помилка.


// ==========================================
// const a = { x: 2, y: 5 }
// const b = { x: 9, w: 5 }

// const c = {
//     ...a,
//     x: 10,
//     ...b,
//     y: 7
// }

// console.log(c)
// ==========================================

const defaultSetting = {
    them: 'light',
    showNotifications: true,
    hideSidebar: false,
}

const userSetting = {
    showNotifications: false,
    hideSidebar: true,
}

const finalSetting = {
    ...defaultSetting,
    ...userSetting,
}

console.log(finalSetting)