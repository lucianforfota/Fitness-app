import numbers


def sum(first, second):
    return first + second

def getEven(anything):
    return [p for p in anything if p % 2 == 0]

# a = 5
# b = 8

# c = a + b
# print(c)

# c = sum(a, b)
# print(c)
# d = c
# for i in lstplm:
#     if i % 2 == 1: 
#         print(i)

# print(sum(4,6))
print(sum(4,6))
print(getEven([7,10,11,15,12,17,20,100,102]))

l1 = [1, 2, 3, 4, 5]
l2 = [1,2,7,9,11]

print(getEven(l1))




