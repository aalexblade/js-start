
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

// =============РЕКЛАМА ЯКА ЗНИКАЄ  ПІСЛЯ 10 СКУНД============================

// const box = document.querySelector('.js-box')
// const titelTimer = document.querySelector('.js-timer')
// let counter = 11

// setTimeout(() => {
//     box.style.display = "block"

//     const id = setInterval(() => {

//         counter -= 1
//         titelTimer.textContent = counter

//         if (!counter) {
//             clearInterval(id)
//             titelTimer.textContent = 'X'
//             titelTimer.addEventListener('click', onClick)
//         }

//     }, 1000);
// }, 1000);

// function onClick() {
//     box.style.display = "none"
// }


// =========================ГОДДИНИК==========================

const day = document.querySelector('.date-day')
const date = document.querySelector('.date')
const month = document.querySelector('.date-month')
const year = document.querySelector('.date-year')
const digitalClock = document.querySelector('.digital-clock')
const arrowSecond = document.querySelector('.clock-seconds__arrow')
const arrowMinutes = document.querySelector('.clock-minutes__arrow')
const arrowHours = document.querySelector('.clock-hours__arrow')

const nameOfMonth = [
    'Січень',
    'Лютий',
    'Березень',
    'Квітень',
    'Травень',
    'Червень',
    'Липень',
    'Серпень',
    'Вересень',
    'Жовтень',
    'Листопад',
    'Грудень'
]
const arrDay = [
    'Неділя',
    'Понеділок',
    'Вівторок',
    'Середа',
    'Четвкре',
    'Пятниця',
    'Суббота'
]



setInterval(() => {
    const currentTime = new Date()
    const currentDay = arrDay[currentTime.getDay()]
    const currentDate = currentTime.getDate()
    const currentMonth = nameOfMonth[currentTime.getMonth()]
    const currentYear = currentTime.getFullYear()

    const currentHour = currentTime.getHours()
    const currentSeconds = currentTime.getSeconds()
    const currentMinutes = currentTime.getMinutes()

    const changeSeconds = (360 / 60) * currentSeconds
    const changeMinutes = (360 / 60) * currentMinutes
    const changehours = (360 / 12) * currentHour + (360 / 12 / 60) * currentMinutes


    const formatTime =
        `${currentHour.toString().padStart(2, '0')}:${currentMinutes.toString().padStart(2, '0')}:${currentSeconds.toString().padStart(2, '0')}`

    day.textContent = currentDay
    date.textContent = currentDate
    month.textContent = currentMonth
    year.textContent = currentYear

    digitalClock.textContent = `Поточний час: ${formatTime}`

    arrowSecond.style.transform = `rotate(${changeSeconds}deg)`
    arrowMinutes.style.transform = `rotate(${changeMinutes}deg)`
    arrowHours.style.transform = `rotate(${changehours}deg)`
}, 1000);