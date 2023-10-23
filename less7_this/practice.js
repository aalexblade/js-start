// Напиши клас Storage, який буде створювати об'єкти для управління складом товарів. Клас очікує тільки один аргумент - початковий масив товарів, який записується у властивість items об'єкта, що створюється.

// Оголоси наступні методи класу:

// getItems() - повертає масив поточних товарів у властивості items об'єкта, який викликає цей метод.
// addItem(newItem) - приймає новий товар newItem і додає його в масив товарів у властивості items об'єкта, який викликає цей метод.
// removeItem(itemToRemove) - приймає товар itemToRemove і видаляє його з масиву товарів у властивості items об'єкта, який викликає цей метод.
// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести.Будь ласка, нічого там не змінюй.

// class Storage {
//     constructor(items) {
//         this.items = items;
//     }
//     getItems() {
//         return this.items;
//     }
//     addItem(newItem) {
//         this.items.push(newItem);
//     }
//     removeItem(itemToRemove) {
//         this.items = this.items.filter(item => item !== itemToRemove)
//         // const removeIndex = this.items.indexOf(itemToRemove);
//         // if (removeIndex !== -1) {
//         //     this.items.splice(removeIndex, 1);
//         // }
//     }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// =====================================================
// Напиши клас StringBuilder, який приймає один параметр initialValue - довільний рядок,
// який записується у властивість value об'єкта, що створюється.

// Оголоси наступні методи класу:

// getValue() - повертає поточне значення властивості value.
// padEnd(str) - отримує параметр str(рядок) і додає його в кінець значення властивості
// value об'єкта, який викликає цей метод.
// padStart(str) - отримує параметр str(рядок) і додає його на початок значення властивості
// value об'єкта, який викликає цей метод.
// padBoth(str) - отримує параметр str(рядок) і додає його на початок і в кінець значення
// властивості value об'єкта, який викликає цей метод.

// class StringBuilder {
//     constructor(value) {
//         this.value = value
//     }
//     getValue() {
//         return this.value
//     }
//     padEnd(str) {
//         this.value += str
//     }
//     padStart(str) {
//         this.value = str + this.value
//     }
//     padBoth(str) {
//         this.padStart(str)
//         this.padEnd(str)
//         // this.value = str + this.value + str
//     }
// }

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="


