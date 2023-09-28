import * as rl from 'readline-sync';
import enemy from './enemy';
import character from './character';

const enemyChoisi = enemy("./../fichiers_json/enemies.json");
const characterChoisi = character("./../fichiers_json/players.json");

const enemyHpDebut: number = enemyChoisi.hp;
let enemyMissingHp: number = enemyHpDebut - enemyChoisi.hp;

const charHpDebut: number = characterChoisi.hp;
const charMissingHp: number = charHpDebut - characterChoisi.hp;

export function inputMenu(): string {
    let i: number = 0;
    if (i <= 0) {
        hpDisplay();
        i++;
    }

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
    const input = inputMenu();

    if (input === "1") {
        console.log(`\x1b[3m You attacked and dealt ${characterChoisi.str} damages! \x1b[0m\n`);
        console.log(`\x1b[3m ${enemyChoisi.name} attacked and dealt ${enemyChoisi.str} damages! \x1b[0m`);
        enemyMissingHp = enemyChoisi.hp - characterChoisi.str;
        console.log(enemyMissingHp);
    } else if (input === "2") {
        if (characterChoisi.hp < 60) {
            console.log(`\x1b[3m You used heal! \x1b[0m\n`);
            characterChoisi.hp += 10;
        } else if (characterChoisi.hp > 59) {
            console.log("You can't use heal, you are full HP.");
        }
    }

    if (enemyMissingHp <= 0) {
        console.log(`\x1b[3m You won the fight! \x1b[0m\n`);
        return;
    } else if (characterChoisi.hp <= 0) {
        console.log(`\x1b[3m You lost the fight! \x1b[0m\n`);
        return;
    }

    inputMenu();
}

console.clear();
fight();
console.clear();
fight();
console.clear();
fight();