# Write a program that takes a number n as input and prints all the factors of the number.
# Sample Input:
# 24
# Sample Output:
# 1 2 3 4 6 8 12 24
# Explanation: The factors of 24 are 1, 2, 3, 4, 6, 8, 12, 24.

num = int(input("Enter Number = "))

i = 1
while i <= num:
    if num % i == 0:
        print(i, end=" ")
    i += 1
print()