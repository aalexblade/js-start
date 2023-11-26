
const bodyEl = document.body;
const buttonEl = document.querySelector(".change-color");
const nameColorEl = document.querySelector(".color");

buttonEl.addEventListener("click", changeBgColor);

function changeBgColor() {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  nameColorEl.textContent = randomColor;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



// const bodyChangeColor = document.querySelector('body')
// const spanColor = document.querySelector('.color')

// bodyChangeColor.addEventListener('click', onChangeColor)

// function onChangeColor(event) {
//   bodyChangeColor.style.backgroundColor = getRandomHexColor()
//   spanColor.textContent = bodyChangeColor.style.backgroundColor
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
