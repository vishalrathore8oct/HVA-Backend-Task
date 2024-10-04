# Write a program that suggests an activity based on the current temperature (in Celsius), following these
# guidelines:
# ● Above 30°C: "It's hot. Let's go swimming!"
# ● 20°C to 30°C: "Perfect for a picnic."
# ● 10°C to 19°C: "Maybe wear a jacket?"
# ● Below 10°C: "Too cold! Best to stay indoors."
# The program takes the current temperature as input and prints the suggested activity.
# Sample Input 1:
# 15
# Sample Output 1:
# Maybe wear a jacket?
# Sample Input 2:
# 8
# Sample Output 2:
# Too cold! Best to stay indoors.
# Sample Input 3:
# 38
# Sample Output 3:
# It's hot. Let's go swimming!

temperature = int(input("Enter Temperature = "))

if temperature < 10:
    print("Too cold! Best to stay indoors.")
elif temperature >= 10 and temperature <= 19:
    print("Maybe wear a jacket?")
elif temperature >= 20 and temperature <= 30:
    print("Perfect for a picnic.")
else:
    print("It's hot. Let's go swimming!")