import json
import os

# check if file exsisnts
if os.path.isfile('./ages.json') and os.stat('./ages.json').st_size != 0:
    # read the file in question
    old_file = open('./ages.json','r+')
    # bring in the jason object and convert it to a python object
    data = json.loads(old_file.read())
    print('current age is',data['age'],'-- adding a year')
    data['age'] = data['age'] + 1
    print('new age is',data['age'])
#make a new file
else:
    old_file = open('./ages.json','w+')
    data = {'name':'Andrew','age':30}
    print('No file found, setting default age to', data['age'])


# move the data write position to the very begning of the file
old_file.seek(0)
# convert the python object back into json
old_file.write(json.dumps(data))


