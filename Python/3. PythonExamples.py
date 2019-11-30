# -----------------------------
# ---------- Imports ----------
# -----------------------------

# imports should always be at the top of the page

# if you want to import multiple modules you would place each on a seperate line
import random
import re

# import a class from a module
# from (scriptName)myModule import (class)mod1, mod2, mod3





# -----------------------------
# --------- Variables ---------
# -----------------------------

# Defining variables

# Strings
greeting = "Hello, how are you?"
greeting2 = '"Hello, how are you?" she said'
strNum = '5'

# escape charaters in strings
testEscape = 'don\'t'  # or use the escaping char to allow the character \

# useing regular exprestions to sanatize a string // make sure to import the module first
newTestString = re.sub('[a-z]','',greeting2)

# Numbers
aNum = 1
newnum = 2

#convert string to number
testStrnum = int('7')

# How to use a number in a string
inclueNum = 'Andrew Gardner has ' + str(6) + ' bucks'

# doing math inside a string
inclueNum2 = 'Andrew Gardner has ' + str(6*4) + ' bucks'

# Boolean - True / False is case sensitive
true1 = 5==5 # = True
false1 = 5==4 # = False


true2 = 5 is 5 # = True
false2 = 5 is 4 # = False


true3 = 5 is not 4 # = True
false3 = 5 is not 5 # = False


# -----------------------------
#variables are scopp limited.
# this works like js ES6 'let' and 'const'... the var will not allow you to edit it unless you call a variable that is not define with in a function... thus a globasl variable.

previousTest = 10
runTest = True

def doAThing(): # this is a function and covered below
    global runTest  # = the run variable that was defined out side this function on the global level
    global previousTest

    print(previousTest,'|',runTest)
doAThing()




# -----------------------------
# ------ Calling the URL  -----
# -----------------------------

# you need to download 2 packages to help with the url
# pip3 install requests in the venv console
# pip3 install pillow in the venv console



# ------ downloading a file  -----


import requests
from io import BytesIO
from PIL import Image


# set the url of the file to a var
r1 = requests.get('https://wallpapercave.com/wp/6TQsohO.jpg')
r2 = requests.get('https://wallpapercave.com/wp/vZoesBr.png')

# find the status of the file using status_code. 200 = all is good
print('status:',r1.status_code)
print('status:',r2.status_code)

# get infomration about the image
image1 = Image.open(BytesIO(r1.content))
image2 = Image.open(BytesIO(r2.content))

# set the location of where you want to place the file you are to download
path1 = './image1.'+image1.format
path2 = './image2.'+image2.format

# display the imaformtion from the images
print(image1.size, image1.format, image1.mode)
print(image2.size, image2.format, image2.mode)

#download the file
try:
    image1.save(path1, image1.format)
    image2.save(path2, image2.format)
except IOError:
    print('download failed')






# -----------------------------
# ------------ Math  ----------
# -----------------------------

def add(x,y):
    return x+y

def subtract(x,y):
    return x-y

def multiply(x,y):
    return x*y

def divide(x,y):
    return x/y


addTest = add(3,5)
subtractionTest = subtract(3,5)
multiplyTest = multiply(3,5)
divisionTest = divide(3,5)

print(addTest)
print(subtractionTest)
print(multiplyTest)
print(divisionTest)






# -----------------------------
# ----- Messaging / Print  ----
# -----------------------------

# How to how to use / print your variables

# print is how you write messages / values to console

# there are 2 ways to do it
answer = 'blue'
print('Yor answer is: ' + answer)  # note the use of +
print('Yor answer is:', answer)  # note the use of ,


# concatinating string
fName = 'Andrew'
lName = 'Gardner'
print(fName+' '+lName)


# this will follow math order of operations 2 * 2 + 1
aNum2 = 1
newnum2 = 2
print(aNum2 + newnum2 * newnum2)  # = 5

