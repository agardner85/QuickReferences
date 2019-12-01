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

# you can set a %d in a string and then the value of it after the string and it will go back and replace the %d with the value.
value = 365
print('there are %d days in the year' % int(value))

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


# -- downloading HTML from a page  --


import requests

# peramaters to add on the end of a url
params = {'type':'pizza','location':'near','place':'dominos'}

# the yrl you want to pull information from
r = requests.get("https://www.bing.com/search",params=params)

# verify the page's health is good
print('status:',r.status_code)

# write out the full url and print it to console
print(r.url)

# grab all the html on the page and print it to console
print(r.text)


# generate a new file to memory and write the html of the requested page to it alonh with a path to save it if it is to be saved
f = open('./page.html','w+')

# save the new page and the requested tetxt/html to the file and path set above.
f.write(r.text)




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




# ------ Submitting informtion to post  -----



# set the data to be set to the fields on the page... you will need to know these ahead of time some how
my_data = {'name':'Andrew','email':'hihi@aol.com'}

# set the page where the post goes to that will be reciving the information alos with the data that you set up.
r = requests.post('http://www.w3schools.com/php/welcome.php', data=my_data)




# ---------- JSON -----------



test_json = {
                "firstName": "Jane",
                "lastName": "Doe",
                "hobbies": ["running", "sky diving","singing"],
                "age": 35,
                "children": [
                    {"firstName": "Alice", "age": 6},
                    {"firstName": "Bob","age": 8}
                ]
            }


print(test_json)
print(test_json['children'][0]['firstName'])



# ---------- getting all links with in a parent element -----------


from bs4 import BeautifulSoup
import requests

# pip3 install bs4


search = input('Enter search term: ')
params = {'q':search}
r = requests.get('http://www.bing.com/search', params=params)

#print(r.url)

soup = BeautifulSoup(r.text, 'html.parser')
#print(soup.prettify())


results = soup.find('ol',{'id':'b_results'})
links = results.findAll('li',{'class':'b_algo'})

for item in links:
    item_text = item.find('a').text
    item_href = item.find('a').attrs['href']
    item_h2 = item.find('a').parent
    item_summary = item.find('a').parent.parent.text

    if item_text and item_href:
        print(item_h2)
        print(item_text)
        print(item_href)
        print(item_summary)

        # all children
        #children = item.children
        #for child in children:
            #print('Child',child)

        #first child
        children = item.find('h2')
        print('Next sibling to the h2', children.next_sibling())
        #print('Previous sibling to the h2', children.previous_sibling())





# ---------- getting all images from a url -----------


from bs4 import BeautifulSoup
import requests
from PIL import Image
from io import BytesIO
import os

def StartSearch():
    search = input('Enter search term: ')
    params = {'q':search}
    dir_name = search.replace(' ','_').lower()

    if not os.path.isdir(dir_name):
        os.makedirs(dir_name)
        print('made dir',dir_name)

    r = requests.get('http://www.bing.com/images/search', params=params)

    soup = BeautifulSoup(r.text, 'html.parser')

    results = soup.find('span',{'id':'main'})
    links = results.findAll('div',{'class':'item'})

    for item in links:
        try:
            img_href = item.find('a').attrs['href']
            img_href2 = requests.get(img_href)
            img_title = item.find('a').attrs['href'].split('/')[-1]
            try:
                img = Image.open(BytesIO(img_href2.content))
                img.save('./'+dir_name+'/' + img_title, img.format)
                print('imgae',img_title,'saved to',dir_name)
            except:
                print('file faild')
        except:
            print('file faild request')

    StartSearch()

StartSearch()






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






# -----------------------------
# ---- data visualization -----
# -----------------------------


import matplotlib.pyplot as plt
#pip3  install matplotlib


years = [1,1000,1500,1600,1700,1750,1800,
         1850,1900,1950,1955,1960,1965,1970,
         1975,1980,1985,1990,1995,2000,2005,2010,2015]

