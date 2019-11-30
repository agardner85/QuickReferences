from classes.game import Person, bcolors
from classes.magic import Spell

#black magic
fire = Spell('Fire',10,100,'black')
thunder = Spell('Thunder',12,120,'black')
bllizard = Spell('Blizzard',13,130,'black')
meteor = Spell('Meteor',20,200,'black')
quake = Spell('Quake',15,150,'black')

#white magic
cure1 = Spell('Cure1',8,80,'white')
cure2 = Spell('Cure2',12,120,'white')
cure3 = Spell('Cure3',20,200,'white')


player_magic = [fire,thunder,bllizard,meteor,quake,cure1,cure2,cure3]


player = Person(460, 65, 60, 34, player_magic)
enemy = Person(1460, 20, 25, 30, [])


print(bcolors.Fail + bcolors.Bold + 'AN ENEMY ATTACKS!' + bcolors.EndC + '...')


running = True
i = 0
while running:
    player.choose_action()
    choice = input('Choose action:')
    index = int(choice) - 1

    if index == 0:
        print('------ Your turn! ---------')
        dmg = player.generate_damage()
        enemy.take_damage(dmg)
        print('you attacked for',dmg,'points of damage. Enemy HP:',enemy.get_hp())
    elif index == 1:
        player.choose_magic()
        magic_choice = int(input('Choose spell:')) - 1

        spell = player.magic[magic_choice]
        magic_dmg = spell.generate_damage()

        current_mp = player.get_mp()

        if spell.cost > current_mp:
            print(bcolors.Fail + 'Turn failed... not enough MP' + bcolors.EndC)
            continue

        player.reduce_mp(spell.cost)

        if spell.type == 'white':
            player.heal(magic_dmg)
            print(spell.name,'heals for',str(magic_dmg))
        elif spell.type == 'black':
            enemy.take_damage(magic_dmg)
            print('------ Your turn! ---------')
            print('Enemy HP is currently:', enemy.get_hp())


        print('you attacked with magic using',spell.name,'/',spell.cost,'mp for',magic_dmg, 'points of damage. Enemy HP:',enemy.get_hp())

    enemy_choice = 1
    print('------ Enemy attack! --------')
    enemy_dmg = enemy.generate_damage()
    player.take_damage(enemy_dmg)
    print('Enemy attacked for',enemy_dmg,'points of damage. your HP:',player.get_hp())
    print('------- End round --------')


    print('Enemy HP is currently:',enemy.get_hp(),'/',enemy.get_max_hp())
    print(bcolors.OkGreen , 'Your HP is currently:',player.get_hp(),'/',player.get_max_hp() , bcolors.EndC)
    print(bcolors.OkBlue , 'Your MP is currently:', player.get_mp(), '/', player.get_max_mp() , bcolors.EndC)

    if enemy.get_hp() == 0:
        print(bcolors.OkGreen + bcolors.Bold + 'The enemy is defeated, you win!' + bcolors.EndC)
        running = False
    elif player.get_hp() == 0:
        print(bcolors.Fail + bcolors.Bold + 'You lost.... you are dead!' + bcolors.EndC)
        running = False
    #print('You chose', player.get_spell_name(int(index)))

    #running = False
