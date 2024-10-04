# 39. Square - Each Array Element:
# You are given an integer array. Traverse through the array and print the square for each element.
# Sample Input:
# 5 3 4 7 2 9
# Sample Output:
# 25 9 16 49 4 81

arr = [5, 3, 4, 7, 2, 9]

i = 0
while i < len(arr):
    print(arr[i] * arr[i], end=" ")
    i += 1
print()