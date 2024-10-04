# You are given an integer n. Print * n times in the same line with space in between.
# Sample Input:
# 5
# Sample Output:
# * * * * *

num = int(input("Enter Number = "))

i = 1
while i <= num:
    print("*", end=" ")
    i += 1
print()