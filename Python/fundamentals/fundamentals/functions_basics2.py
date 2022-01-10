def countdown(num):
    result = []
    for x in range(num,-1,-1):
        result.append(x)
    return result

print (countdown(5))

def print_and_return(list):
    print(list[0])
    return list[1]


print_and_return([1,2])

def first_plus_length(list):
    return list[0] + len(list)


print(first_plus_length([1,2,3,4,5]))


