
const btnDecrementRef = document.querySelector('button[data-action = "decrement"]')
const btnIncrementRef = document.querySelector('button[data-action = "increment"]')
const btnRestRef = document.querySelector('button[data-action = "rest"]')
const valueRef = document.getElementById('value')

let counterValue = 0
// =================================================
btnDecrementRef.addEventListener('click', () => {
    counterValue -= 1
    valueRef.textContent = counterValue
})

btnIncrementRef.addEventListener('click', () => {
    counterValue += 1
    valueRef.textContent = counterValue
})

btnRestRef.addEventListener('click', () => {
    counterValue = 0
    valueRef.innerHTML = '0'
})

// ====================================================

// btnRestRef.addEventListener('click', rest)
// function rest(event) {
//     counterValue = 0
//     valueRef.innerHTML = '0'
// }