# You are given a String and and an index. Capitalize the character at the nth position in the given String.
# Note: You can consider the index to start from 0.
# Sample Input:
# programming
# 6
# Sample Output:
# prograMming


string = "programming"
index = int(input("Enter Index = "))

new_string = ""

i = 0
while i < len(string):
    if i == index:
        new_string += string[i].upper()
    else:
        new_string += string[i]
    i += 1
print(new_string)
