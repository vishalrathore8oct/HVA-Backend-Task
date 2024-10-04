# You are given an integer array. Print the maximum sum of two consecutive integers in the given array.
# Sample Input:
# 3 6 2 1 8 2 5 7 1
# Sample Output:
# 12
# Explanation: 5+7 = 12 is the maximum sum of two consecutive integers in the given array.

arr = [3, 6, 2, 1, 8, 2, 5, 7, 1]

maximum = 0

i = 0
while i < len(arr) - 1:
    if arr[i] + arr[i + 1] > maximum:
        maximum = arr[i] + arr[i + 1]
    i += 1
print(maximum)  
