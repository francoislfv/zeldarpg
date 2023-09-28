
import { pressKeyToContinue, inputMenu, hpDisplay, fight} from './fight';
import  {Menu_welcome_player, Menu_difficulty, Menu_Rounds} from './menu';
import * as rl from 'readline-sync';



let action1: string;
let action2: string;
let action3: string;

export function input1(): string {

    let getInput = (question: string) => rl.question(`${question}\n`);
    let action1: string = getInput('');
    return action1;
}

export function input2(): string {

    let getInput = (question: string) => rl.question(`${question}\n`);
    let action2: string = getInput('');
    return action2;
}

export function input3(): string {

    let getInput = (question: string) => rl.question(`${question}\n`);
    let action3: string = getInput('');
    return action3;
}

if (action1 === "1") {
    
}