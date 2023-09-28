import * as rl from 'readline-sync';
import enemy from './enemy';
import character from './character';

let enemyChoisi = enemy("./../fichiers_json/enemies.json");
let characterChoisi = character("./../fichiers_json/players.json");

const enemyHpDebut: number = enemyChoisi.hp;
let enemyFullHp: number = enemyChoisi.hp
let enemyMissingHp: number = 0;

const charHpDebut: number = characterChoisi.hp;
let characterFullHp: number = characterChoisi.hp;
let charMissingHp: number = 0;

export function inputMenu(): string {

    let getInput = (question: string) => rl.question(`${question}\n`);
    let action: string = getInput(`----- OPTIONS -----\n1. 🗡️  ATTACK      2. 🍎 HEAL`);
    return action;

}

export function hpDisplay(): void {


    console.log(` ⚔️  - FIGHT 1 - ⚔️\n`);
    console.log(`\x1b[31m${enemyChoisi.name}\x1b[0m\nHP : ${"❤️ ".repeat(Math.max(0, enemyFullHp))}${"💔".repeat(enemyMissingHp)}  ${Math.max(0, enemyFullHp)}/${enemyHpDebut}\n`);
    console.log(`\x1b[32m${characterChoisi.name}\x1b[0m\nHP : ${"❤️ ".repeat(Math.max(0, characterFullHp))}${"💔".repeat(charMissingHp)}  ${Math.max(0, characterFullHp)}/${charHpDebut}\n`);

}

export function fight(): void {
    const action = inputMenu();

    if (action === "1") {
        console.log(`\n\x1b[3m You attacked and dealt ${characterChoisi.str} damages! \x1b[0m\n`);
        console.log(`\x1b[3m ${enemyChoisi.name} attacked and dealt ${enemyChoisi.str} damages! \x1b[0m\n`);


        const damageDealtChar = Math.min(characterChoisi.str);
        enemyMissingHp += damageDealtChar
        enemyFullHp -= damageDealtChar

        const damageDealtEnemy = Math.min(enemyChoisi.str)
        charMissingHp += damageDealtEnemy
        characterFullHp -= damageDealtEnemy




    } else if (action === "2") {
        if (characterFullHp < 60) {
            console.log(`\x1b[3m You used heal! \x1b[0m\n`);
            characterFullHp += 10;
        } else if (enemyFullHp > 59) {
            console.log("You can't use heal, you are full HP.");
        }
    }

   /* if (enemyFullHp === 0) {
        console.log(`\x1b[3m You won the fight! \x1b[0m\n`);
        return;
    } else if (characterFullHp === 0) {
        console.log(`\x1b[3m You lost the fight! \x1b[0m\n`);
        return;
    } */
}

hpDisplay()
fight()
hpDisplay()
fight()
hpDisplay()
fight()
hpDisplay()
fight()
