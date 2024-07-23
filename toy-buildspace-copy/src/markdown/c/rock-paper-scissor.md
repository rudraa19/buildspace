# Rock Paper Scissor

---

### Background

Rock Paper Scissors (also known as Stone Paper Scissors) is a hand game played between two people, where each player simultaneously forms one of three shapes. The winner is determined by the following rules:

- Rock vs Paper -> Paper wins.
- Rock vs Scissors -> Rock wins.
- Paper vs Scissors -> Scissors wins.

<br/>
## Approach to Implement the Game

### <span isCode>main()</span> Function

The <span isCode>main()</span> function initializes variables, displays content, and takes input from the user. It also includes calls to two predefined functions:
- <span isCode>srand()</span> and <span isCode>rand()</span>, used for generating random numbers.
  - <span isCode>srand()</span> initializes the random number generator.
  - <span isCode>rand()</span> generates a random number in the range [0, RAND_MAX).
- The random number generated is then modulated with 100 to restrict its range to [0, 100).

### Choice Determination for Computer

Based on the range of the random number:
- If the number is between 0-33, the computer chooses Rock.
- If the number is between 33-66, the computer chooses Paper.
- If the number is between 66-100, the computer chooses Scissors.

### <span isCode>game()</span> Function

The <span isCode>game()</span> function compares the choice of the user and the computer using if-else statements:
- If the user wins, it returns <span isCode>1</span>.
- If the computer wins, it returns <span isCode>0</span>.
- If it's a tie, it returns <span isCode>-1</span>.

### Sample Input Output


```
Enter your choice:
1. Stone
2. Paper
3. Scissors
2
Computer chose: Stone
You chose: Paper
Congratulations! You win!
```

```
Enter your choice:
1. Stone
2. Paper
3. Scissors
3
Computer chose: Scissors
You chose: Scissors
It's a tie!
```

```
Enter your choice:
1. Stone
2. Paper
3. Scissors
1
Computer chose: Paper
You chose: Stone
Computer wins. Better luck next time!
```

<br/>

### Sourse code

Below is an example of how the above approach could be implemented in code:

<pre><code language='c'>
\#include \<stdio.h\>
\#include \<stdlib.h\>
\#include \<time.h\>

// Function to simulate the game
int game(int userChoice, int compChoice) {
    if (userChoice \== compChoice)
        return -1; // Tie
    else if ((userChoice \== 1 && compChoice \== 3) || 
             (userChoice \== 2 && compChoice \== 1) || 
             (userChoice \== 3 && compChoice \== 2))
        return 1; // User wins
    else
        return 0; // Computer wins
}

int main() {
    int userChoice, compChoice;
    // Initialize random number generator
    srand(time(NULL));
    // Generate random number for computer's choice
    compChoice = rand() % 3 + 1; // 1 for Stone, 2 for Paper, 3 for Scissors
    // Ask user for input
    printf("Enter your choice:\n");
    printf("1. Stone\n");
    printf("2. Paper\n");
    printf("3. Scissors\n");
    scanf("%d", &userChoice);
    // Validate user input
    if (userChoice < 1 || userChoice > 3) {
        printf("Invalid choice. Please enter a number between 1 and 3.\n");
        return 1; // Exit with error
    }
    // Determine winner
    int result = game(userChoice, compChoice);
    // Display results
    printf("Computer chose: ");
    switch (compChoice) {
        case 1:
            printf("Stone\n");
            break;
        case 2:
            printf("Paper\n");
            break;
        case 3:
            printf("Scissors\n");
            break;
    }
    printf("You chose: ");
    switch (userChoice) {
        case 1:
            printf("Stone\n");
            break;
        case 2:
            printf("Paper\n");
            break;
        case 3:
            printf("Scissors\n");
            break;
    }
    // Determine and display winner
    if (result \== 1)
        printf("Congratulations! You win!\n");
    else if (result == 0)
        printf("Computer wins. Better luck next time!\n");
    else
        printf("It's a tie!\n");
    return 0;
}
</code></pre>
> *See code on github: * <button name='rock-paper-scissor' language='c'>See Code</button>

<br/>
### References

<u>[GeeksforGeeks](https://www.geeksforgeeks.org/rock-paper-scissor-in-c/)</u>