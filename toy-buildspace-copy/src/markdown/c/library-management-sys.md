# Library Management System

---

### Approach to creating an Library Management System where the user has the following options

1. Add book information.
2. Display book information.
3. To list all books of a given author.
4. To list the count of books in the library.

<br />
### Functionalities Required

If the user tries to add a book, they must provide the following specific information about the book:
- **Enter Book Name:**
- **Enter Author Name:**
- **Enter Pages:**
- **Enter Price:**

When the user tries to display all books of a particular author, they must enter the name of the author:
- **Enter the author’s name:**

The E-Library Management System must also be capable of counting all the books available in the library.

<br />
### Sample Input Output

```
********###### WELCOME TO E-LIBRARY #####********


1. Add book information
2. Display book information
3. List all books of given author
4. List the count of books in the library
5. Exit

Enter one of the above: 1
Enter book name = DBMS
Enter author name = Korth
Enter pages = 1360
Enter price = 890


********###### WELCOME TO E-LIBRARY #####********


1. Add book information
2. Display book information
3. List all books of given author
4. List the count of books in the library
5. Exit

Enter one of the above: 2
You have entered the following information
Book name = DBMS	 Author name = Korth	 Pages = 1360	 Price = 890.000000

********###### WELCOME TO E-LIBRARY #####********


1. Add book information
2. Display book information
3. List all books of given author
4. List the count of books in the library
5. Exit

Enter one of the above: 3
Enter author name: Korth
DBMS Korth 1360 890.000000

********###### WELCOME TO E-LIBRARY #####********


1. Add book information
2. Display book information
3. List all books of given author
4. List the count of books in the library
5. Exit

Enter one of the above: 4

Number of books in the library: 1

********###### WELCOME TO E-LIBRARY #####********


1. Add book information
2. Display book information
3. List all books of given author
4. List the count of books in the library
5. Exit

Enter one of the above: 5
```

<br />
### Source code

<pre><code language='c'>
// C program for the library Management System
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Create Structure of Library
struct library {
    char book_name[20];
    char author[20];
    int pages;
    float price;
};

int main()
{
    // Create an instance
    struct library lib[100];

    char ar_nm[30], bk_nm[30];

    // Keep track of the number of books available in the library
    int i, input, count;

    i = input = count = 0;

    // Iterate the loop
    while (input != 5) {
        printf("\n\n\*\*\*\*\*\*\*\*######"
               " WELCOME TO E-LIBRARY "
               "#####\*\*\*\*\*\*\*\*\n");
        printf("\n\n1. Add book information\n2. Display "
               "book information\n");
        printf("3. List all books of given author\n");
        printf(
            "4. List the count of books in the library\n");
        printf("5. Exit");

        // Enter the book details
        printf("\n\nEnter one of the above: ");
        scanf("%d", &input);

        // Process the input
        switch (input) {

        // Add book
        case 1:

            printf("Enter book name = ");
            scanf("%s", lib[i].book_name);

            printf("Enter author name = ");
            scanf("%s", lib[i].author);

            printf("Enter pages = ");
            scanf("%d", &lib[i].pages);

            printf("Enter price = ");
            scanf("%f", &lib[i].price);
            count++;

            break;

        // Print book information
        case 2:
            printf("You have entered the following information\n");
            for (i = 0; i < count; i++) {

                printf("Book name = %s", lib[i].book_name);
                printf("\t Author name = %s", lib[i].author);
                printf("\t Pages = %d", lib[i].pages);
                printf("\t Price = %f", lib[i].price);
            }
            break;

        // Take the author name as input
        case 3:
            printf("Enter author name: ");
            scanf("%s", ar_nm);
            for (i = 0; i < count; i++) {

                if (strcmp(ar_nm, lib[i].author) == 0)
                    printf("%s %s %d %f",
                           lib[i].book_name,
                           lib[i].author,
                           lib[i].pages,
                           lib[i].price);
            }
            break;

        // Print total count
        case 4:
            printf("\nNumber of books in the library: %d", count);
            break;
        case 5:
            exit(0);
        }
    }
    return 0;
}

</code></pre>

> *See code on github: * <button name='library-management-sys' language='c'>See Code</button>

<br />
### References

<u>[GeeksForGeeks](https://www.geeksforgeeks.org/e-library-management-system/)</u>