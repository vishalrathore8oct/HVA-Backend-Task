# You are given a string S. You are also given a character c. Check if the character c is present in the string S.
# If present print yes, else print no.
# Sample Input 1:
# abcdefgh
# f
# Sample Output 1:
# Yes
# Sample Input 2:
# abcdefgh
# r
# Sample Output 2:
# No

string = "abcdefgh"
char = "f"

i = 0
while i < len(string):
    if ( string[i] == char):
        ans = "Yes"
        break
    else:
        ans = "No"
    i += 1
print(ans)