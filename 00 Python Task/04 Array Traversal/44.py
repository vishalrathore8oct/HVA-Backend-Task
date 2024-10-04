# You are given an integer array. Find the average of all the numbers present in the array.
# Sample Input:
# 10 5 6 3 4 3 5 6
# Sample Output:
# 5.25
# Explanation: There are 8 elements in the given array. Sum = 10+5+6+3+4+3+5+6 = 42. Average = 42/8 =
# 5.25

arr = [10, 5, 6, 3, 4, 3, 5, 6]

sum = 0

i = 0
while i < len(arr):
    sum += arr[i]
    i += 1

average = sum / len(arr)
print(average)