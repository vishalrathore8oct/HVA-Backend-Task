# Write a program that takes a student's score (out of 100) and outputs their grade based on the following
# conditions:
# ● 90-100: Grade A
# ● 80-89: Grade B
# ● 70-79: Grade C
# ● 60-69: Grade D
# ● Below 60: Grade F
# Sample Input 1:
# 78
# Sample Output 1:
# C
# Sample Input 2:
# 90
# Sample Output 2:
# A
# Sample Input 3:
# 48
# Sample Output 3:
# F

grade = int(input("Your Score = "))

if (grade >= 0 and grade < 60): 
    print("Grade F")
elif (grade >= 60 and grade < 70): 
    print("Grade D")
elif (grade >= 70 and grade < 80): 
    print("Grade C")
elif (grade >= 80 and grade < 90): 
    print("Grade B")
elif (grade >= 90 and grade <= 100): 
    print("Grade A")
else: 
    print("Please Enter score out of 100")