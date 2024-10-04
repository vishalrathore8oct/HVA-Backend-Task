# You are given an integer n. Print all the square numbers less than equal to n.
# Sample Input:
# 50
# Sample Output:
# 1 4 9 16 25 36 49

num = int(input("Enter Number = "))

i = 1
while i <= num // 2:
    if (i * i <= num):
        print(i * i, end=" ")
    i += 1
print()