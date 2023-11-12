
// const btnDecrementRef = document.querySelector('[data-action = "decrement"]')
// const btnIncrementRef = document.querySelector('[data-action = "increment"]')
// const btnResetRef = document.querySelector('[data-action = "reset"]')
// const valueRef = document.getElementById('value')

// let counterValue = 0
// // =================================================
// btnDecrementRef.addEventListener('click', () => {
//     counterValue -= 1
//     valueRef.textContent = counterValue
// })

// btnIncrementRef.addEventListener('click', () => {
//     counterValue += 1
//     valueRef.textContent = counterValue
// })

// btnResetRef.addEventListener('click', () => {
//     counterValue = 0
//     valueRef.innerHTML = '0'
// })

// // ====================================================

const decRef = document.querySelector('[data-action="decrement"]')
const incRef = document.querySelector('[data-action="increment"]')
const restRef = document.querySelector('[data-action="reset"]')
const valueRef = document.getElementById('value')

let counterValue = 0

decRef.addEventListener('click', () => {
    counterValue -= 1
    valueRef.textContent = counterValue

})

incRef.addEventListener('click', () => {
    counterValue += 1
    valueRef.textContent = counterValue

})

restRef.addEventListener('click', () => {
    valueRef.innerHTML = '0'
})

// ==========================================

// decRef.addEventListener('click', decrement)
// incRef.addEventListener('click', incremnt)
// restRef.addEventListener('click', reset)

// function decrement() {
//     counterValue -= 1
//     valueRef.textContent = counterValue
// }

// function incremnt() {
//     counterValue += 1
//     valueRef.textContent = counterValue
// }

// function reset() {
//     valueRef.innerHTML = '0'
// }