# You are given a String and a Character. Count how many times the Character is present in the given String.
# If the Character is not present in the String, print "No".
# Sample Input 1:
# Hello World
# l
# Sample Output 1:
# 3
# Explanation 1: The Character l is present 3 times in the String "Hello World".
# Sample Input 2:
# Hello World
# a
# Sample Output 2:
# No
# Explanation 2: The Character a is not present in the String "Hello World".

string = "Hello World"
word = "l"

count = 0
i = 0
while i < len(string):
    if string[i] == word:
        count += 1
    i += 1

if count == 0:
    print("No")
else:
    print(count)