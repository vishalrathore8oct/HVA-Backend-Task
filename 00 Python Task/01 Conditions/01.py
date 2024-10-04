# Write a program that takes a positive integer n as input and prints whether it is odd or even.
# Sample Input 1:
# 49
# Sample Output 1:
# Odd
# Sample Input 2:
# 36
# Sample Output 2:
# Even

num = int(input("Enter Number = "))

if num % 2 == 0: 
    print("Even")
else:
    print("Odd")