# You are given an integer array. Find the minimum element of the array.
# Sample Input:
# 10 5 6 3 4 3 5 6
# Sample Output:
# 3
# Explanation: Here 3 is the minimum number. But since 3 is present more than once, we print the index of
# the first occurrence.

arr = [10, 5, 6, 3, 4, 3, 5, 6]

minimum = arr[0]

i = 0
while i < len(arr):
    if arr[i] < minimum:
        minimum = arr[i]
    i += 1
print(minimum)