population = [200,400,458,580,682,791,1000,
              1262,1650,2525,2758,3018,3322,3682,
              4061,4440,4853,5310,5735,6127,6520,6930,7349]


plt.plot(years, population)
plt.show()





# -- adding color to the lines and adding labels -------

import matplotlib.pyplot as plt
#pip3  install matplotlib


years = [1950,1955,1960,1965,1970,1975,1980,1985,1990,1995,2000,2005,2010,2015]

population = [2.5,2.7,3.0,3.3,3.6,4.0,4.4,4.8,5.3,5.7,6.1,6.5,6.9,7.3]


plt.plot(years, population, color=(255/255, 100/255, 100/255))
plt.ylabel('Population in Billions')
plt.xlabel('Population by year')

plt.title('Population growth')
plt.show()





# -- multiple lines with individual colors and markers -------


import matplotlib.pyplot as plt


years = [1950,1955,1960,1965,1970,1975,1980,1985,1990,1995,2000,2005,2010,2015]

population = [2.5,2.7,3.0,3.3,3.6,4.0,4.4,4.8,5.3,5.7,6.1,6.5,6.9,7.3]

deaths = [1.1,1.2,1.5,1.7,1.9,2,2.3,2.7,2.4,2.5,2.6,2.7,2.8,2.9]

plt.plot(years, population, '--', color=(255/255, 100/255, 100/255), marker='o')
plt.plot(years, deaths, marker='x')
plt.ylabel('Population in Billions')
plt.xlabel('Population by year')

plt.title('Population growth')
plt.show()






# -- pie charsts with exploded sections -------

import matplotlib.pyplot as plt

labels = 'python','c++','ruby','java','PHP','perl'
sizes = [33, 52, 12, 17, 62, 48]
seperated = (.1, 0, 0, .1, 0, 0)

# create a pie chat from the data
# autopct will allow you to place the percenatages on the pie slices
plt.pie(sizes, labels=labels, autopct='%1.1f%%', explode=seperated)

# when you resize the graph or pie chat, it will stay a circle and not stretch
# pie charts render the data counter clock wise.
plt.axis('equal')

plt.show()





# -- simple bar chart -------

import matplotlib.pyplot as plt
import numpy as np

# pip3 install numpy

# how many bar in the chart
col_count = 5

# the data to be displayed
andrew = (45,34,54,65,90)
john = (34,56,67,45,67)
bob = (23,45,67,45,67)
bill = (45,45,56,67,45)

# display the number of bars
index = np.arange(col_count)

# call the bars to be drawn. index = how many bars / andrew = the data to be used / .5 is the width of the bar on the graph
data1 = plt.bar(index, andrew, .5)


plt.grid(True)
plt.show()





# -- stacking bars on top of each other -------

import matplotlib.pyplot as plt
import numpy as np

col_count = 5

andrew = (45,34,54,65,90)
john = (34,56,67,45,67)
bob = (23,45,67,45,67)
bill = (45,45,56,67,45)

index = np.arange(col_count)

# multiple data point on the graph will draw the bars on top of each other. 
# setting the bar witdh differently from eacj other will look like one bar is inside another
data1 = plt.bar(index, andrew, .5)
data2 = plt.bar(index, john, .4)


plt.grid(True)
plt.show()





# -- stacking bars next to each other with the proper titles and a ledged -------

import matplotlib.pyplot as plt
import numpy as np

# how many bars to display per set of data
col_count = 5

# width of the bars
bar_width = 0.2

# data values
andrew = (45,34,54,65,90)
john = (34,56,67,45,67)
bob = (23,45,67,45,67)
bill = (45,45,56,67,45)

# setting the data bars to be rendered
index = np.arange(col_count)

# setting each set of data
# index - how many bars to render for this value
# 'andrew' = the data values to bring in
# 'bar_width' = how wid to draw the bar
# label = the title of that colors bar if a ledged is used.
# alpha = make that bar transparent based on its value

# starting with data2 and going forward. 'index + bar_width*2' is what shifts the bars over to be next to each other instead of on top

