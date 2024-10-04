# Write a program that calculates the sum of all the digits in a given number n.
# Sample Input:
# 1132
# Sample Output:
# 7
# Explanation: 7 = 1+1+3+2

num = int(input("Enter Number = "))

sum = 0

while num != 0:
    sum += num % 10
    num //= 10
print(sum)