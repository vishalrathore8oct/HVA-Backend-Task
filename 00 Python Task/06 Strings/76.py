# Write a program that takes a string S as input and checks if the string S satisfies all the following conditions
# to be a strong password:
# ● Contains at least 8 characters.
# ● Contains at least one lowercase character.
# ● Contains at least one uppercase character.
# ● Contains at least one number.
# ● Contains at least one special character.
# If the string S satisfies all conditions, print yes, else print no.
# Sample Input 1:
# Abcd@123
# Sample Output 1:
# Yes
# Sample Input 2:
# Xyz123
# Sample Output 2:
# No

string = input("Enter String = ")

lowerVal = 0
upperVal = 0
numberVal = 0
specialVal = 0

lengthVal = len(string)

i = 0
while i < len(string):
    if "a" <= string[i] <= "z":
        lowerVal += 1
    elif "A" <= string[i] <= "Z":
        upperVal += 1
    elif "0" <= string[i] <= "9":
        numberVal += 1
    else: 
        specialVal += 1
    i += 1


if (lengthVal >= 8 and specialVal >= 1 and numberVal >= 1 and upperVal >= 1 and lowerVal >= 1):
    print("Yes")
else:
    print("No")


