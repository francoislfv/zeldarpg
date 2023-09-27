import enemy from './enemy'

const enemychoisi = enemy("./../fichiers_json/enemies.json")

const enemystats = [ enemychoisi.name, enemychoisi.hp, enemychoisi.str ]


console.log("l'enemy", enemystats[0],"a", enemystats[1], "hp" )