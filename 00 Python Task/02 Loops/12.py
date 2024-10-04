# You are given an integer n. Print the first n even numbers.
# Sample Input:
# 7
# Sample Output:
# 2 4 6 8 10 12 14

num = int(input("Enter Number = "))

i = 1
while i <= num * 2:
    if (i % 2 == 0):
        print(i, end=" ")
    i += 1
print()