import * as rl from 'readline-sync';




export function inputMenu(): string {

    let getInput = (question: string) => rl.question(`${question}\n`);
    let action: string = getInput(`----- OPTIONS -----\n1. 🗡️  ATTACK      2. 🍎 HEAL`);
    return action;

}

export function hpDisplay(enemyChoisi:any,characterChoisi: any, i : number, enemyFullHp : number, enemyMissingHp : number, enemyHpDebut : number, characterFullHp : number, charMissingHp : number, charHpDebut : number) {


    console.log(` ⚔️  - FIGHT ${[i]} - ⚔️\n`);
    console.log(`\x1b[31m${enemyChoisi.name}\x1b[0m\nHP : ${"❤️ ".repeat(Math.max(0, enemyFullHp))}${"💔".repeat(enemyMissingHp)}  ${Math.max(0, enemyFullHp)}/${enemyHpDebut}\n`);
    console.log(`\x1b[32m${characterChoisi.name}\x1b[0m\nHP : ${"❤️ ".repeat(Math.max(0, characterFullHp))}${"💔".repeat(charMissingHp)}  ${Math.max(0, characterFullHp)}/${charHpDebut}\n`);
    return [enemyFullHp, characterFullHp, enemyChoisi, characterChoisi, enemyMissingHp, charMissingHp, charHpDebut]

}

export function fight(enemyChoisi:any,characterChoisi: any, enemyFullHp : number, enemyMissingHp : number, characterFullHp : number, charMissingHp : number, charHpDebut : number) {
    const action = inputMenu();


    if (action === "1") {
        console.log(`\n\x1b[3m You attacked and dealt ${characterChoisi.str} damages! \x1b[0m\n`);
        console.log(`\x1b[3m ${enemyChoisi.name} attacked and dealt ${enemyChoisi.str} damages! \x1b[0m\n`);


        const damageDealtChar = Math.min(characterChoisi.str);
        enemyMissingHp += damageDealtChar
        enemyFullHp -= damageDealtChar

        const damageDealtEnemy = Math.min(enemyChoisi.str)
        charMissingHp += damageDealtEnemy
        characterFullHp -= damageDealtEnemy




    } else if (action === "2") {
        if (characterFullHp < charHpDebut) {
            console.log(`\x1b[3m You used heal! \x1b[0m\n`);
            const healAmount = Math.min(charHpDebut - characterFullHp, charHpDebut/2);
            characterFullHp += healAmount;
            charMissingHp = Math.max(0, charMissingHp - (charHpDebut / 2));

            console.log(`\x1b[3m ${enemyChoisi.name} attacked and dealt ${enemyChoisi.str} damages! \x1b[0m\n`);
    
            const damageDealtEnemy = Math.min(enemyChoisi.str)
            charMissingHp += damageDealtEnemy
            characterFullHp -= damageDealtEnemy
    

        } else {
            console.log("You can't use heal, you are full HP.");
        
    }


    return [enemyFullHp, characterFullHp, enemyChoisi, characterChoisi, enemyMissingHp, charMissingHp, charHpDebut]

} //if ( )



    
characterFullHp = Math.min(characterFullHp, charHpDebut)
   /* if (enemyFullHp === 0) {
        console.log(`\x1b[3m You won the fight! \x1b[0m\n`);
        return;
    } else if (characterFullHp === 0) {
        console.log(`\x1b[3m You lost the fight! \x1b[0m\n`);
        return;
    } */
}

export function pressKeyToContinue() {
    rl.question("Press Enter to continue...");
    console.clear();
}

/*export function resethp() {
    enemyFullHp = enemyChoisi.hp;
    enemyMissingHp = 0;
}*/



