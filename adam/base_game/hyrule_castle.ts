
import { enemyChoisi, mainFight, pressKeyToContinue} from './fight';
import { Menu_welcome_player, Menu_Rounds, Menu_difficulty, Diff_hard, Diff_insane, Rounds_10, Rounds_100, Rounds_20, Rounds_50  } from '../mods/basic_game_customization';
import * as rl from 'readline-sync';






let action1: string;
let action2: string;
let action3: string;
    



function input1(): string {

    let getInput = (question: string) => rl.question(`${question}\n`);
    action1 = getInput('');
    return action1;
}

function input2(): string {

    let getInput = (question: string) => rl.question(`${question}\n`);
    action2 = getInput('');
    return action2;
}

function input3(): string {

    let getInput = (question: string) => rl.question(`${question}\n`);
    action3 = getInput('');
    return action3;
}
 

export function main() {

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
                            
                        } else if (action3 === "2") {
                            console.log(`\x1b[3mYou choosed to play 20 rounds before the boss fight.\x1b[0m\n`);
                            pressKeyToContinue();
                           // Rounds_20();
                        } else if (action3 === "3") {
                            console.log(`\x1b[3mYou choosed to play 50 rounds before the boss fight.\x1b[0m\n`);
                            pressKeyToContinue();
                            //Rounds_50();
                        } else if (action3 === "4") {
                            console.log(`\x1b[3mYou choosed to play 100 rounds before the boss fight.\x1b[0m\n`);
                            pressKeyToContinue();
                            //Rounds_100(); 
                        } else if (action3 === "5") {
                               main();
                        }
    
            
            
            
            } else if(action2 === "2") {
                console.log(`\x1b[3mYou choosed the hard difficulty, enemy stats are x1.5.\x1b[0m\n`);
                Diff_hard();
                console.clear();
                Menu_Rounds();
                        input3()
                        if (action3 === "1") {
                            console.log(`\x1b[3mYou choosed to play 10 rounds before the boss fight.\x1b[0m\n`);
                            pressKeyToContinue();
                           // Rounds_10();
                        } else if (action3 === "2") {
                            console.log(`\x1b[3mYou choosed to play 20 rounds before the boss fight.\x1b[0m\n`);
                            pressKeyToContinue();
                           // Rounds_20();
                        } else if (action3 === "3") {
                            console.log(`\x1b[3mYou choosed to play 50 rounds before the boss fight.\x1b[0m\n`);
                            pressKeyToContinue();
                          //  Rounds_50();
                        } else if (action3 === "4") {
                            console.log(`\x1b[3mYou choosed to play 100 rounds before the boss fight.\x1b[0m\n`);
                            pressKeyToContinue();
                           // Rounds_100(); 
                        } else if (action3 === "5") {
                                main();
                        }
    
    
    
    
    
    
    
            } else if (action2 === "3") {
                console.log(`\x1b[3mYou choosed the insane difficulty, enemy stats are x2.\x1b[0m\n`);
                Diff_insane();
                console.clear();
                Menu_Rounds();
                        input3()
                        if (action3 === "1") {
                            console.log(`\x1b[3mYou choosed to play 10 rounds before the boss fight.\x1b[0m\n`);
                            pressKeyToContinue();
                            mainFight();
                        } else if (action3 === "2") {
                            console.log(`\x1b[3mYou choosed to play 20 rounds before the boss fight.\x1b[0m\n`);
                            pressKeyToContinue();
                        //  Rounds_20();
                        } else if (action3 === "3") {
                            console.log(`\x1b[3mYou choosed to play 50 rounds before the boss fight.\x1b[0m\n`);
                            pressKeyToContinue();
                        //   Rounds_50();
                        } else if (action3 === "4") {
                            console.log(`\x1b[3mYou choosed to play 100 rounds before the boss fight.\x1b[0m\n`);
                            pressKeyToContinue();
                        //   Rounds_100(); 
                        } else if (action3 === "5") {
                                main();
                        }
    
    
    
                    } else if (action2 === "4") {
                        main();
                    }
            
        } else if (action1 === "2") {
            return;
        }
}
main();