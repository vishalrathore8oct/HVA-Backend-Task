# You are given an integer array. Multiply all the numbers present in the array and print the final product.
# Sample Input:
# 3 2 5 1 4
# Sample Output:
# 120
# Explanation: 3*2*5*1*4 = 120

arr = [3, 2, 5, 1, 4]

product = 1

i = 0
while i < len(arr):
    product *= arr[i]
    i += 1
print(product)