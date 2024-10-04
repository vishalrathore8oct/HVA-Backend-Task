# You are given an integer n. Print first n terms of the series 3, 5, 7, 9, 11...
# Sample Input:
# 7
# Sample Output:
# 3 5 7 9 11 13 15
# Explanation: The series starts with 3 and every time adds 2 to get the next term.

num = int(input("Enter Number = "))

incre = 2

i = 1
while i <= num:
    print(i + incre, end=" ")
    incre += 1
    i += 1
print()