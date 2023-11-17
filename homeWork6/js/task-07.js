const fontSizeControlRef = document.querySelector('#font-size-control')
const textRef = document.querySelector('#text')

fontSizeControlRef.addEventListener('input', changeFont)

function changeFont(event) {
    textRef.style.fontSize = event.currentTarget.value + 'px'

    if (textRef.style.fontSize >= '24px') {
        textRef.style.color = 'red'
    } else {
        textRef.style.color = 'black'
    }
}
