/*----- constants -----*/


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

function handleLever(e){
    spin()
    checkWin()
    render()
    // checkLoss()
    // console.log(coins)
    // console.log('lever clicked!', e.target)
}
function handleReset(evt){
    coins = 10
    coinCount.textContent = `Coins: ${coins}`
    leverBtn.disabled = false
    loseMessage.style.display = 'none'
    winCount = 0
    wins.textContent = `Wins: ${winCount}`
    // console.log('reset clicked!', evt.target)
}
function initialize(){
    reels = [0, 0, 0]
    winCount = 0
    coins = 10
}

function spin(){
    reels[0] = randomizer()
    reels[1] = randomizer()
    reels[2] = randomizer()
    // console.log(reels)
}

function randomizer(){
    // return Math.floor(Math.random()*2+1)
    let randomColour = Math.floor(Math.random()*3+1)
    if (randomColour == 1) return 'lightblue'
    if (randomColour == 2) return 'lightgreen'
    if (randomColour == 3) return 'lightyellow'
}

function render(){
    firstColour.style.backgroundColor = reels[0]
    secondColour.style.backgroundColor = reels[1]
    thirdColour.style.backgroundColor = reels[2]

    coins--
    coinCount.textContent = `Coins: ${coins}`

    if (coins === 0){
        loseMessage.style.display = "contents"
        // leverBtn.removeEventListener('click', handleLever)
        leverBtn.disabled = true
    }
}

function checkWin(){
    if (reels[0]===reels[1] && reels[0]===reels[2]){
        winMessage.style.display = "contents"
        winCount++
        wins.textContent = `Wins: ${winCount}`
    }winMessage.style.display = "none"
}
