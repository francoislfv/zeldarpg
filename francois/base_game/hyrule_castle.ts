
import { pressKeyToContinue, inputMenu, hpDisplay, fight, enemyHpDebut, characterChoisi, enemyChoisi, enemyFullHp, enemyMissingHp, charHpDebut, characterFullHp, charMissingHp, resethp} from './fight';
import  {Menu_welcome_player, Menu_difficulty, Menu_Rounds} from './menu';
import * as rl from 'readline-sync';



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

    while (enemyFullHp > 1 || characterFullHp > 1) {
        hpDisplay(i);
        fight();
        pressKeyToContinue();



        if (enemyFullHp === 0) {
            console.log(`\x1b[3m You won the fight! \x1b[0m\n`);
            resethp();
            i++;
            pressKeyToContinue();
        } else if (characterFullHp === 0) {
            console.log(`\x1b[3m You lost the fight! \x1b[0m\n`);
            resethp();
            i++;
            pressKeyToContinue();
        }
    }
   
}
main()
