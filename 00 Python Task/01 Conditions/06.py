# Write a program that takes three numbers as input and prints the numbers in ascending order.
# This program doesn't use an array.
# Sample Input 1:
# 15 23 16
# Sample Output 1:
# 15 16 23
# Sample Input 2:
# 8 5 9
# Sample Output 2:
# 5 8 9

num1 = int(input("Enter num1 = "))
num2 = int(input("Enter num2 = "))
num3 = int(input("Enter num3 = "))

if (num1 > num2 and num1 > num3):
    largest = num1
    if (num2 > num3):
        middle = num2
        samllest = num3
    else:
        middle = num3
        samllest = num2
elif (num2 > num1 and num2 > num3):
    largest = num2
    if (num3 > num1):
        middle = num3
        samllest = num1
    else:
        middle = num1
        samllest = num3
else: 
    largest = num3
    if (num1 > num2):
        middle = num1
        samllest = num2
    else:
        middle = num2
        samllest = num1

print(samllest, middle, largest)

