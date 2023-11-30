// -Події клавіатури

//     Існує дві основні події клавіатури: keydown і keyup.На відміну від
// інших, події клавіатури обробляються на документі, а не на конкретному
// елементі.Об'єкти подій клавіатури походять від базового класу
// KeyboardEvent.

// document.addEventListener("keydown", event => {
//     console.log("Keydown: ", event);
// });

// document.addEventListener("keyup", event => {
//     console.log("Keyup: ", event);
// });

// ==========================================
// Властивості key і code

// Властивість key повертає символ, згенерований натисканням клавіші,
// враховуючи стан клавіш - модифікаторів, наприклад, Shift, а
// також поточну мову.Властивість code повертає код фізичної клавіші
// на клавіатурі і не залежить від мови.

// document.addEventListener('keydown', event => {
//     console.log('key:', event.key)
//     console.log('code:', event.code)
// })
function logMessage({ type, key, code }) {
    const markup = `<div class="log-item">
    <span class="chip">${keypressCounter}</span>
    <ul>
      <li><b>Event</b>: ${type}</li>
      <li><b>Key</b>: ${key}</li>
      <li><b>Code</b>: ${code}</li>
    </ul>
  </div>`;

    logList.insertAdjacentHTML("afterbegin", markup);

    if (type === "keyup") {
        incrementKeypressCounter();
    }
}

function reset() {
    keypressCounter = 1;
    logList.innerHTML = "";
}

function incrementKeypressCounter() {
    keypressCounter += 1;
}