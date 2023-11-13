// const validTextInput = document.querySelector('#validation-input')
// const validInput = document.querySelector('.valid')
// console.log(validInput)

// validTextInput.addEventListener('blur', () => {
//     // console.log(validTextInput.value)
//     const text = validTextInput.value
//     const valid = validTextInput.dataset

//     if (text === valid) {

//     }

// })

const inputRef = document.querySelector('#validation-input')
const numberOfSymbol = inputRef.dataset.length

function verifyValidation(event) {
    if (event.currentTarget.value.length == numberOfSymbol) {
        inputRef.classList.remove('invalid');
        return inputRef.classList.add('valid');
    } else {
        inputRef.classList.remove('valid');
        return inputRef.classList.add('invalid');
    }
}

inputRef.addEventListener('blur', verifyValidation);
