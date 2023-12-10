// Throttle і Debounce

// const output = document.querySelector('.output')

// let scrollEventCount = 0;

// document.addEventListener('scroll', () => {
//   scrollEventCount += 1
//   output.textContent = scrollEventCount

// })

// =============================================
// Throttle

// Прийом throttle контролює кількість разів, яку функція може бути
// викликана протягом певного проміжку часу.Тобто дозволяє викликати
// функцію не частіше одного разу за N мілісекунд, гарантуючи її регулярне
// виконання.

// const vanillaOutput = document.querySelector('.output.vanilla')
// const throttledOutput = document.querySelector('.output.throttled')
// const eventCounter = {
//   vanilla: 0,
//   throttled: 0
// }
// document.addEventListener('scroll', onScroll)

// function onScroll() {
//   eventCounter.vanilla += 1;
//   vanillaOutput.textContent = eventCounter.vanilla;
// }

// document.addEventListener('scroll', _.throttle(throttleScroll, 300))

// function throttleScroll() {
//   eventCounter.throttled += 1;
//   throttledOutput.textContent = eventCounter.throttled;
// }

// ============================================================
// Debounce

// Прийом debounce гарантує, що функція буде викликана лише у тому разі,
// якщо між подіями буде пауза N мілісекунд.Наприклад, доки користувач
// скролить сторінку функція не буде викликана, але щойно він перестав
// скролити, функція буде викликана через 300 мілісекунд.Якщо скрол
// відновиться раніше, ніж через 300 мілісекунд після паузи, функція
// не буде викликана.

// const vanillaOutput = document.querySelector(".output.vanilla");
// const throttledOutput = document.querySelector(".output.throttled");
// const debouncedOutput = document.querySelector(".output.debounced");
// const eventCounter = {
//   vanilla: 0,
//   throttled: 0,
//   debounced: 0
// };



// document.addEventListener("scroll", () => {
//   eventCounter.vanilla += 1;
//   vanillaOutput.textContent = eventCounter.vanilla;
// });

// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     eventCounter.throttled += 1;
//     throttledOutput.textContent = eventCounter.throttled;
//   }, 300)
// );

// document.addEventListener(
//   'scroll',
//   _.debounce(() => {
//     eventCounter.debounced += 1;
//     debouncedOutput.textContent = eventCounter.debounced;
//   }, 300)
// );

// document.addEventListener('scroll', _.debounce(onClick, 200));
// function onClick() {
//   eventCounter.debounced += 1;
//   debouncedOutput.textContent = eventCounter.debounced;
// }

// =================================================
// Режими методу debounce

//   leading: true,
//   trailing: false,

const vanillaOutput = document.querySelector(".output.vanilla");
const throttledOutput = document.querySelector(".output.throttled");
const trailingOutput = document.querySelector(".output.trailing");
const leadingOutput = document.querySelector(".output.leading");
const eventCounter = {
  vanilla: 0,
  throttled: 0,
  trailing: 0,
  leading: 0
};

// Trailing debounce
document.addEventListener(
  "scroll",
  _.debounce(() => {
    eventCounter.trailing += 1;
    trailingOutput.textContent = eventCounter.trailing;
  }, 300)
);

// Leading debounce
document.addEventListener(
  "scroll",
  _.debounce(
    () => {
      eventCounter.leading += 1;
      leadingOutput.textContent = eventCounter.leading;
    },
    300,
    { trailing: false, leading: true }
  )
);

document.addEventListener("scroll", () => {
  eventCounter.vanilla += 1;
  vanillaOutput.textContent = eventCounter.vanilla;
});

document.addEventListener(
  "scroll",
  _.throttle(() => {
    eventCounter.throttled += 1;
    throttledOutput.textContent = eventCounter.throttled;
  }, 300)
);

