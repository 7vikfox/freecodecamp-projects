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
