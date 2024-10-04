# You are given an integer n. Print all the even numbers less than equal to n.
# Sample Input:
# 14
# Sample Output:
# 2 4 6 8 10 12 14

num = int(input("Enter Number = "))

i = 1
while i <= num:
    if (i % 2 == 0):
        print(i, end=" ")
    i += 1
print()