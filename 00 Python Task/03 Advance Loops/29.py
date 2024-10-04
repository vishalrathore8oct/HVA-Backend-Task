# Write a program that takes a Binary Number B as input and prints the Decimal equivalent of the given
# input.
# Sample Input:
# 1000
# Sample Output:
# 8

biNum = int(input("Enter Binary = "))

deciNum = 0
power = 0

while biNum != 0:
    deciNum += (biNum % 10) * (2 ** power)
    biNum //= 10
    power += 1
print(deciNum)