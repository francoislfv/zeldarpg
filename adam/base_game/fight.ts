import * as rl from 'readline-sync';
import enemy from './enemy';
import character from './character';

const enemyChoisi = enemy("./../fichiers_json/enemies.json");
const characterChoisi = character("./../fichiers_json/players.json");

const enemyHpDebut: number = enemyChoisi.hp;
let enemyMissingHp: number = enemyHpDebut - enemyChoisi.hp;

const charHpDebut: number = characterChoisi.hp;
const charMissingHp: number = charHpDebut - characterChoisi.hp;
let charhealhp = charHpDebut / 2;
characterChoisi.hp = characterChoisi.hp -40;
export function inputMenu(): string {

    const getInput = (question: string) => rl.question(`${question}\n`);
    let action: string = getInput(`----- OPTIONS -----\n1. 🗡️  ATTACK      2. 🍎 HEAL`);
    return action;
}

export function hpDisplay(): void {
    const underscore: string = "💔";

    console.log(` ⚔️  - FIGHT 1 - ⚔️\n`);
    console.log(enemyMissingHp);
    console.log(`\x1b[31m${enemyChoisi.name}\x1b[0m\nHP : ${"❤️ ".repeat(enemyChoisi.hp - enemyMissingHp)}${"💔".repeat(enemyMissingHp)}  ${enemyChoisi.hp}/${enemyHpDebut}\n`);
    console.log(`\x1b[32m${characterChoisi.name}\x1b[0m\nHP : ${"❤️ ".repeat(characterChoisi.hp)}${underscore.repeat(charMissingHp)}  ${characterChoisi.hp}/${charHpDebut}\n`);
}

export function fight(): void {
    // const input = inputMenu();

    if (inputMenu() === "1") {

        console.log(`\x1b[3m You attacked and dealt ${characterChoisi.str} damages! \x1b[0m\n`);
        console.log(`\x1b[3m ${enemyChoisi.name} attacked and dealt ${enemyChoisi.str} damages! \x1b[0m`);
        enemyChoisi.hp = enemyChoisi.hp - characterChoisi.str
        console.log(enemyChoisi.hp);

    } else if (inputMenu() === "2") {
        if (characterChoisi.hp < charHpDebut) {
            characterChoisi.hp = characterChoisi.hp + charhealhp;
            console.log(`\x1b[3m you have just healed yourself, so you recover ${charhealhp} of your hearts !\x1b[0m\n`);
            
        } else if (characterChoisi.hp > charHpDebut){
            characterChoisi.hp = charHpDebut;
            console.log(`\x1b[3m you have just healed yourself, so you recover ${charhealhp} of your hearts !\x1b[0m\n`);
            
        } else if (characterChoisi.hp === charHpDebut) {
            console.log("You can't use heal, you are full HP.");
        }

    }

  /*  if (enemyMissingHp <= 0) {
        console.log(`\x1b[3m You won the fight! \x1b[0m\n`);
        return;
    } else if (characterChoisi.hp <= 0) {
        console.log(`\x1b[3m You lost the fight! \x1b[0m\n`);
        return;
    }
*/
}



/*export function fight() {

   

    if (inputMenu() === "1") {

        console.log(`\x1b[3m You attacked and dealt ${characterchoisi.str} damages! \x1b[0m\n`);
        console.log(`\x1b[3m ${enemychoisi.name} attacked and dealt ${enemychoisi.str} damages! \x1b[0m`);
        enemychoisi.hp = enemychoisi.hp - characterchoisi.str
        console.log(enemychoisi.hp);

    } else if (inputMenu() === "2") {
        if (characterchoisi.hp < charhpdebut) {
            characterchoisi.hp = characterchoisi.hp + charhealhp;
            console.log(`\x1b[3m you have just healed yourself, so you recover ${charhealhp} of your hearts \x1b[0m\n`);
            
        } else if (characterchoisi.hp > charhpdebut){
            characterchoisi.hp = charhpdebut;
            console.log(`\x1b[3m you have just healed yourself, so you recover ${charhealhp} of your hearts \x1b[0m\n`);
            
        } else if (characterchoisi.hp === charhpdebut) {
            console.log("You can't use heal, you are full HP.");
        }
    }

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
*/