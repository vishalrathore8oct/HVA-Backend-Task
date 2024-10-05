# You are given an array of integers. Check if the given array is a Palindrome. If it is a Palindrome array, print
# yes, else print no.
# Note: A Palindrome Array is when the reverse of the array is the same as the original array.
# Sample Input 1:
# 11 1 13 21 3 7
# Sample Output 1:
# No
# Sample Input 2:
# 17 1 13 1 17
# Sample Output 2:
# Yes
# Explanation 2: The reverse of the array reads same as the original array

# arr = [11, 1, 13, 21, 3, 7]
arr = [17, 1, 13, 1, 17]


newArr = []

i = len(arr) - 1
while i >= 0:
    newArr.append(arr[i])
    i -= 1


if arr == newArr:
    print("Yes")
else:
    print("No")