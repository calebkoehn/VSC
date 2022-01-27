def reverseString(str):
    newArr = []

    for i in range(0, len(str), 1):
        newArr.append(str[i])
    if len(str) < 1:
        print("string is too short!")

    return newArr