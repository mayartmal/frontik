#constants

#vars

#arrs

#ifs
print('if example:')

if 2 > 1:
    print('if ok')


if 2 == 1:
    print('if ok')
else:
    print('else ok')
print()

#forloop
print('for loop example:')
elems = [1, 12, 33, 2, 5]
for item in elems:
    print(item)
print()


#function
print('function loop example:')
def neFunction():
    return 13

a = neFunction()
print('function result is - ', a)
print()

#classes and methods
print('simple class and method example:')
class FirstClass:

    count = 0
    color = "red"

    #method without args
    def printColor(self):
        print ('object color is ', self.color)
    #method with args
    def setColor(self, newColor):
        self.color = newColor

obj1 = FirstClass()
obj1.printColor()
obj1.setColor("green")
obj1.printColor()
print()

#constructor of class:
print('class construction example:')
class SecondClass:

    def __init__(self, x, y):
        self.xValue = x
        self.yValue = y

    def printValues(self):
        print("x = ", self.xValue)
        print("y = ", self.yValue)

obj2 = SecondClass(13, 31)
obj2.printValues()
print()
