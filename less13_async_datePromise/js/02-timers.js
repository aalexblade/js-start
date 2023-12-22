// Тайм - аут
// Метод setTimeout() дозволяє запланувати запуск функції через певний час.

// const timerId = setTimeout(callback, delay, arg1, arg2, ...);

// -callback - функція, виконання якої необхідно запланувати.
// - delay - час в мілісекундах, через який callback - функція буде
// викликана один раз.

// Додаткові аргументи(arg1, arg2 тощо) будуть передані callback - функції
// під час виклику.Повертає цифровий ідентифікатор створеного таймера, який
// використовується для його видалення.

// const button = document.querySelector('button')

// const onClick = () => {
//     const timerId = setTimeout(() => {
//         console.log('I love async JS!')
//     }, 2000)
//     console.log(timerId)
// }

// button.addEventListener('click', onClick)
// =============================================
// const greet = () => {
//     console.log("Hello!");
// };

// const timerId = setTimeout(greet, 3000);

// clearTimeout(timerId);

// Оскільки ми викликали clearTimeout(), який виповниться раніше,
// ніж буде викликана функція greet(), таймер з timerId буде видалений
// і реєстрація відкладеного виклику greet() скасується.Тому в консоль нічого не виведеться.

// ================================================
// Інтервал
// Метод setInterval() - це простий спосіб повторення коду знову і знову зі встановленим
// проміжком часу повторень.Синтаксис і параметри такі самі як у setTimeout().На відміну
// від setTimeout(), інтервал запускає виконання функції не один раз, а регулярно повторює
// її через вказаний проміжок часу.Зупинити виконання можна викликом методу clearInterval(id).

// const timerId = setInterval(callback, delay, arg1, arg2, ...);

// Клікаючи на кнопку «Start», запустимо інтервал і будемо кожну секунду виводити в консоль
// рядок.Використовуємо Math.random(), щоб рядки були різні.По кліку на кнопку «Stop» викличемо
// clearInterval() і передамо ідентифікатор інтервалу, який потрібно зупинити.

const startBtn = document.querySelector(".js-start");
const stopBtn = document.querySelector(".js-stop");
let timerId = null;

startBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
        console.log(`I love async JS!  ${Math.random()}`);
    }, 1000);
});


stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    console.log(`Interval with id ${timerId} has stopped!`);
});