# You are given an integer array. Add all the numbers present in the array till you encounter a 0 and print the
# sum. If no 0 is present, add till the end.
# Sample Input:
# 10 5 6 3 0 4 3 5 6
# Sample Output:
# 24
# Explanation: 10+5+6+3 = 24

arr = [10, 5, 6, 3, 0, 4, 3, 5, 6]

sum = 0

i = 0
while i < len(arr):
    if arr[i] == 0:
        break
    sum += arr[i]
    i += 1
print(sum)