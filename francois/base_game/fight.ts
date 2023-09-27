import enemy from './enemy'
import character from './character'

export default function fight() {
    const enemychoisi = enemy("./../fichiers_json/enemies.json");
    
    const characterchoisi = character("./../fichiers_json/players.json");

    const enemystats = [enemychoisi.name, enemychoisi.hp, enemychoisi.str]
    const characterstats = [characterchoisi.name, characterchoisi.hp, characterchoisi.str]

        while (enemychoisi.hp > 0) {
            console.log(characterchoisi.name, "met", characterchoisi.str, "dégats")
            console.log(enemychoisi.hp - characterchoisi.str)
            break
        }
}
fight()