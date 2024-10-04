# You are given an integer array. Traverse through the array and for each element, if the element is odd print
# "Odd", else print "Even".
# Sample Input:
# 4 7 9 10 13 17
# Sample Output:
# Even
# Odd
# Odd
# Even
# Odd
# Odd


arr = [4, 7, 9, 10, 13, 17]

i = 0
while i < len(arr):
    if arr[i] % 2 == 0:
        print("Even")
    else:
        print("Odd")
    i += 1