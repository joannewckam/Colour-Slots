/*----- constants -----*/




/*----- app's state (variables) -----*/
let reels = [0, 0, 0]
let winCount = 0

/*----- cached element references -----*/
let displayReel = document.getElementById('display')
let leverBtn = document.getElementById('lever')
let resetBtn = document.getElementById('reset')

let firstColour = document.getElementById('colour1')
let secondColour = document.getElementById('colour2')
let thirdColour = document.getElementById('colour3')

let wins = document.getElementById('wins')

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
    console.log('lever clicked!', e.target)
}
function handleReset(evt){
    initialize()
    console.log('reset clicked!', evt.target)
}
function initialize(){
    reels = [0, 0, 0]
    displayReel.style.backgroundColor = 'lightpink'
}

function spin(){
    reels[0] = randomizer()
    reels[1] = randomizer()
    reels[2] = randomizer()
    console.log(reels)
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
    firstColour.innerHTML = reels[0]
    secondColour.style.backgroundColor = reels[1]
    secondColour.innerHTML = reels[1]
    thirdColour.style.backgroundColor = reels[2]
    thirdColour.innerHTML = reels[2]
    
}

function checkWin(){
    if (reels[0]===reels[1] && reels[0]===reels[2]){
        console.log("you win!")
        showWinMessage()
        addWin()
    }else{
       winMessage.style.display = "none"
    }
}

function showWinMessage(){
    winMessage.style.display = "contents";
}

function addWin(){
    winCount++
    wins.textContent = `Wins: ${winCount}`
    console.log(wins)
}
