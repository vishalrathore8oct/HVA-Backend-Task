# You are given a String. Count the number of vowels and consonants the string has. Print the number of
# vowels followed by the number of consonants.
# Note: The string may contain other character like space and full stop.
# Vowels are alphabets belonging to the following group - {a, e, i, o u}. Consonants are rest of the alphabets
# that do not belong to the group - {a, e, i, o u}.
# Sample Input:
# Hello World
# Sample Output:
# 3 7
# Explanation: The string has 3 vowels and 7 consonants.


string = "Hello World"

vowels = 0
consonants = 0


i = 0
while i < len(string):
    if "a" <=  string[i].lower() <= "z":
        if string[i] == "a" or string[i] == "e" or string[i] == "i" or string[i] == "o" or string[i] == "u":
            vowels += 1
        else:
            consonants += 1
    i += 1
print(vowels, consonants)   


