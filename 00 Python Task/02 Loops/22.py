# Write a program to calculate the factorial of a given number n.
# The factorial of a number n is the product of all positive integers less than or equal to n.
# Sample Input:
# 6
# Sample Output:
# 720
# Explanation: 720 = 6*5*4*3*2*1

num = int(input("Enter Number = "))

fact = 1

i = 1
while i <= num:
    fact *= i
    i += 1
print(fact)