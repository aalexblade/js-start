const textInput = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

// textInput.addEventListener('input', (event) => {
//     output.textContent = event.currentTarget.value || 'Anonymous'

// })

// ====================================================
// textInput.addEventListener('input', (event) => {
//     // output.textContent = event.currentTarget.value

//     if (output.textContent = event.currentTarget.value) {
//         output.textContent
//     } else {
//         output.textContent = 'Anonymous'
//     }

// })
// ==================================================
const createInputName = (event) => {
    event.currentTarget.value === ""
        ? (output.textContent = "Anonymous")
        : (output.textContent = event.currentTarget.value);
};
textInput.addEventListener("input", createInputName);
