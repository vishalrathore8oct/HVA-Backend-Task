# You are given an integer array. Print the number of odd numbers in the array.
# Sample Input:
# 4 7 9 10 13 17
# Sample Output:
# 4
# Explanation: There are 4 odd numbers in the given numbers: 7, 9, 13, 17.

arr = [4, 7, 9, 10, 13, 17] 

count = 0

i = 0
while i < len(arr):
    if (arr[i] % 2 != 0):
        count += 1
    i += 1
print(count)
