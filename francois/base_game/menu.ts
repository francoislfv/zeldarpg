import * as rl from 'readline-sync'; 
import enemy from './enemy';
import character from './character';

export default function inputmenu () {
    const enemychoisi = enemy("./../fichiers_json/enemies.json");
    
    const characterchoisi = character("./../fichiers_json/players.json");

    const enemystats = [enemychoisi.name, enemychoisi.hp, enemychoisi.str]
    const characterstats = [characterchoisi.name, characterchoisi.hp, characterchoisi.str]
    const enemyhpdebut: number = enemychoisi.hp
    const enemymissinghp: number = enemyhpdebut - enemychoisi.hp

    const charhpdebut: number = characterchoisi.hp
    const charmissinghp: number = charhpdebut - characterchoisi.hp


hpdisplay()

        function hpdisplay () {
            const underscore: string ="💔"
            //console.log("I".repeat(enemychoisi.hp));
            console.log(` ⚔️  - FIGHT 1 - ⚔️\n`)
            console.log(`\x1b[31m${enemychoisi.name}\x1b[0m\nHP : ${"❤️ ".repeat(enemychoisi.hp)}${underscore.repeat(enemymissinghp)}  ${enemychoisi.hp}/${enemyhpdebut}\n`);
            console.log(`\x1b[32m${characterchoisi.name}\x1b[0m\nHP : ${"❤️ ".repeat(characterchoisi.hp)}${underscore.repeat(charmissinghp)}  ${characterchoisi.hp}/${charhpdebut}\n`)
            
        
    }

const getInput = (question: string) => rl.question(`${question}\n`);
let action: string = getInput(`----- OPTIONS -----\n1. 🗡️  ATTACK      2. 🍎 HEAL`)
return action

}

//`====== FIGHT 1 ======\n ${enemychoisi.name}\nHP : \n\n ${characterchoisi.name}\nHP : ${characterchoisi.hp}\n\n ----- OPTIONS -----\n 