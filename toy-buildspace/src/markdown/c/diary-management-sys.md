# Diary Management System

---

### Approach

The Diary Management System is designed to handle diary entries through a command-line interface. It supports adding, editing, deleting, saving, and loading diary entries from a file.

<br />
### Functionality Required

1. **Add Entry**: Allows the user to add a new diary entry with a date, title, and content.
2. **Edit Entry**: Enables the user to edit the title and content of an existing diary entry.
3. **Delete Entry**: Allows the user to delete a specific diary entry by its index.
4. **Save Entries**: Saves all the diary entries to a file.
5. **Load Entries**: Loads diary entries from a file at the start of the program.

<br />
### Sample Input Output

```
Entries loaded successfully.

====== Diary Management System Menu ======
1. Add Entry
2. Edit Entry
3. Delete Entry
4. Save Entries
5. Exit
==========================================
Enter your choice: 1

Enter date (dd/mm/yyyy): 01/07/2024
Enter title: First Entry
Enter content: This is my first entry
Entry added successfully.

====== Diary Management System Menu ======
1. Add Entry
2. Edit Entry
3. Delete Entry
4. Save Entries
5. Exit
==========================================
Enter your choice: 2

Enter the index of the entry to edit (1-1): 1
Enter new title: This is my first entry
Enter new content: Hey! I'm entering my first entry 
Entry edited successfully.

====== Diary Management System Menu ======
1. Add Entry
2. Edit Entry
3. Delete Entry
4. Save Entries
5. Exit
==========================================
Enter your choice: 4
Entries saved to file successfully.

====== Diary Management System Menu ======
1. Add Entry
2. Edit Entry
3. Delete Entry
4. Save Entries
5. Exit
==========================================
Enter your choice: 3

Enter the index of the entry to delete (1-1): 1
Entry deleted successfully.

====== Diary Management System Menu ======
1. Add Entry
2. Edit Entry
3. Delete Entry
4. Save Entries
5. Exit
==========================================
Enter your choice: 5
Exiting program.
```

<br />

### Sourse code

<pre><code language='c'>
\#include \<stdio.h\>
\#include \<stdlib.h\>
\#include \<string.h\>

\#define MAX_ENTRIES 100
\#define MAX_TITLE_LENGTH 50
\#define MAX_CONTENT_LENGTH 500

// Structure to represent a diary entry
struct Entry {
    char date[20];
    char title[MAX_TITLE_LENGTH];
    char content[MAX_CONTENT_LENGTH];
};

// Function prototypes
void printMenu();
void addEntry(struct Entry diary[], int *count);
void editEntry(struct Entry diary[], int count);
void deleteEntry(struct Entry diary[], int *count);
void saveEntries(struct Entry diary[], int count);
void loadEntries(struct Entry diary[], int *count);

int main() { 
...
    
</code></pre>

> *Code is taking too long to render...*<br />
> *See full code here: * <button name='diary-management-sys' language='c'>See Full Code</button>

<br />

### References

<u>[ChatGPT](https://chatgpt.com)</u>