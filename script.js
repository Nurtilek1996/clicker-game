let time_header = document.querySelector('#time-header')
let result_header = document.querySelector('#result-header')
let start = document.querySelector('#start')
let game_field = document.querySelector('#game-field')
let game_time = document.querySelector('#game-time')
let time = document.querySelector('#time')
let result = document.querySelector('#result')

let score = 0;

start.addEventListener('click', startGame)

function startGame() {
    game_time.setAttribute('disabled', 'true')
    time.textContent = game_time.value
    score = 0
    start.classList.add('hide')
    game_field.style.backgroundColor = 'white'

    createBox()
    timer()
    
    result_header.classList.add('hide')
    time.time_header.classList.remove('hide')
}
game_time.addEventListener('input', setTime)

function setTime() {
    time.textContent = game_time.value
    result_header.classList.add('hide')
    time_header.classList.remove('hide')
}

function endGame() {
    game_field.innerHTML = '';
    start.classList.remove('hide');
    game_field.style.backgroundColor = '#ccc'
    result_header.classList.remove('hide')
    time_header.classList.add('hide')
    result.textContent = score;
    game_time.removeAttribute('disable')
}

function timer() {
    let time = document.querySelector('#time');
    let interval = setInterval(function () {
        time.textContent = (Number(time.textContent) - 0.1).toFixed(1)
        if (time.textContent <= 0) {
            clearInterval(interval)
            endGame()
        }
    }, 100);
}

game_field.addEventListener('click', clickBox);
function clickBox(event) {
    if (event.target.dataset.box) {
        createBox()
        score++
    }
}



function createBox() {
    game_field.innerHTML = '';
    let box = document.createElement('div')
    let sizeBox = getRandom(30, 60)
    let left = getRandom(0, 300 - sizeBox)
    let top = getRandom(0, 300 - sizeBox)

    box.style.width = box.style.height = sizeBox + 'px';
    box.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)},
${getRandom(0, 255)})`;
    box.style.position = 'absolute';
    box.style.top = top + 'px';
    box.style.left = left + 'px';
    box.style.cursor = 'pointer'


    box.setAttribute('data-box', true)
    game_field.insertAdjacentElement('afterbegin', box);

}
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}