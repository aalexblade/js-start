// Метод JSON.stringify()

// Приймає значення і перетворює його у JSON.Значенням може бути число,
// буль, null, масив або об'єкт. Рядки - це вже валідний JSON, тому
// в їх перетворенні немає сенсу.

// const dog = {
//     name: "Mango",
//     age: 3,
//     isHappy: true,
// };

// const dogJSON = JSON.stringify(dog);
// console.log(dogJSON);// "{"name":"Mango","age":3,"isHappy":true}"

// Не будь - який JavaScript об'єкт може бути перетворений один до одного
// у JSON.Наприклад, якщо в об'єкта є методи, то при перетворенні вони будуть
// проігноровані.

// const dog = {
//     name: "Mango",
//     age: 3,
//     isHappy: true,
//     bark() {
//         console.log("Woof!");
//     },
// };

// const dogJSON = JSON.stringify(dog);
// console.log(dogJSON);// "{"name":"Mango","age":3,"isHappy":true}"

// Також, при спробі перетворити функцію в JSON, результатом буде undefined.

// JSON.stringify(() => console.log("Well, this is awkward"));// undefined

// =======================================================
// Метод JSON.parse()

// Щоб отримати з JSON валідне JavaScript значення, його необхідно розпарсити(parse).
// Це операція зворотна перетворенню в рядок(stringify).Тепер, коли dog - це валідний
// об'єкт, з ним можна працювати звичайним чином.

// const json = '{"name":"Mango","age":3,"isHappy":true}';

// const dog = JSON.parse(json);
// console.log(dog);// {name: "Mango", age: 3, isHappy: true}
// console.log(dog.name);// "Mango"

// =========================================================
// Обробка помилок

// Змінна error - це об'єкт помилки з інформацією про те, що сталося. У цього об'єкта
// є кілька корисних властивостей:
// name - тип помилки.Для помилки парса - це SyntaxError.
// message - повідомлення про деталі помилки.
// stack - стек викликів функцій на момент помилки.Використовується для налагодження.

// Script will crash during parse
// const data = JSON.parse("Well, this is awkward");
// console.log("❌ You won't see this log");

// Використовуючи конструкцію try...catch, ми можемо обробити цей виняток таким чином,
// щоб скрипт продовжив працювати, навіть у разі помилки.

// try {
//     const data = JSON.parse("Well, this is awkward")
// } catch (error) {
//     console.log(error.name);// "SyntaxError"
//     console.log(error.message);// Unexpected token W in JSON at position 0
//     //     console.log(error.stack);// Unexpected token 'W', "Well, this"... is not valid JSON
// }

// console.log("✅ This is fine, we handled parse error in try...catch");

// Те саме буде при спробі парса невалідного JSON, який, наприклад, може прийти
// з бекенду або бути прочитаний з файлу.У прикладі у властивості username бракує
// подвійних лапок.

// try {
//     const data = JSON.parse('{username: "Mango"}');
// } catch (error) {
//     console.log(error.name);// "SyntaxError"
//     console.log(error.message);// "Unexpected token u in JSON at position 1"
// }

// console.log("✅ This is fine, we handled parse error in try...catch");

// console.log('This message will not appear in the console');

// con value = 5;

// =====================================================
// Practics

// const user = {
//     username: 'Bogdan',
//     carOwner: 'true',
//     age: 25
// }

// console.log(user)

// const userJson = JSON.stringify(user)
// console.log(userJson)
// console.log(typeof userJson)

// // localStorage
// localStorage.setItem('user', userJson)
// // SessionStorage

// const clickEl = document.querySelector('.click')
// clickEl.addEventListener('click', () => {
//     sessionStorage.setItem('user', userJson)
// })

// const userFromBD = JSON.parse(userJson)
// console.log('User fom BD ->', userFromBD)

// const clickEl = document.querySelector('.click')