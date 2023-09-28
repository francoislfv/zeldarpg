
import { pressKeyToContinue, inputMenu, hpDisplay, fight} from './fight';
import  {Menu_welcome_player, Menu_difficulty, Menu_Rounds} from './menu';
import * as rl from 'readline-sync';
import character from './character';
import enemy from './enemy';



let action1: string;
let action2: string;
let action3: string;

let enemyChoisi = enemy("./../fichiers_json/enemies.json");
let characterChoisi = character("./../fichiers_json/players.json");
// declarer perso / enemy / Boss

const enemyHpDebut = enemyChoisi.hp;
let enemyFullHp = Math.min(enemyChoisi.hp, enemyChoisi.hp)
let enemyMissingHp = 0;

const charHpDebut = characterChoisi.hp;
let characterFullHp = characterChoisi.hp;
let charMissingHp = 0;






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

let i = 1;

export function main () {
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
                        const round = 10
                            while (i < round) {
                                mainFight();
                                console.log("hellooooooooooooooooooooooooooooooooooooooo")

                                // regerner l'enemy
                            }
                }
        } else if(action2 === "2") {
            console.log(`\x1b[3mYou choosed the hard difficulty, enemy stats are x1.5.\x1b[0m\n`);
            console.clear();
            mainFight();
        } else if (action2 === "3") {
            console.log(`\x1b[3mYou choosed the insane difficulty, enemy stats are x2.\x1b[0m\n`);
            console.clear();
            mainFight();
        }
    } else if (action1 === "2") {
        return;
    }

}


export function mainFight() {

    while (enemyFullHp > 0 || characterFullHp > 0) {
        hpDisplay(enemyChoisi, characterChoisi, i, enemyFullHp, enemyMissingHp, enemyHpDebut, characterFullHp, charMissingHp, charHpDebut);
        fight(enemyChoisi, characterChoisi, enemyFullHp, enemyMissingHp, characterFullHp, charMissingHp, charHpDebut);
        pressKeyToContinue();

    }
    if (enemyFullHp === 0) {
        console.log(`\x1b[3m You won the fight! \x1b[0m\n`);
        // resethp();
        pressKeyToContinue();
    } else if (characterFullHp === 0) {
        console.log(`\x1b[3m You lost the fight! \x1b[0m\n`);
        // resethp();
        pressKeyToContinue();
    }
    i++;
   
}
main()
