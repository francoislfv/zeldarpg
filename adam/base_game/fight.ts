import enemy from './enemy'
import character from './character'

export default function fight() {
    const enemychoisi = enemy("./../fichiers_json/enemies.json");
    
    const characterchoisi = character("./../fichiers_json/players.json");

    const enemystats = [enemychoisi.name, enemychoisi.hp, enemychoisi.str]
    const characterstats = [characterchoisi.name, characterchoisi.hp, characterchoisi.str]

        while (enemychoisi.hp > 0) {
            console.log(characterchoisi.name, "met", characterchoisi.str, "dégats");
            console.log(enemychoisi.hp - characterchoisi.str);
            break
        }
}


//import enemy from "./enemy"
//import boss from "./boss"
////import character from "./character"
//import fight from "./fight";

//export default function tower(path: string) {

//const fightencours = 

//const enemychoisi = enemy("./../fichiers_json/enemies.json");
//let i = 0;
//while (i < 10) {
//    if (enemychoisi.hp === 0) {
//        console.log(`you are entering the level ${i}`);
//        console.log(fight.enemy);
//    }
//i = i + 1;
//}
//if (i === 10) {
//    console.log(`Final Boss!\n level ${i}`);
//  console.log(fight.boss);
//}
//}