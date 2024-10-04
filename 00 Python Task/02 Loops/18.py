# You are given an integer n. Print first n terms of the series 2, 5, 8, 11, 14...
# Sample Input:
# 7
# Sample Output:
# 2 5 8 11 14 17 20
# Explanation: The series starts with 2 and every time adds 3 to get the next term.

num = int(input("Enter Number = "))

incre = 1

i = 1
while i <= num:
    print(i + incre, end=" ")
    incre += 2
    i += 1
print()

