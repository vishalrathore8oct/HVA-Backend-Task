# You are given a string. Create a new string that contains each character of the original string only once,
# preserving the order of their first occurrences.
# Sample Input:
# programming
# Sample Output:
# progamin
# Explanation: We print a new string removing the repeating characters. R, m and g were repeating in the
# given string "programming" and hence were removed from the new string.

S = "programming"
new_string = ""  

i = 0
while i < len(S):
    j = 0
    is_duplicate = False
    while j < len(new_string):
        if S[i] == new_string[j]:
            is_duplicate = True
            break
        j += 1
    if not is_duplicate:
        new_string += S[i]
    i += 1

print(new_string)
