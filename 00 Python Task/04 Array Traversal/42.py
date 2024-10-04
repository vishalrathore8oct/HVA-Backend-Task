# You are given an integer array. You are also given a number. Print the number of times the number appears
# in the array.
# Sample Input:
# 4 7 9 10 7 14 12 4 7 27
# 7
# Sample Output:
# 3
# Explanation: The given number 7 appears 3 times in the given array

arr = [4, 7, 9, 10, 7, 14, 12, 4, 7, 27]

num = int(input("Enter Number = "))

count = 0

i = 0
while i < len(arr):
    if arr[i] == num:
        count += 1
    i += 1
print(count)