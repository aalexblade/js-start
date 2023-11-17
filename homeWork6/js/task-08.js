
const form = document.querySelector('.login-form')

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault()

    const formElements = event.currentTarget.elements
    const email = formElements.email.value
    const password = formElements.password.value

    if (email === '' || password === '') {
        return alert("Please fill in all the fields!")
    }

    const formData = { email, password }
    console.log(formData)
    form.reset();
}
// ====================================================
// збираємо всю форму зі всіма значеннями==============

// function onFormSubmit(event) {
//     event.preventDefault()

//     const formData = new FormData(event.currentTarget)
//     console.log(formData)

//     formData.forEach((value, name) => {
//         console.log('submit -> value', value)
//         console.log('submit -> name', name)
//     })
//     formData.reset()
// }

// =================================================
// function onFormSubmit(event) {
//     event.preventDefault()

//     const form = event.target
//     const email = form.elements.email.value
//     const password = form.elements.password.value

//     if (email === '' || password === '') {
//         return alert("Please fill in all the fields!")
//     }
//     console.log(`email: ${email}, password: ${password}`);
//     form.reset();
// }
