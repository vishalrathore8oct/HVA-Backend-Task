# You are given a sentence S. You are also given a word W. Check if the word W is present in the sentence S.
# If present print yes, else print no.
# The input word W will have no space in between.
# Sample Input 1:
# How are you doing today?
# today
# Sample Output 1:
# Yes
# Sample Input 2:
# How are you doing today?
# do
# Sample Output 2:
# No

S = "How are you doing today ?" 
W = input("Enter your Word = ")


found = False

i = 0
while i <= len(S) - len(W):
    substring = ""
    k = 0
    while k < len(W):
        substring += S[i + k]
        k += 1
    if substring == W:
        if (i == 0 or S[i - 1] == ' ') and (i + len(W) == len(S) or S[i + len(W)] == ' '):
            found = True
            break
    i += 1

if found:
    print("Yes")
else:
    print("No")