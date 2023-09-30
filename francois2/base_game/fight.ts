import * as rl from 'readline-sync';
import enemy from './enemy';
import character from './character';
import boss from './boss';
import { Menu_welcome_player } from '../mods/basic_game_customization';



export let enemyChoisi = enemy("./../fichiers_json/enemies.json");
export let characterChoisi = character("./../fichiers_json/players.json");
export let bosschoisi = boss("./../fichiers_json/bosses.json")




let enemyHp: number = enemyChoisi.hp
let characterHp: number = characterChoisi.hp
let bossHp: number = bosschoisi.hp


const characterHpDebut: number = characterChoisi.hp;
let enemyHpDebut: number = enemyChoisi.hp
let bossHpDebut: number = bosschoisi.hp





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



export function bossFight() {
    console.clear();
    
    
    while (characterHp > 0 && bossHp > 0) {
        bossHpDisplay();
        const action = inputMenu(); // Let the player choose an action
        let characterHpDebut: number = characterChoisi.hp;

        if (action === "1") {
            const damageDealtBoss = Math.min(bosschoisi.str);
            characterHp = characterHp - damageDealtBoss;

            const damageDealtChar = Math.min(characterChoisi.str);
            bossHp = bossHp - damageDealtChar;

            console.log(`\n\x1b[3m You attacked and dealt ${damageDealtChar} damage! \x1b[0m\n`);
            console.log(`\x1b[3m ${bosschoisi.name} attacked and dealt ${damageDealtBoss} damage! \x1b[0m\n`);
        } else if (action === "2") {
            if (characterHp < characterHpDebut) {
                console.log(`\x1b[3m You used heal! \x1b[0m\n`);
                const healAmount = Math.min(characterHpDebut - characterHp, characterHpDebut / 2);
                characterHp += healAmount;
                const damageDealtBoss = Math.min(bosschoisi.str);
                characterHp = characterHp - damageDealtBoss;
                if (characterHp > characterHpDebut) {
                    characterHp = characterHpDebut;
                }

                console.log(`\x1b[3m ${bosschoisi.name} attacked and dealt ${bosschoisi.str} damage! \x1b[0m\n`);
            } else {
                console.log("You can't use heal, you are at full HP.");
                pressKeyToContinue();
            }
        }

        characterHp = Math.min(characterHp, characterHpDebut);
        pressKeyToContinue(); // Pause and clear the screen before the next iteration
    }
    const isBossDefeated = bossHp <= 0;
    
    // Display boss lore based on the outcome
    displayBossLore(isBossDefeated);
}


function displayBossLore(isBossDefeated: boolean) {
    console.clear();
    if (isBossDefeated) {
        console.log(`${bosschoisi.name} is defeated, vanishing into the darkness. The treasure is revealed. \n${characterChoisi.name} triumphs, restoring peace to Hyrule.`);
    } else {
        console.log(`${characterChoisi.name} falls, unable to continue. \n${bosschoisi.name} triumphs, plunging Hyrule into eternal darkness.`);
    }
}

export function hpDisplay() {


    const charRemainingHp = Math.max(0, characterHp);
    const enemyRemainingHp = Math.max(0, enemyHp);


    console.log(` ⚔️  - FIGHT ${etageactuel} - ⚔️\n`);
    console.log(`\x1b[31m${enemyChoisi.name}\x1b[0m\nHP : ${"❤️ ".repeat(enemyRemainingHp)}${"💔".repeat(Math.max(0, enemyHpDebut - enemyRemainingHp))}  ${enemyRemainingHp}/${enemyHpDebut}\n`);
    console.log(`\x1b[32m${characterChoisi.name}\x1b[0m\nHP : ${"❤️ ".repeat(charRemainingHp)}${"💔".repeat(Math.max(0, characterHpDebut - charRemainingHp))}  ${charRemainingHp}/${characterHpDebut}\n`);

}


export function bossHpDisplay() {
    const charRemainingHp = Math.max(0, characterHp);
    const bossRemainingHp = Math.max(0, bossHp);

    console.log(` ⚔️  - BOSS FIGHT - ⚔️\n`);
    console.log(`\x1b[31m${bosschoisi.name}\x1b[0m\nHP : ${"❤️ ".repeat(bossRemainingHp)}${"💔".repeat(Math.max(0, bossHpDebut - bossRemainingHp))}  ${bossRemainingHp}/${bossHpDebut}\n`);
    console.log(`\x1b[32m${characterChoisi.name}\x1b[0m\nHP : ${"❤️ ".repeat(charRemainingHp)}${"💔".repeat(Math.max(0, characterHpDebut - charRemainingHp))}  ${charRemainingHp}/${characterHpDebut}\n`);
}


export function pressKeyToContinue() {
    rl.question("Press Enter to continue...");
    console.clear();
}






let action1: string;
;



export function input1(): string {

    let getInput = (question: string) => rl.question(`${question}\n`);
    action1 = getInput('');
    return action1;
}








let roundJoué = 0;
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
    while (roundJoué < 11) {
        if (characterHp > 0 && enemyHp > 0) {
            hpDisplay(); // Display HP before taking action
            fight();
            pressKeyToContinue();
        } else {
            etageactuel = etageactuel + 1;
            checkround();

            if (enemyHp <= 0) {
                enemyChoisi = enemy("./../fichiers_json/enemies.json");
                enemyHpDebut = enemyChoisi.hpDebut;
                enemyHp = enemyChoisi.hp;
                console.log(`You finished the floor ${roundJoué}! You change level and come across: ${enemyChoisi.name}`);
                pressKeyToContinue();
            }

            if (characterHp <= 0) {
                console.log("You are dead...");
                return; // End the game if the character is dead
            }
        }
    }
    if (roundJoué === 3) {
    // Start the boss fight after completing 3 rounds
    console.log(`${characterChoisi.name} stands before the dungeon gates, sword in hand. The gates creak open, \nrevealing ${bosschoisi.name}, a terrifying creature. The epic battle begins.`);
    pressKeyToContinue();
    if (characterHp > 0) {
        bossFight();
    }
    }
}



export function jeu() {
    Menu_welcome_player();
    input1();
    console.clear();
    if (action1 === "1") {
        mainFight()
    } else if (action1 === "2") {
        console.log("LEAVING THE GAME\n")
        pressKeyToContinue()
        return;
    }

}

jeu()