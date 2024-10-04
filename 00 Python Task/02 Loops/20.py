# You are given an integer n. Print the sum of the first n Natural Numbers.
# Note: Use a loop instead of a mathematical formula.
# Sample Input:
# 7
# Sample Output:
# 28
# Explanation: Sum of 1+2+3+4+5+6+7 = 28

num = int(input("Enter Number = "))

sum = 0

i = 1
while i <= num:
    sum += i
    i += 1
print(sum)