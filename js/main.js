/*----- constants -----*/
const drumAudioEl = new Audio("sounds/drum_roll.mp3");
const ringAudioEl = new Audio("sounds/ring_sound.mp3");
const winAudioEl = new Audio("sounds/win-sound.mp3");

/*----- app's state (variables) -----*/
let reels;
let winCount;
let coins;

/*----- cached element references -----*/

let leverBtn = document.getElementById("lever");
let resetBtn = document.getElementById("reset");

let firstColour = document.getElementById("colour1");
let secondColour = document.getElementById("colour2");
let thirdColour = document.getElementById("colour3");

let wins = document.getElementById("wins");
let coinCount = document.getElementById("coins");

let winMessage = document.getElementById("win-message");
let loseMessage = document.getElementById("lose-message");

/*----- event listeners -----*/
leverBtn.addEventListener("click", handleLever);
resetBtn.addEventListener("click", handleReset);

/*----- functions -----*/

initialize();

function handleLever() {
	if (coins > 0) {
		winMessage.style.display = "none";
		loseMessage.style.display = "none";
		resetBtn.disabled = true;
		leverBtn.disabled = true;
		spin();
		spin1();
		spin2();
		setTimeout(function () {
			resetBtn.disabled = false;
			leverBtn.disabled = false;
		}, 4000);
	}
}

function handleReset() {
	initialize();
	winMessage.style.display = "none";
	coinCount.textContent = `x ${coins}`;
	leverBtn.disabled = false;
	loseMessage.style.display = "none";
	wins.textContent = `: ${winCount}`;
}

function initialize() {
	reels = [0, 0, 0];
	firstColour.style.backgroundColor = "#ffffff";
	secondColour.style.backgroundColor = "#ffffff";
	thirdColour.style.backgroundColor = "#ffffff";
	winCount = 0;
	coins = 10;
	coinCount.textContent = `x ${coins}`;
	wins.textContent = `: ${winCount}`;
}

function randomizer() {
	let randomColour = Math.floor(Math.random() * 5 + 1);
	if (randomColour === 1) return "#FF9AA2"; //pink
	if (randomColour === 2) return "#FFDAC1"; //orange
	if (randomColour === 3) return "#E2F0CB"; //green
	if (randomColour === 4) return "#B5EAD7"; //blue
	if (randomColour === 5) return "#BAABDA"; //purple
}

function spin() {
	drumAudioEl.volume = 0.02;
	drumAudioEl.currentTime = 3.25;
	drumAudioEl.play();
	let spinInterval = setInterval(function () {
		reels[0] = randomizer();
		firstColour.style.backgroundColor = reels[0];
	}, 200);
	setTimeout(function () {
		ringAudioEl.volume = 0.2;
		ringAudioEl.currentTime = 0.25;
		ringAudioEl.play();
		clearInterval(spinInterval);
	}, 1000);
}

function spin1() {
	let spinInterval = setInterval(function () {
		reels[1] = randomizer();
		secondColour.style.backgroundColor = reels[1];
	}, 200);
	setTimeout(function () {
		ringAudioEl.volume = 0.1;
		ringAudioEl.currentTime = 0.25;
		ringAudioEl.play();
		clearInterval(spinInterval);
	}, 2000);
}

function spin2() {
	let spinInterval = setInterval(function () {
		reels[2] = randomizer();
		thirdColour.style.backgroundColor = reels[2];
	}, 200);
	setTimeout(function () {
		ringAudioEl.volume = 0.1;
		ringAudioEl.currentTime = 0.25;
		ringAudioEl.play();
		clearInterval(spinInterval);
		checkWin();
		render();
	}, 3000);
}

function render() {
	coins--;
	coinCount.textContent = `x ${coins}`;
	wins.textContent = `: ${winCount}`;
	if (coins === 0) {
		loseMessage.style.display = "block";
	}
}

function checkWin() {
	if (reels[0] === reels[1] && reels[0] === reels[2]) {
		winCount++;
		coins += 5;
		winAudioEl.volume = 0.1;
		winAudioEl.currentTime = 1;
		winAudioEl.play();
		winMessage.style.display = "block";
	}
}
