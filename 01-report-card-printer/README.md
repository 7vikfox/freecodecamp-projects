

📘 **README — Report Card Printer**

🎯 **Project Title:**

**Student Report Card Printer (Basic Python)**



📝 **Overview**

This Python program simulates a very basic report card system by storing a student's details in variables and printing them.
Along with the values, it also prints their data types so the user can understand how Python handles different kinds of data.



📂 **What the Program Prints**

The script prints:

✔ Student's Name (string)
✔ Student Status: Is a student or not (boolean)
✔ Student's Age (integer)
✔ Student's Score (float)
✔ Score Data Type Validation (using `isinstance()`)



**Code Explanation**


name = 'Alice'
print(name, type(name))

is_student = True
print(is_student, type(is_student))

age = 20
print(age, type(age))

score = 80.5
print(isinstance(score, float))
print(score,type(score))




📤 **Program Output Example**

When executed, the output looks like a simple printed report:


Alice <class 'str'>
True <class 'bool'>
20 <class 'int'>
True
80.5 <class 'float'>



**Concepts Learned**

✔ Variables
✔ Basic data types: `str`, `bool`, `int`, `float`
✔ Printing with `print()`
✔ Type checking with `type()` and `isinstance()`

These are essential Python fundamentals and are the building blocks for future programs.





