# You are given an integer n. Print the sum of the first n terms of the series 3, 5, 7, 9, 11....
# Note: Use a loop instead of a mathematical formula.
# Sample Input:
# 7
# Sample Output:
# 63
# Explanation: Sum of 3+5+7+9+11+13+15 = 63

num = int(input("Enter Number = "))

sum = 0

term = 3

count = 1
while count <= num:
    sum += term
    term += 2
    count += 1
print(sum)