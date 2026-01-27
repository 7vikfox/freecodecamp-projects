
 📄 **Report Card Printer (Python)**

This is a simple Python program that takes a student's name and marks for four subjects, calculates the total and percentage, and prints a formatted report card.



🚀 **Features**

* Takes student name as input
* Accepts marks for:

  * Math
  * Science
  * English
  * Hindi
* Calculates:

  * Total marks
  * Percentage
* Displays a clean report card in terminal


 🧠 **Concepts Used**

This project helps you practice:

* `input()` and user interaction
* Type conversion using `int()`
* Variables and arithmetic operations
* Basic formatting using f-strings
* Beginner-level logic (addition + averaging)



📌 **Code Example**

python
name = input("Enter student name: ")
math = int(input("Math marks: "))
science = int(input("Science marks: "))
english = int(input("English marks: "))
hindi = int(input("Hindi marks: "))

total = math + science + english + hindi
percent = total / 4

print(f"Report Card for {name}")
print(f"Math: {math}")
print(f"Science: {science}")
print(f"English: {english}")
print(f"Hindi: {hindi}")
print(f"Total: {total}")
print(f"Percentage: {percent}%")




🖥 **Sample Input**


Enter student name: Alice
Math marks: 90
Science marks: 85
English marks: 80
Hindi marks: 75


 🧾 **Sample Output**


Report Card for Alice
Math: 90
Science: 85
English: 80
Hindi: 75
Total: 330
Percentage: 82.5%







