# Student Record System

---

### Approach

The Student Record System is designed to manage student data through a command-line interface. It supports adding, displaying, searching, and deleting student records. Each student record includes the student's name, roll number, marks, semester, and department.

<br />
### Functionality Required

1. **Add Record**: Allows the user to add a new student record with a name, roll number, marks, semester, and department.
2. **Display Records**: Displays all student records in a tabular format.
3. **Search Record**: Searches for a student record by roll number.
4. **Delete Record**: Deletes a specific student record by roll number.
5. **Exit**: Exits the program.

<br />
### Sample Input Output

```
Student Record System
1. Add Record
2. Display Records
3. Search Record
4. Delete Record
5. Exit
Enter your choice: Enter a valid integer: 1
Enter student name: Enter a string (max 49 characters, alphabets only): David
Enter roll number: Enter a valid integer: 12
Enter semester: Enter a valid integer: 1
Enter department: Enter a string (max 19 characters, alphabets only): CP
Enter marks: Enter a valid integer: 19
Record added successfully.

Student Record System
1. Add Record
2. Display Records
3. Search Record
4. Delete Record
5. Exit
Enter your choice: Enter a valid integer: 2
-----------------------------------------------------------------
| Name       | Roll Number | Semester   | Department | Marks/500  
-----------------------------------------------------------------
| David      | 12         | 1          | CP         | 19        
-----------------------------------------------------------------

Student Record System
1. Add Record
2. Display Records
3. Search Record
4. Delete Record
5. Exit
Enter your choice: Enter a valid integer: 4
Enter roll number to delete: Enter a valid integer: 12
Record deleted successfully.

Student Record System
1. Add Record
2. Display Records
3. Search Record
4. Delete Record
5. Exit
Enter your choice: Enter a valid integer: 5
Exiting program.
```

<br />


### Source Code

<pre><code language='c'>
\#include \<stdio.h\>
\#include \<stdlib.h\>
\#include \<string.h\>
\#include \<ctype.h\>

#define MAX_STUDENTS 100

// Structure to hold student data
struct Student {
    char name[50];
    int rollNumber;
    int marks;
    int semester;
    char department[20];
};

// Function to print a border for the table
void printBorder(int numColumns) {
    for (int i = 0; i < numColumns; i++) {
        printf("-------------");
    }
    printf("\n");
}

// Function to get an integer input with validation
int getIntegerInput() {
    ...
</code></pre>

> *Code is taking too long to render...*<br />
> *See full code here: * <button name='student-record-sys' language='c'>See Full Code</button>

<br />

### References

<u>[ChatGPT](https://chatgpt.com)</u>