# True / False
true4 = 5 == 5 # = True
false4 = 5 is not 5 # = False
print(true4,'|',false4)







# -----------------------------
# ------ Lists = Array --------
# -----------------------------

# create list
names = ['Andrew', 'Bob', 'Dan', 'Mary']

# call a value from the list
secondName = names[1]
print (secondName)







# -----------------------------
# -- Dictionaries = Objects ---
# -----------------------------

# creating the dictionary
Person = {'Name':'Andrew','Age':35,'Pet':'Cat'}

# you can call the value from its key by calling it directly after
personName = Person['Name']
personPet = Person['Pet']
print (personName+ ' has a pet '+personPet)







# -----------------------------
# --------- Functions ---------
# -----------------------------

# print text to screen
print('print')

testStr = str(5)
print(testStr) # ='5'

# convert a number only string to a number int('5')=5
testNum = int('5')
print(testNum) # = 5

# convert a string to a number
testFloat = float('6.5')
print(testFloat) # =6.5

# convert string "True" to a boolean True value bool('True')
testBool = bool('True')
print(testBool)

# how many items are in a list
testLen = len(['Andrew','Bob','Bill','Jane'])
print(testLen)

# assort an array by hi to low
testSort = sorted(['a','A','f','O','34','87','Q'])
print(testSort)

# split a string into a list
testSplit = 'Andrew:Gardner:Dog:Cat'
print(testSplit.split(':'))

Greeting = 'Hello, how are you?'
print(Greeting)

Greeting = Greeting.split(',')[1]
print(Greeting)

print(Greeting+' are you ding ok?')

# -----------------------------
# calculator script
print('Type "quit" to exit\n')


previous = 0
run = True

def doMath():
    global run # = the run variable that was defined out side this function on the global level
    global previous
    equation = ''

    if previous == 0:
        equation = input('Enter you equations: ')
    else:
        equation = input(str(previous))

    if equation == 'quit':
        print('Calc stoping')
        run = False
    else:
        #previous = eval(equation) # eval is a bad function to use as it will also execute pythong code inside the input and needs to be sanatized.
        equation = re.sub('[a-zA-Z,.:()`" "]','',equation)
        if previous == 0:
            previous = eval(equation)
        else:
            previous = eval(str(previous) + equation)
        print('Yor answer is:',previous)

while run:
    doMath()






# -----------------------------
# ------------ Loop -----------
# -----------------------------

# the word items = 'the next value' until there are no more values to check

# for loop
setNumbers = [23,34,67,87,12]
for item in setNumbers:
    print(item)


setPeople = ['Andrew','John','James','Bill','Bob']
for item in setPeople:
    print(item)


# while loop
run = True
currentNum = 1

while run:
    if currentNum == 25:
        run = False
    else:
        print(currentNum)
        currentNum += 1

# -----------------------------
# more indepth while loop
playerHP = 290
enemyAtkLow = 20
enemyAtkHi = 65


while playerHP > 0:
    dmg = random.randrange(enemyAtkLow, enemyAtkHi)
    playerHP = playerHP - dmg

    if playerHP <= 10:
        playerHP = 10
        print('your HP is to low to continue')
        break
    else:
        print('you were hit for',dmg,'and your new hp is',playerHP)







# -----------------------------
# ---------- Classes ----------
# -----------------------------

class Enemy: # you would then be able to call / use this class in another script by calling it 'from ScriptFileName import Enemy'
    enemyHP = 200

    def __init__(self, atkLow, atkHi):
        self.atkLow = atkLow
        self.atkHi = atkHi

    def getAtk(self):
        print(self.atkLow)

    def getEnemyHP(self):
        print('Enemy HP is',self.enemyHP - self.atkLow)

enemy1 = Enemy(20, 75)
enemy1.getAtk()
enemy1.getEnemyHP()

enemy2 = Enemy(12,56)
enemy2.getAtk()
enemy2.getEnemyHP()
