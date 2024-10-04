# Write a program that takes three numbers as input and prints the largest number.
# Sample Input 1:
# 15 23 16
# Sample Output 1:
# 23
# Sample Input 2:
# 8 5 9
# Sample Output 2:
# 9

num1 = int(input("Enter num1 = "))
num2 = int(input("Enter num2 = "))
num3 = int(input("Enter num3 = "))

if (num1 > num2 and num1 > num3):
    print(f"{num1} is Largest")
elif (num2 > num1 and num2 > num3):
    print(f"{num2} is Largest")
else:
    print(f"{num3} is Largest")