const btn1 = document.querySelector(".button1")
const btn2 = document.querySelector('.button2')
const btn3 = document.querySelector('.button3')

const startGame = () => {
    console.log('hello')
    btn1.classList.add('hidden')
    btn2.classList.add('hidden')
}

btn1.addEventListener('click',startGame)

const controlScreen = () => {
    console.log('control button hit')
    btn1.classList.add('hidden')
    btn2.classList.add('hidden')
}

btn2.addEventListener('click', controlScreen)

const backButton = () => {
    console.log('back')
    btn1.classList.remove('hidden')
    btn2.classList.remove('hidden')

}

btn3.addEventListener('click',backButton)