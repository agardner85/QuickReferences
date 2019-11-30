import random
from classes.magic import Spell

class bcolors:
    Header = '\033[95m'
    OkBlue = '\033[94m'
    OkGreen = '\033[92m'
    Warning = '\033[93m'
    Fail = '\033[91m'
    EndC = '\033[0m'
    Bold = '\033[1m'
    Underline = '\033[4m'


class Person:
    def __init__(self,hp,mp,atk,df,magic):
        self.maxhp = hp
        self.hp = hp
        self.maxmp = mp
        self.mp = mp
        self.atkl = atk - 10
        self.atkh = atk + 10
        self.df = df
        self.magic = magic
        self.actions = ['Attack','Magic']


    def generate_damage(self):
        return random.randrange(self.atkl, self.atkh)

    def take_damage(self,dmg):
        self.hp -= dmg
        if self.hp < 0:
            self.hp = 0
        return self.hp

    def heal(self, dmg):
        self.hp += dmg
        if self.hp > self.maxhp:
            self.hp = self.maxhp

    def get_hp(self):
        return self.hp

    def get_max_hp(self):
        return self.maxhp

    def get_mp(self):
        return self.mp

    def get_max_mp(self):
        return self.maxmp

    def reduce_mp(self, cost):
        self.mp -= cost

    def choose_action(self):
        i = 1
        print(bcolors.OkBlue + bcolors.Bold + 'Actions' + bcolors.EndC)
        for item in self.actions:
            print(str(i) + ':', item)
            i += 1

    def choose_magic(self):
        i = 1
        print(bcolors.OkBlue + bcolors.Bold + 'Magic' + bcolors.EndC)
        for spell in self.magic:
            print(str(i) + ':', spell.name, '(cost:', str(spell.cost) + ')')
            i += 1