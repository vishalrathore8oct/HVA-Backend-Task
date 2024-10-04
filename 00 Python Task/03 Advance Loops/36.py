# Print the following pattern based on the given input.
# Sample Input:
# 6
# Sample Output:
# *
# *
# *
# *
# *
# *
# Explanation: Since the input is 6, it prints a total of 6 lines. In each line, it prints only one star, but the
# leading space increases.

num = int(input("Enter Number = "))


i = 0
while i < num: 
    print((" " * i)  + "*")
    i += 1
