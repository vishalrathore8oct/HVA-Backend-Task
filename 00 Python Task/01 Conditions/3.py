# Write a program that categorizes a person's age into different life stages based on the following
# conditions:
# ● 0-2 years: Infant
# ● 3-12 years: Child
# ● 13-19 years: Teenager
# ● 20-65 years: Adult
# ● Above 65 years: Senior
# The program takes an age as input and prints the age group category the person belongs to.
# Sample Input 1:
# 15
# Sample Output 1:
# Teenager
# Sample Input 2:
# 2
# Sample Output 2:
# Infant
# Sample Input 3:
# 72
# Sample Output 3:
# Senior

age = int(input("Your Age = "))

if (age >= 0 and age <= 2): 
    print("Infant")
elif (age >= 3 and age <= 12): 
    print("Child")
elif (age >= 13 and age <= 19): 
    print("Teenager")
elif (age >= 20 and age <= 65): 
    print("Adult")
elif (age > 65): 
    print("Senior")
else: 
    print("Please Enter a valid Age")