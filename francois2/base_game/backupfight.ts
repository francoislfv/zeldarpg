import * as rl from 'readline-sync';
import enemy from './enemy'
import character from './character'

const enemychoisi = enemy("./../fichiers_json/enemies.json");

const characterchoisi = character("./../fichiers_json/players.json");

//const enemystats = [enemychoisi.name, enemychoisi.hp, enemychoisi.str]
//const characterstats = [characterchoisi.name, characterchoisi.hp, characterchoisi.str]
const enemyhpdebut: number = enemychoisi.hp
let enemymissinghp: number = enemyhpdebut - enemychoisi.hp

const charhpdebut: number = characterchoisi.hp
const charmissinghp: number = charhpdebut - characterchoisi.hp



export function inputmenu() {
    let i: number = 0;
    if (i <= 0) {
        hpdisplay();
        i++;
    }

    function hpdisplay() {
        const underscore: string = "💔"
        //console.log("I".repeat(enemychoisi.hp));
        console.log(` ⚔️  - FIGHT 1 - ⚔️\n`)
        console.log(enemymissinghp)
        console.log(`\x1b[31m${enemychoisi.name}\x1b[0m\nHP : ${"❤️ ".repeat(enemychoisi.hp - enemymissinghp)}${"💔".repeat(enemymissinghp)}  ${enemychoisi.hp}/${enemyhpdebut}\n`);
        console.log(`\x1b[32m${characterchoisi.name}\x1b[0m\nHP : ${"❤️ ".repeat(characterchoisi.hp)}${underscore.repeat(charmissinghp)}  ${characterchoisi.hp}/${charhpdebut}\n`)

        return hpdisplay
    }

    const getInput = (question: string) => rl.question(`${question}\n`);
    let action: string = getInput(`----- OPTIONS -----\n1. 🗡️  ATTACK      2. 🍎 HEAL`)
    return action
    
}

export function fight() {

    
    const input = inputmenu()
    

    if (input === "1") {
        console.log(`\x1b[3m You attacked and dealt ${characterchoisi.str} damages! \x1b[0m\n`)
        console.log(`\x1b[3m ${enemychoisi.name} attacked and dealt ${enemychoisi.str} damages! \x1b[0m`)
        enemymissinghp = enemychoisi.hp - characterchoisi.str
        console.log(enemymissinghp)

    } else if (input === "2") {
        if (characterchoisi.hp < 60) {
            console.log(`\x1b[3m You used heal! \x1b[0m\n`)
        } else if (characterchoisi.hp > 59) {
            console.log("You can't use heal, you are full HP.")
        }
    }
    inputmenu();
}
console.clear()
fight()
console.clear()
fight()
console.clear()
fight()