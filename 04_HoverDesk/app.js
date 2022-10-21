const board = document.querySelector('#board')
const colors = ['#F6D358', '#F2CFC6', '#F2CFC6', '#D1AE93',
 '#97D4E2', '#88B24B', '#EF562E', '#5689A3', '#EE4A5A', 
 '#0B4C8D']
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))


    board.append(square)
}

function setColor(element) {
    const clr = randColor()
    element.style.backgroundColor = clr
    element.style.boxShadow = `0 0 2px ${clr}, 0 0 10px ${clr}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function randColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

// function generateColor() {
//     return '#' + Math.floor(Math.random()*16777215).toString(16)
// }