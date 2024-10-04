# You are given an integer n. Print the multiplication table of n till count 10.
# Sample Input:
# 7
# Sample Output:
# 7 14 21 28 35 42 49 56 63 70
# Explanation: Print 7*1, 7*2, ..., 7*10.

num = int(input("Enter Number = "))

i = 1
while i <= 10:
    print(num * i, end=" ")
    i += 1
print()