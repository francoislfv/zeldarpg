import enemy from "./enemy"
import boss from "./boss"
import character from "./character"

export default function tower(path: string) {

//const fightencours = 

const enemychoisi = enemy("./../fichiers_json/enemies.json");
let i = 0;
while (i < 10) {
    if (enemychoisi.hp === 0) {
        console.log(`you are entering the level ${i}`);
//        console.log(fight.enemy);
    }
i = i + 1;
}
if (i === 10) {
    console.log(`Final Boss!\n level ${i}`);
//  console.log(fight.boss);
}
}