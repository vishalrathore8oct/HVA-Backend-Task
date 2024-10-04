# You are given an integer n. Print yes, if it is an Armstrong Number. Print no, if it is not an Armstrong
# Number.
# An Armstrong Number is a positive number that equals the sum of its digits, each raised to the power of
# the number of digits.
# Sample Input 1:
# 1634
# Sample Output 1:
# Yes
# Explanation 1: 1634 has 4 digits, so we raise each digit to the power of 4. 1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296
# + 81 + 256 = 1634
# Sample Input 2:
# 153
# Sample Output 2:
# Yes
# Explanation 2: 153 has 3 digits, so we raise each digit to the power of 3. 1^3 + 5^3 + 3^3 = 1 + 125 + 27 =
# 153

num = int(input("Enter Number = "))

num1 = num
num2 = num

armNum = 0

powerCount = 0

while num1 != 0:
    powerCount += 1
    num1 //= 10

while num2 != 0:
    armNum += (num2 % 10) ** powerCount
    num2 //= 10

if armNum == num: 
    print("Yes")
else: 
    print("No")

