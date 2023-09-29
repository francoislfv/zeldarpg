import * as rl from 'readline-sync';
import enemy from './enemy';
import character from './character';
import { Menu_Rounds , Menu_difficulty, Menu_welcome_player} from './menu';


export let enemyChoisi = enemy("./../fichiers_json/enemies.json");
export let characterChoisi = character("./../fichiers_json/players.json");




let enemyHp: number = enemyChoisi.hp
let characterHp: number = characterChoisi.hp


const characterHpDebut: number = characterChoisi.hp;
let enemyHpDebut: number = enemyChoisi.hp





export function inputMenu(): string {

    let getInput = (question: string) => rl.question(`${question}\n`);
    let action: string = getInput(`----- OPTIONS -----\n1. 🗡️  ATTACK      2. 🍎 HEAL`);
    return action;

}





export function fight() {

    const action = inputMenu();

    let characterHpDebut: number = characterChoisi.hp;



    if (action === "1") {
        const damageDealtEnemy = Math.min(enemyChoisi.str)
        characterHp = characterHp - damageDealtEnemy

        const damageDealtChar = Math.min(characterChoisi.str)
        enemyHp = enemyHp - damageDealtChar

        console.log(`\n\x1b[3m You attacked and dealt ${damageDealtChar} damages! \x1b[0m\n`);
        console.log(`\x1b[3m ${enemyChoisi.name} attacked and dealt ${damageDealtEnemy} damages! \x1b[0m\n`);


        return { enemyHp, characterHp }
    } else if (action === "2") {
        if (characterHp < characterHpDebut) {

            console.log(`\x1b[3m You used heal! \x1b[0m\n`);
            const healAmount = Math.min(characterHpDebut - characterHp, characterHpDebut / 2);
            characterHp += healAmount;
            const damageDealtEnemy = Math.min(enemyChoisi.str)
            characterHp = characterHp - damageDealtEnemy
            if (characterHp > characterHpDebut) {
                characterHp = characterHpDebut
            }

            console.log(`\x1b[3m ${enemyChoisi.name} attacked and dealt ${enemyChoisi.str} damages! \x1b[0m\n`);

        } else {
            console.log("You can't use heal, you are full HP.");
            pressKeyToContinue()
        }

    }

    characterHp = Math.min(characterHp, characterHpDebut)

}






export function hpDisplay() {


    const charRemainingHp = Math.max(0, characterHp);
    const enemyRemainingHp = Math.max(0, enemyHp);


    console.log(` ⚔️  - FIGHT ${etageactuel} - ⚔️\n`);
    console.log(`\x1b[31m${enemyChoisi.name}\x1b[0m\nHP : ${"❤️ ".repeat(enemyRemainingHp)}${"💔".repeat(Math.max(0, enemyHpDebut - enemyRemainingHp))}  ${enemyRemainingHp}/${enemyHpDebut}\n`);
    console.log(`\x1b[32m${characterChoisi.name}\x1b[0m\nHP : ${"❤️ ".repeat(charRemainingHp)}${"💔".repeat(Math.max(0, characterHpDebut - charRemainingHp))}  ${charRemainingHp}/${characterHpDebut}\n`);

}





export function pressKeyToContinue() {
    rl.question("Press Enter to continue...");
    console.clear();
}






let action1: string;
let action2: string;
let action3: string;



export function input1(): string {

    let getInput = (question: string) => rl.question(`${question}\n`);
    action1 = getInput('');
    return action1;
}



export function input2(): string {

    let getInput = (question: string) => rl.question(`${question}\n`);
    action2 = getInput('');
    return action2;
}



export function input3(): string {

    let getInput = (question: string) => rl.question(`${question}\n`);
    action3 = getInput('');
    return action3;
}





let roundJoué = 1;
let etageactuel: number = 1
let etageprochain: number = 2


export function checkround() {
    if (etageactuel === etageprochain) {
        etageprochain = etageprochain + 1;
        roundJoué++;
        return roundJoué;
    }
}




export function mainFight() {
    
    while (roundJoué < 10) {
        if (characterHp > 0 && enemyHp > 0) {
            hpDisplay();
            fight();
            pressKeyToContinue();
            console.log(roundJoué)
        } else {
            etageactuel = etageactuel + 1;
            checkround();
            
            if (enemyHp <= 0) {
                enemyChoisi = enemy("./../fichiers_json/enemies.json");
                enemyHpDebut = enemyChoisi.hpDebut;
                enemyHp = enemyChoisi.hp;
                console.log(`Tu as terminé l'étage ${roundJoué}! Tu changes de niveau et tombes sur : ${enemyChoisi.name}`);
                pressKeyToContinue()
            } 
            
            if (characterHp === 0) {
                console.log(`Tu es mort`);
            }
        }
    }
}




export function jeu() {
    Menu_welcome_player();
    input1();
    console.clear();
    if (action1 === "1") {
        Menu_difficulty();
        input2();
        if (action2 === "1") {
            console.log(`\x1b[3mYou choosed the normal difficulty, enemy stats are unchanged.\x1b[0m\n`);
            console.clear();
            Menu_Rounds();
            input3()
            if (action3 === "1") {
                console.log(`\x1b[3mYou choosed to play 10 rounds before the boss fight.\x1b[0m\n`);
                pressKeyToContinue();
                mainFight();
            }
        } else if (action2 === "2") {
            console.log(`\x1b[3mYou choosed the hard difficulty, enemy stats are x1.5.\x1b[0m\n`);
            console.clear();
        } else if (action2 === "3") {
            console.log(`\x1b[3mYou choosed the insane difficulty, enemy stats are x2.\x1b[0m\n`);
            console.clear();
        }
    } else if (action1 === "2") {
        return;
    }

}

jeu()