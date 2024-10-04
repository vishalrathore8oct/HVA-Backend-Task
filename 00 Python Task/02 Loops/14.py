# You are given an integer n. Print the first n square numbers.
# Sample Input:
# 7
# Sample Output:
# 1 4 9 16 25 36 49

num = int(input("Enter Number = "))

i = 1
while i <= num:
    print(i * i, end=" ")
    i += 1
print()