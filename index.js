// Coding for the buttons
var playing = false
const btn1 = document.querySelector(".button1")
const btn2 = document.querySelector('.button2')

const easy = document.querySelector('.easy')
const medium = document.querySelector('.medium')
const hard = document.querySelector('.hard')

console.log(playing)


let easyTime = 600
let mediumTime = 400
let hardTime = 320

const interval = (x) => {
    setInterval(position, x)
}

const easyDifficulty = () => {
    time = easyTime
    easy.classList.add('hidden')
    interval(time)
}
const mediumDifficulty = () => {
    time = mediumTime
    medium.classList.add('hidden')
    interval(time)
}
const hardDifficulty = () => {
    time = hardTime
    hard.classList.add('hidden')
    interval(time)
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
        
    playing = true
    // interval(time)

    // playing = false

}

btn1.addEventListener('click',startGame)

const backButton = () => {
    btn1.classList.remove('hidden')
    btn2.classList.add('hidden')
    playing = false
}

btn2.addEventListener('click',backButton)

//Coding for game 
var onScreen = 0
var lvlClicks = 0
var lvlPassed = false
var level = 1
const container = document.querySelector('.container')


const position = () =>{
    const clicked = () =>{
        square.classList.remove('square')
        lvlClicks++
        onScreen--
    }
    const square = document.createElement('div')
    square.classList.add('square')

    let xPos = Math.floor((Math.random()*697))
    let yPos = Math.floor((Math.random()*497))

    square.style.top = yPos+"px"
    square.style.left = xPos+"px"
    container.appendChild(square)
    // console.log(yPos)
    // console.log(xPos)

    onScreen++

    if (onScreen === 20){
        console.log(onScreen)
        alert('You lost!')
        
    }

    square.addEventListener('click', clicked)
    console.log('squares clicked: '+lvlClicks)
    console.log("on screen "+onScreen)
    console.log('playing '+playing)
}






