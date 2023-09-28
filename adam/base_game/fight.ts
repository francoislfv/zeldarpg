import * as rl from 'readline-sync';
import enemy from './enemy'
import character from './character'

const enemychoisi = enemy("./../fichiers_json/enemies.json");

const characterchoisi = character("./../fichiers_json/players.json");

const enemystats = [enemychoisi.name, enemychoisi.hp, enemychoisi.str]
let characterstats = [characterchoisi.name, characterchoisi.hp, characterchoisi.str,]
const enemyhpdebut: number = enemychoisi.hp
const enemymissinghp: number = enemyhpdebut - enemychoisi.hp

const charhpdebut: number = characterchoisi.hp
const charmissinghp: number = charhpdebut - characterchoisi.hp
const charhealhp: number = charhpdebut / 2;

characterchoisi.hp = charhpdebut - 40;
export function inputmenu() {
    let i: number = 0;
    if (i <= 0) {
        hpdisplay();
        i++;
    }

    function hpdisplay() {
        const underscore: string = "💔"
        //console.log("I".repeat(enemychoisi.hp));
        console.log(` ⚔️  - FIGHT 1 - ⚔️\n`)
        console.log(enemymissinghp)
        console.log(`\x1b[31m${enemychoisi.name}\x1b[0m\nHP : ${"❤️ ".repeat(enemychoisi.hp)}${"💔".repeat(enemymissinghp)}  ${enemychoisi.hp}/${enemyhpdebut}\n`);
        console.log(`\x1b[32m${characterchoisi.name}\x1b[0m\nHP : ${"❤️ ".repeat(characterchoisi.hp)}${underscore.repeat(charmissinghp)}  ${characterchoisi.hp}/${charhpdebut}\n`)


    }

    const getInput = (question: string) => rl.question(`${question}\n`);
    let action: string = getInput(`⚙️  - OPTIONS - ⚙️\n1. 🗡️  ATTACK      2. 🍎 HEAL`)
    return action

}

export function fight() {

    const input = inputmenu()

    if (input === "1") {

        console.log(`\x1b[3m You attacked and dealt ${characterchoisi.str} damages! \x1b[0m\n`);
        console.log(`\x1b[3m ${enemychoisi.name} attacked and dealt ${enemychoisi.str} damages! \x1b[0m`);
        enemychoisi.hp = enemychoisi.hp - characterchoisi.str
        console.log(enemychoisi.hp);

    } else if (input === "2") {
        if (characterchoisi.hp < charhpdebut) {
            characterchoisi.hp = characterchoisi.hp + charhealhp;
            console.log(`\x1b[3m you have just healed yourself, so you recover ${charhealhp} of your hearts (\x1b[0m\n`);
            
        } else if (charhealhp > characterchoisi.hp){
            characterchoisi.hp = charhpdebut;
            console.log(`\x1b[3m you have just healed yourself, so you recover ${charhealhp} of your hearts (\x1b[0m\n`);
            
        } else if (characterchoisi.hp === charhpdebut) {
            console.log("You can't use heal, you are full HP.");
        }
    }
    inputmenu();
}
fight()
fight()
fight()


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

