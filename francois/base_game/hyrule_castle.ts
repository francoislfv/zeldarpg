
import { pressKeyToContinue, inputMenu, hpDisplay, fight,  } from './fight';
import * as rl from 'readline-sync';

export function inputdebut(): string {

    let getInput = (question: string) => rl.question(`${question}\n`);
    let action1: string = getInput('');
    return action1;
}