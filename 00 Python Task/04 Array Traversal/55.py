# You are given an array of integers and another integer K. Print the first element of the array that is greater
# than K. If there are no elements greater than K, print No.
# Sample Input 1:
# 3 5 10 25 16 12 14
# 11
# Sample Output 1:
# 25
# Explanation 1: In the given array, the first element greater than 11 is 25.
# Sample Input 2:
# 3 5 10 13 16 12 14
# 19
# Sample Output 2:
# No
# Explanation 2: In the given array, there are no elements greater than 19.

# arr = [3, 5, 10, 25, 16, 12, 14]
arr = [3, 5, 10, 13, 16, 12, 14]

k = int(input("Enter Number K = "))

i = 0
while i < len(arr):
    if arr[i] > k:
        ans = arr[i]
        break;
    else: 
        ans = "No"
    i += 1
print(ans)