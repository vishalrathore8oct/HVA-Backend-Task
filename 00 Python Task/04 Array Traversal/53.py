# You are given an array of integers. Check if the array is in Ascending Order. If yes, print "Yes", else print
# "No.
# Sample Input 1:
# 3 5 10 13 16 12 14
# Sample Output 1:
# No
# Explanation 1: The given array is not in ascending order.
# Sample Input 2:
# 3 5 10 13 16 25 33
# Sample Output 2:
# Yes
# Explanation 2: The given array is in ascending order.

# arr = [3, 5, 10, 13, 16, 12, 14 ]
arr = [3, 5, 10, 13, 16, 25, 33 ]

i = 0
while i < len(arr) - 1:
    if (arr[i] > arr[i + 1]):
        ans = "No"
        break;
    else:
        ans = "Yes"
    i += 1
print(ans)