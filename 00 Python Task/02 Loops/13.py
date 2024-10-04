# You are given an integer n. Print the first n odd numbers.
# Sample Input:
# 7
# Sample Output:
# 1 3 5 7 9 11 13

num = int(input("Enter Number = "))

i = 1
while i <= num * 2:
    if (i % 2 != 0):
        print(i, end=" ")
    i += 1
print()