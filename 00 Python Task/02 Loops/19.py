# You are given an integer n. Print first n terms of the series 3, 6, 12, 24, 48...
# Sample Input:
# 7
# Sample Output:
# 3 6 12 24 48 96 192
# Explanation: The series starts with 3 and every time multiplies 2 to get the next term

num = int(input("Enter Number = "))

term = 3

count = 1
while count <= num:
    print(term, end=" ")
    term *= 2
    count += 1
print()