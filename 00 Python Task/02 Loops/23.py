# Write a program that takes a number n as input and prints the number of digits the number has.
# Sample Input:
# 1132
# Sample Output:
# 4

num = int(input("Enter Number = "))

count = 0

while num != 0:
    num //= 10
    count += 1
print(count)