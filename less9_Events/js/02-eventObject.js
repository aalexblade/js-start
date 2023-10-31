// Об'єкт події
// Щоб обробити подію - недостатньо знати про те, що це клік або натискання
// клавіші, можуть знадобитися деталі.Наприклад, поточне значення текстового
// поля, елемент, на якому відбулася подія, вбудовані методи та інші.

// Кожна подія - це об'єкт, який містить інформацію про деталі події та
// автоматично передається першим аргументом в обробник події.Всі події
// відбуваються з базового класу Event.

// const handleClick = event => {
//     console.log(event);
// };

// button.addEventListener("click", handleClick);

// const button = document.querySelector('.btn')

// const handleClick = (event) => {
//     console.log("🚀event:", event)
//     console.log("🚀event type:", event.type)
//     console.log("currentTarget:", event.currentTarget)
// }

// button.addEventListener('click', handleClick)

// ==========================================
// Дії браузера за замовчуванням

// Для скасування дії браузера за замовчуванням в об'єкта події є
// стандартний метод preventDefault().

// const form = document.querySelector('.register-form')

// form.addEventListener('submit', (event) => {
//     event.preventDefault()

//     const {
//         elements: { username, password }
//     } = event.currentTarget
//     console.log(username.value, password.value)
// })