data1 = plt.bar(index, andrew, bar_width, label='Andrew')
data2 = plt.bar(index + bar_width, john, bar_width, label='John', alpha=.5)
data3 = plt.bar(index + bar_width*2, bob, bar_width, label='Bob')
data4 = plt.bar(index + bar_width*3, bill, bar_width, label='Bill')

# labeling the graph and giving it a name
plt.ylabel('Quota')
plt.xlabel('Months')
plt.title('Hi Five Quotas by month')

# renaming the bottom 'x' markers on the graph and spacing them out a bit better
plt.xticks(index + .6 / 2, ('Jan','Feb','Mar','Apr','May'))

# displaying the ledgend based on the 'labels' value in each set of data
plt.legend()

plt.grid(True)
plt.show()





# -- labeling everything even the bars and moveing the ledgend -------

import matplotlib.pyplot as plt
import numpy as np

col_count = 5
bar_width = 0.2

andrew = (45,34,54,65,90)
john = (34,56,67,45,67)
bob = (23,45,67,45,67)
bill = (45,45,56,67,45)

index = np.arange(col_count)

data1 = plt.bar(index, andrew, bar_width, label='Andrew')
data2 = plt.bar(index + bar_width, john, bar_width, label='John', alpha=.5)
data3 = plt.bar(index + bar_width*2, bob, bar_width, label='Bob')
data4 = plt.bar(index + bar_width*3, bill, bar_width, label='Bill')

# find the center of the bar and the top of the bar and place text at that location to display that bars exact value.
def CreateLabel(data):
    for item in data:
        bar_height = item.get_height()
        bar_width2 = item.get_width()
        bar_x = item.get_x()
        bar_y = item.get_y()

        plt.text(bar_x + bar_width2 / 2, bar_height * 1.01, bar_height, ha='center', va='bottom')

CreateLabel(data1)
CreateLabel(data2)
CreateLabel(data3)
CreateLabel(data4)

plt.ylabel('Quota')
plt.xlabel('Months')
plt.title('Hi Five Quotas by month')

plt.xticks(index + .6 / 2, ('Jan','Feb','Mar','Apr','May'))

# you can pass peramaters to the ledged to move it around, change colors... etc
plt.legend(frameon=False, bbox_to_anchor=(1,1), loc=2)

plt.grid(True)
plt.show()





# -- data construction using pandas -------

import pandas as pd
# pip3 install pandas

# old way
# data = [{
#             'name':'Andrew',
#             'jan_quota':'124',
#             'feb_quota':'92',
#             'mar_quota':'132'
#          },
#         {
#             'name':'John',
#             'jan_quota':'111',
#             'feb_quota':'100',
#             'mar_quota':'35'
#          }]


new_way = {
           'names': ['Andrew','Bob','John','Dan','Jill','Frank'],
           'jan_quota': [124,24,80,110,105,115],
           'feb_quota': [92,50,95,110,120,101],
           'mar_quota': [132,80,93,110,167,65]
           }

df = pd.DataFrame(new_way, columns=['names','jan_quota','feb_quota','mar_quota'])
df['total_quotas'] = df['jan_quota'] + df['feb_quota'] + df['mar_quota']

print (df)





# -- Pie charts with pands -------

import matplotlib.pyplot as plt
import pandas as pd
# pip3 install pandas

new_way = {
           'names': ['Andrew','Bob','John','Dan','Jill','Frank'],
           'jan_quota': [124,24,80,110,105,115],
           'feb_quota': [92,50,95,110,120,101],
           'mar_quota': [132,80,93,110,167,65]
           }

df = pd.DataFrame(new_way, columns=['names','jan_quota','feb_quota','mar_quota'])
df['total_quotas'] = df['jan_quota'] + df['feb_quota'] + df['mar_quota']

color = [(1,.4,.4),(1,.6,1),(.5,.3,1),(.3,1,.5),(.5,.5,.2),(.3,.5,.2)]

plt.pie(df['total_quotas'], labels = df['names'], colors = color, autopct = '%1.1f%%')

plt.axis('equal')
plt.show()




