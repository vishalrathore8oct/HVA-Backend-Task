# You are given an integer array. Find the index of the minimum element of the array. If there are multiple
# occurrences of the minimum number, print the index of the first occurrence of the minimum number.
# Note: The index will be calculated from 1.
# Sample Input:
# 10 5 6 3 4 3 5 6
# Sample Output:
# 4
# Explanation: Here 3 is the minimum number. But since 3 is present more than once, we print the index of
# the first occurrence.

arr = [10, 5, 6, 3, 4, 3, 5, 6]

minimum = arr[0]
index = 0

i = 0
while i < len(arr):
    if arr[i] < minimum:
        minimum = arr[i]
        index = i
    i += 1
index += 1
print(index)