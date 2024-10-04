# Print the following pattern based on the given input.
# Sample Input:
# 6
# Sample Output:
# *
# **
# ***
# ****
# *****
# ******
# Explanation: Since the input is 6, it prints a total of 6 lines. In each line, the star count increases

num = int(input("Enter Number = "))

i = 1
while i <= num:
    print("*" * i, end="\n")
    i += 1


