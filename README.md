Slot Machine Game

GAME: The user is given the goal of getting 3 matching colours. They will pull the lever to get 3 randomly generated colours. The win when all the colours match.

Constants

WIN: 
    [red, red, red]
    [green, green, green]
    [yellow, yellow, yellow]

State:
currentColours
winCount

Elements:
Lever to start
Button to reset

Display
- current spin
- 3 sets of colours
- total wins

Event Listeners
Lever > spins the colours
button > reset/restart


GAME LOGIC:
1. All three displays set to a colour
2. User pulls lever 
    1. Generate a 3 random colours, save that to a variable
    2. Check to see if the 3 generated colours match a winning combination
        1. If they match - display win message
        2. If not - no message/keep pulling
3. User pulls again until the win