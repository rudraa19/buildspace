# Tic Tac Toe Game

---

### Approach

This program implements a simple Tic Tac Toe game in C. It allows two players to take turns marking spaces on a 3x3 board until one player wins or the game ends in a draw.

<br />

### Functionality Required

1. **Initialize Board**: Initializes the game board with empty spaces and displays the cell numbers for reference.
2. **Show Board**: Displays the current state of the game board.
3. **Update Board**: Updates the game board with the player's move and checks if the move is valid.
4. **Check Winner**: Checks if either player has won the game.
5. **Play Tic Tac Toe**: Manages the flow of the game, alternating turns between Player 1 (X) and Player 2 (O), and ends when a player wins or the game ends in a draw.
6. **Main**: Initializes the game, provides instructions, and allows players to restart or exit the game.

<br />

### Sample Input/Output

```
--------- Tic Tac Toe ----------


* Instructions 

	Player 1 sign = X
	Player 2 sign = O
	To exit from game, Enter -1


* Cell Numbers on Board


	  1  |  2  |  3
	----------------
	  4  |  5  |  6
	----------------
	  7  |  8  |  9



> Press Enter to start...

Player 1 [ X ] : 1


	  X  |     |   
	----------------
	     |     |   
	----------------
	     |     |   



Player 2 [ O ] : 2


	  X  |  O  |   
	----------------
	     |     |   
	----------------
	     |     |   



Player 1 [ X ] : 5


	  X  |  O  |   
	----------------
	     |  X  |   
	----------------
	     |     |   



Player 2 [ O ] : 6


	  X  |  O  |   
	----------------
	     |  X  |  O
	----------------
	     |     |   



Player 1 [ X ] : 9


	  X  |  O  |   
	----------------
	     |  X  |  O
	----------------
	     |     |  X


	 *** Player 1 Won!! ***

	 --- Game Over --- 

* Menu

Press 1 to Restart
Press 0 for Exit

Choice: 0


 :: Thanks for playing Tic Tac Toe game! :: 
```

<br />

### Source Code

<pre><code language='c'>
\#include \<stdio.h\>
 
// Globally declared 2D-array
char board\[3][3];
 
// Function to initialize the game board
void initializeBoard()
{
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            board\[i][j] = ' ';
        }
    }
    int count = 1;
    printf("\n\n\t  ");
    for(int i = 0; i < 3; i++)
    {
        for(int j = 0; j < 3; j++)
        {
            printf("%d", count++);
            if (j < 2)
            {
                ...
</code></pre>

> *Code is taking too long to render...*<br />
> *See full code here: * <button name='tic-tac-toe' language='c'>See Full Code</button>

<br />

### References

<u>[sanfoundry](https://www.sanfoundry.com/c-program-tic-tac-toe-game/)</u>