# You are given an integer n. Print yes, if it is a Perfect Number. Print no, if it is not a Perfect Number.
# A Perfect Number is a positive integer that is equal to the sum of its positive divisors, excluding the
# number itself.
# Sample Input 1:
# 28
# Sample Output 1:
# Yes
# Explanation 1: The factors of 28 are 1, 2, 4, 7, 14, 28. We don't consider the number itself. 28 =
# 1+2+4+7+14.
# Sample Input 2:
# 24
# Sample Output 2:
# No
# Explanation 2: The factors of 24 are 1, 2, 3, 4, 6, 8, 12, 24. We don't consider the number itself. But 24 !=
# 1+2+3+4+6+8+12.

num = int(input("Enter Number = ")) 

sum = 0

i = 1 
while i < num:
    if (num % i == 0):
        sum += i 
    i += 1
print(sum)

if (sum == num):
    print("Yes")
else: 
    print("No")