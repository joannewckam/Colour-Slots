Slot Machine Game

The goal of the game is to generate three matching colours to win. Use will click the lever that will generate three random colours. User wins when three colours match. User loses when coins run out without a win.

TECHNOLOGIES USED:
Javascript, HTML, CSS

GETTING STARTED
<a href="https://joannewckam.github.io/firstGAproject">Demo</a>

Challenges:
assigning a colour from randomly generated number as a string
setInterval and setTimeout to stop the generated colours at different times
winCount went up on the first lever click because of the setTimeout - fixed by calling the checkWin function after the last spin

NEXT STEPS:
add styling
add icons to reels
add sound effects

PSEUDOCODE:
Variables/State:
reels
winCount
coins

Elements:
Lever to start
Button to reset

Display
- number of coins
- three sets of colours
- total wins

Event Listeners
Lever > spins the colours
button > reset/restart

GAME LOGIC:
1. Three displays for the colour reels start blank
2. User starts with 10 coins to play
3. Click lever button to start
    a. Display will randomly generate three colours
        i. Both buttons disabled until the last spin
    b. Check to see if the 3 generated colours match
        i. If the three colours match - display win message and win count goes up by 1
        ii. If they do not match no message will display
        iii. Coin count goes down by 1
3. User is able to continue clicking the lever until the coins run out
    a. When coins reach 0 a message will display that they are out of tokens to play
    b. The lever button is disabled to prompt user to click the reset button to start again
4. Reset button returns to initial state of 10 coins, 0 wins and white display