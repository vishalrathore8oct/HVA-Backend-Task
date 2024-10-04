# You are given an integer array. Add all the numbers present in the array and print the sum.
# Sample Input:
# 10 5 6 3 4 3 5 6
# Sample Output:
# 42
# Explanation: 10+5+6+3+4+3+5+6 = 42

arr = [10, 5, 6, 3, 4, 3, 5, 6]

sum = 0

i = 0
while i < len(arr):
    sum += arr[i]
    i += 1
print(sum)