# Write a program that takes a number n as input and prints the reverse of the given number.
# Sample Input:
# 1132
# Sample Output:
# 2311
# Explanation: The reverse of 1132 is 2311.

num = int(input("Enter Number = "))

revNum = 0

while num != 0:
    revNum = (revNum * 10) + (num % 10)
    num //= 10
print(revNum)