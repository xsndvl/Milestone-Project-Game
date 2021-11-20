// Coding for the buttons
var playing = false
const btn1 = document.querySelector(".button1")
const btn2 = document.querySelector('.button2')
const btn3 = document.querySelector('.button3')

console.log(playing)

const startGame = () => {
    btn1.classList.add('hidden')
    btn2.classList.add('hidden')
    playing = true
    position()

    
}

btn1.addEventListener('click',startGame)

const controlScreen = () => {
    btn1.classList.add('hidden')
    btn2.classList.add('hidden')
}

btn2.addEventListener('click', controlScreen)

const backButton = () => {
    btn1.classList.remove('hidden')
    btn2.classList.remove('hidden')
    playing = false
}

btn3.addEventListener('click',backButton)

//Coding for game 
var lvlClicks = 0
lvlPassed = false
level = 1
const container = document.querySelector('.container')


const position = () =>{
    const square = document.createElement('div')
    square.classList.add('square')

    let xPos = Math.floor((Math.random()*697))
    let yPos = Math.floor((Math.random()*497))

    square.style.top = yPos+"px"
    square.style.left = xPos+"px"
    container.appendChild(square)
    console.log(yPos)
    console.log(xPos)
}



