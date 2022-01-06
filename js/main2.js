/*----- constants -----*/
const drumAudioEl = new Audio("sounds/drum_roll.mp3");
const ringAudioEl = new Audio("sounds/ring_sound.mp3");

/*----- app's state (variables) -----*/
let reels
let winCount
let coins 

/*----- cached element references -----*/

let leverBtn = document.getElementById('lever')
let resetBtn = document.getElementById('reset')

let firstColour = document.getElementById('colour1')
let secondColour = document.getElementById('colour2')
let thirdColour = document.getElementById('colour3')

let wins = document.getElementById('wins')
let coinCount = document.getElementById('coins')

let winMessage = document.getElementById('win-message')
let loseMessage = document.getElementById('lose-message')

/*----- event listeners -----*/
leverBtn.addEventListener('click', handleLever)
resetBtn.addEventListener('click', handleReset)

/*----- functions -----*/

initialize()

function handleLever(){
   if (coins > 0){ 
        winMessage.style.display = 'none'
        loseMessage.style.display = 'none'
        resetBtn.disabled = true
        leverBtn.disabled = true
        spin()
        spin1()
        spin2()
        setTimeout(function(){
            resetBtn.disabled = false
            leverBtn.disabled = false
        }, 4000)
    }   
}

function handleReset(){
    initialize()
    winMessage.style.display = 'none'
    coinCount.textContent = `x ${coins}`
    leverBtn.disabled = false
    loseMessage.style.display = 'none'
    wins.textContent = `Wins: ${winCount}`

    firstColour.style.backgroundColor = 'white'
    secondColour.style.backgroundColor = 'white'
    thirdColour.style.backgroundColor = 'white'
}

function initialize(){
    reels = [0, 0, 0]
    winCount = 0
    coins = 1
    coinCount.textContent = `x ${coins}`
}

function randomizer(){
    let randomColour = Math.floor(Math.random()*3+1)
    if (randomColour === 1) return '#FF9AA2'
    if (randomColour === 2) return '#FFDAC1'
    if (randomColour === 3) return '#E2F0CB'
    if (randomColour === 4) return '#B5EAD7'
    if (randomColour === 5) return '#C7CEEA'
} 

function spin(){
    drumAudioEl.volume = 0.1
    drumAudioEl.currentTime = 2.5
    drumAudioEl.play()
   let spinInterval = setInterval(function(){
    reels[0] = randomizer()
    firstColour.style.backgroundColor = reels[0]
    }, 100)
    setTimeout(function(){
        ringAudioEl.volume = 0.1
        ringAudioEl.currentTime = 0.25
        ringAudioEl.play()
        clearInterval(spinInterval)
    }, 1000)
    setTimeout(function(){
        ringAudioEl.currentTime = 0
        ringAudioEl.pause()
    }, 2000)
}

function spin1(){
    let spinInterval = setInterval(function(){
    reels[1] = randomizer()
    secondColour.style.backgroundColor = reels[1]
    }, 200)
    setTimeout(function(){
        ringAudioEl.volume = 0.1
        ringAudioEl.currentTime = 0.25
        ringAudioEl.play()
        clearInterval(spinInterval)
    }, 3000)
    setTimeout(function(){
        ringAudioEl.currentTime = 0
        ringAudioEl.pause()
    }, 4000)
}

function spin2(){
    let spinInterval = setInterval(function(){
    reels[2] = randomizer()
    thirdColour.style.backgroundColor = reels[2]
    }, 200)
    setTimeout(function(){
        ringAudioEl.volume = 0.1
        ringAudioEl.currentTime = 0.25
        ringAudioEl.play()
        clearInterval(spinInterval)
        checkWin()
        render()
    }, 4000)
    setTimeout(function(){
        ringAudioEl.currentTime = 0
        ringAudioEl.pause()
    }, 5000)
    // resetBtn.disabled = false
    // leverBtn.disabled = false
}

function render(){    
    coins--
    coinCount.textContent = `x ${coins}`
    wins.textContent = `Wins: ${winCount}`
    if (coins === 0){
        loseMessage.style.display = "block"
        // leverBtn.disabled = true
        // console.log('hit')
    }
}

function checkWin(){
    if (reels[0]===reels[1] && reels[0]===reels[2]){
        winCount++
        coins += 5
        winMessage.style.display = "block"
    }
    //  winMessage.style.display = "none"
}
