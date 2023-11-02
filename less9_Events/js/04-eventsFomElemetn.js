// Події елементів форм

// Подія submit
// Відправлення форми відбувається під час кліку по кнопці з атрибутом
// type = "submit" або натискання клавіші Enter, перебуваючи в будь -
// якому її текстовому полі.Подію submit можна застосувати для
// валідації(перевірки) форми перед відправленням, оскільки на об'єкті
// події існує багато корисних властивостей, пов'язаних з елементами форми.
// Сабміт форми перезавантажує сторінку, тому не забувайте скасовувати дію
// за замовчуванням методом preventDefault().

// const registerForm = document.querySelector(".form");

// registerForm.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();
//     const form = event.target;
//     const login = form.elements.login.value;
//     const password = form.elements.password.value;

//     if (login === "" || password === "") {
//         return console.log("Please fill in all the fields!");
//     }

//     console.log(`Login: ${login.value}, Password: ${password.value}`);
//     form.reset();
// }

// =============================================
// Подія change

// Відбувається після зміни елемента форми.Для текстових полів або
// textarea подія відбудеться не на кожному введенні символу, а
// після втрати фокусу, що не завжди зручно.Наприклад, доки ви набираєте
// щось у текстовому полі - подія відсутня, але як тільки фокус пропав,
// відбудеться подія change.Для інших елементів, наприклад, select,
// чекбоксів і радіо - кнопок, подія change спрацьовує відразу під
// час вибору значення.

// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");

// select.addEventListener("change", setOutput);

// function setOutput(event) {
//     const selectedOptionValue = event.currentTarget.value;
//     const selectedOptionIndex = event.currentTarget.selectedIndex;
//     const selectedOptionText =
//         event.currentTarget.options[selectedOptionIndex].text;

//     textOutput.textContent = selectedOptionText;
//     valueOutput.textContent = selectedOptionValue;
// }

// ================================================
// Подія input

// Відбувається тільки на текстових полях і textarea, і створюється щоразу при
// зміні значення елемента, не чекаючи втрати фокусу.На практиці input - це
// найголовніша подія для роботи з текстовими полями форми.

// const textInput = document.querySelector('.text-input')
// const output = document.querySelector('.output')

// textInput.addEventListener('input', (event) => {
//     // console.log(event.currentTarget.value)
//     output.textContent = event.currentTarget.value
// })

// ====================================================
// Подія focus і blur

// Елемент отримує фокус під час кліку миші або переходу клавішею Tab.Момент
// отримання і втрати фокусу - дуже важливий, отримуючи фокус, ми можемо
// завантажити дані для автозаповнення, почати відстежувати зміни тощо.Під
// час втрати фокусу - перевірити введені дані.

// Під час фокусування елемента відбувається подія focus, а коли фокус зникає,
//     наприклад, користувач клікає в іншому місці екрана, відбувається подія
// blur.Активувати або скасувати фокус можна програмно, викликавши в коді для
// елемента однойменні методи focus() і blur().

const textInput = document.querySelector(".text-input");
const setFocusBtn = document.querySelector('[data-action="set"]');
const removeFocusBtn = document.querySelector('[data-action="remove"]');

setFocusBtn.addEventListener("click", () => {
    textInput.focus();
});

removeFocusBtn.addEventListener("click", () => {
    textInput.blur();
});

textInput.addEventListener("focus", () => {
    textInput.value = "This input has focus";
});

textInput.addEventListener("blur", () => {
    textInput.value = "";
});