# Write a program that takes a number n as input and prints the first n terms of the Fibonacci Series.
# The Fibonacci Series is a series of numbers where each number is the sum of the two preceding ones,
# usually starting with 0 and 1.
# Series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
# Sample Input:
# 10
# Sample Output:
# 0 1 1 2 3 5 8 13 21 34

num = int(input("Enter Number = "))

preValue = 0
nexValue = 1

i = 0
while i < num:
    if(i == 0):
        print(0, end=" ")
    elif(i == 1):
        print(1, end=" ")
    else:
        totalValue = preValue + nexValue
        print(totalValue, end=" ")
        preValue = nexValue
        nexValue = totalValue
    i += 1
print()