
// const button = document.querySelector('.js-btn')
// button.addEventListener('click', onClick)

// function onClick() {
//     for (let i = 3; i > 0; i -= 1) {
//         const delay = i * 1000
//         setTimeout(() => console.log(i), delay);

//     }
// }

// const date = new Date()
// console.log(date)

// const nameOfMonth =
//     ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень',
//         'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень']

// const arrDate = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвкре', 'Пятниця', 'Суббота']

// console.log(arrDate[date.getDay()])
// console.log('new Date()-->', date)

// const currentDate = Date.now()
// console.log('Date.now()-->', currentDate)

// ===================================================

const box = document.querySelector('.js-box')
const titelTimer = document.querySelector('.js-timer')
let counter = 11

setTimeout(() => {
    box.style.display = "block"

    const id = setInterval(() => {

        counter -= 1
        titelTimer.textContent = counter

        if (!counter) {
            clearInterval(id)
            titelTimer.textContent = 'X'
            titelTimer.addEventListener('click', onClick)
        }

    }, 1000);
}, 1000);

function onClick() {
    box.style.display = "none"
}