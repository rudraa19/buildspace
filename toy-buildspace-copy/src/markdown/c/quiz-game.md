# Simple Quiz Game

---

### Approach

This program implements a simple quiz game in C. It randomly selects questions from a predefined set, presents them to the user, accepts their answers, and provides feedback on correctness. At the end of the quiz, it displays the user's score.

<br />

### Functionality Required

1. **Question Structure**: Defines a structure to store each question along with multiple choice options and the correct answer.
2. **Display Question**: Function to display a question along with its options.
3. **Check Answer**: Function to compare the user's answer against the correct answer.
4. **Main Logic**: Randomly selects questions, handles user input, updates the score, and removes answered questions from the list.

<br />

### Sample Input/Output

```
Hola! Here's your Quiz Game!
Where does the President of the United States live while in office?
1. The White House
2. The Parliament
3. House of Commons
4. Washington DC
Enter your answer (1-4): 1
Correct!
What is a group of lions called?
1. Drift
2. Pride
3. Flock
4. Drove
Enter your answer (1-4): 3
Incorrect. The correct answer is 2. Pride
Which state is famous for Hollywood?
1. Sydney
2. California
3. New York
4. Paris
Enter your answer (1-4): 2
Correct!
How many legs does a spider have?
1. 7
2. 8
3. 6
4. 5
Enter your answer (1-4): 2
Correct!
Which bird lays the largest egg?
1. Owl
2. Ostrich
3. Kingfisher
4. Woodpecker
Enter your answer (1-4): 1
Incorrect. The correct answer is 2. Ostrich
Well Done Champ !!!! Quiz completed! Your score: 3/5
```

<br />

### Source Code

<pre><code language='c'>
// C program to implement a simple quiz game
\#include <stdio.h>
\#include <stdlib.h>
\#include <string.h>
\#include <time.h>

// max number of questions defined as macro
#define MAX_QUESTIONS 5

// Structure to store question details
typedef struct {
	char question[256];
	char options\[4][64];
	int correct_option;
} Question;

// function to display question to the user
void displayQuestion(Question q)
{
	printf("%s\n", q.question);
	for (int i = 0; i < 4; i++) {
		printf("%d. %s\n", i + 1, q.options[i]);
	}
}

// function to check the answer
int checkAnswer(Question q, int user_answer)
{
	return (user_answer == q.correct_option);
}

// driver code
int main()
{

	// random number generator
	srand(time(NULL));

	// Initializing questions, options and the correct
	// answer
	Question original_questions[MAX_QUESTIONS] = {
		{ "Which bird lays the largest egg?",
		{ "Owl", "Ostrich", "Kingfisher", "Woodpecker" },
		2 },
		{ "How many legs does a spider have?",
		{ "7", "8", "6", "5" },
		2 },
		{ "Where does the President of the United States "
		"live while in office?",
		{ "The White House", "The Parliament",
			"House of Commons", "Washington DC" },
		1 },
		{ "Which state is famous for Hollywood?",
		{ "Sydney", "California", "New York", "Paris" },
		2 },
		{ "What is a group of lions called?",
		{ "Drift", "Pride", "Flock", "Drove" },
		2 }
	};

	// Array of struct data-type
	Question questions[MAX_QUESTIONS];
	memcpy(questions, original_questions,
		sizeof(original_questions));

	int num_questions = MAX_QUESTIONS;

	int score = 0;

	printf("Hola! Here's your Quiz Game!\n");

	for (int i = 0; i < MAX_QUESTIONS; i++) {
		int random_index = rand() % num_questions;
		Question current_question = questions[random_index];
		displayQuestion(current_question);

		int user_answer;
		printf("Enter your answer (1-4): ");
		scanf("%d", &user_answer);

		if (user_answer >= 1 && user_answer <= 4) {
			if (checkAnswer(current_question,
							user_answer)) {
				printf("Correct!\n");
				score++;
			}
			else {
				printf("Incorrect. The correct answer is "
					"%d. %s\n",
					current_question.correct_option,
					current_question.options
						[current_question.correct_option
							- 1]);
			}
		}
		else {
			printf("Invalid choice. Please enter a number "
				"between 1 and 4.\n");
		}

		questions[random_index]
			= questions[num_questions - 1];
		num_questions--;
	}

	printf("Well Done Champ !!!! Quiz completed! Your "
		"score: %d/%d\n",
		score, MAX_QUESTIONS);

	return 0;
}
</code></pre>

> *See code on github: * <button name="quiz-game" language='c'>See Code</button>

<br />

### References

[GeeksForGeeks](https://www.geeksforgeeks.org/quiz-game-in-c-2/)