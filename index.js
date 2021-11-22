// Coding for the buttons
const btn1 = document.querySelector(".button1")
const btn2 = document.querySelector('.button2')
const btn3 = document.querySelector('.button3')

const easy = document.querySelector('.easy')
const medium = document.querySelector('.medium')
const hard = document.querySelector('.hard')

const instructionScreen = document.querySelector('.instructions')

const squaresClicked = document.querySelector('.clicked')
const squaresScreen = document.querySelector('.onScreen')

let easyTime = 600
let mediumTime = 400
let hardTime = 320

const hide = () =>{
    easy.classList.add('hidden')
    medium.classList.add('hidden')
    hard.classList.add('hidden')
    btn2.classList.add('hidden')
    btn3.classList.add('hidden')
    instructionScreen.classList.add('hidden')
}

var interval = (x) => {
    setInterval(position, x)
}
var endGame = () =>{
    clearInterval(interval)
    squaresScreen.innerHTML = `BLOCKS ON SCREEN: ${onScreen}`
    alert(`You Lost: Press ok to continue game or refresh page to restart.
    Score: ${lvlClicks}`)
}

//Difficulty Selection
const easyDifficulty = () => {
    hide()
    interval(easyTime)
}
const mediumDifficulty = () => {
    hide()
    interval(mediumTime)
}
const hardDifficulty = () => {
    hide()
    interval(hardTime)
}

const startGame = () => {
    btn1.classList.add('hidden')
    btn2.classList.remove('hidden')
    easy.classList.remove('hidden')
    medium.classList.remove('hidden')
    hard.classList.remove('hidden')

    easy.addEventListener('click', easyDifficulty)
    medium.addEventListener('click', mediumDifficulty)
    hard.addEventListener('click', hardDifficulty)
}

btn1.addEventListener('click',startGame)

const instructions = () => {
    btn1.classList.add('hidden')
    btn2.classList.remove('hidden')
    instructionScreen.classList.remove('hidden')
}

btn3.addEventListener('click', instructions)

const backButton = () => {
    btn1.classList.remove('hidden')
    btn2.classList.add('hidden')
    easy.classList.add('hidden')
    medium.classList.add('hidden')
    hard.classList.add('hidden')
    instructionScreen.classList.add('hidden')
}

btn2.addEventListener('click',backButton)

//Coding for game 
var onScreen = 0
var lvlClicks = 0
const container = document.querySelector('.container')


const position = () =>{
    const clicked = () =>{
        square.classList.remove('square')
        lvlClicks++
        onScreen--
        squaresClicked.innerHTML = `SCORE: ${lvlClicks}`
        squaresScreen.innerHTML = `BLOCKS ON SCREEN: ${onScreen}`
    }
    const square = document.createElement('div')
    square.classList.add('square')

    let xPos = Math.floor((Math.random()*697))
    let yPos = Math.floor((Math.random()*497))

    square.style.top = yPos+"px"
    square.style.left = xPos+"px"
    container.appendChild(square)

    onScreen++

    square.addEventListener('click', clicked)
    squaresClicked.innerHTML = `SCORE: ${lvlClicks}`
    squaresScreen.innerHTML = `BLOCKS ON SCREEN: ${onScreen}`
    console.log('squares clicked: '+lvlClicks)
    console.log("on screen "+onScreen)

    if (onScreen === 20){
        endGame()
    }
}
