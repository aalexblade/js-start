
const bodyChangeColor = document.querySelector('body')
const bodyRef = document.querySelector('.color')

bodyChangeColor.addEventListener('click', onChangeColor)

function onChangeColor(event) {
  bodyChangeColor.style.backgroundColor = getRandomHexColor()
  bodyRef.textContent = bodyChangeColor.style.backgroundColor
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


