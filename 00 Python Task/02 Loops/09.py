# You are given an integer n. Print the first n natural numbers.
# Sample Input:
# 7
# Sample Output:
# 1 2 3 4 5 6 7

num = int(input("Enter Number = "))

i = 1
while i <= num:
    print(i, end=" ")
    i += 1
print()