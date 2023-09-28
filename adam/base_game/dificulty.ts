import enemy from "./enemy";
import boss from "./boss";

let enemyChoisi = enemy("./../fichiers_json/enemies.json");
let bossChoisi = boss("./../fichiers_json/bosses.json");

export default function Difficulty_mobs_insane () {
    enemyChoisi.hp = enemyChoisi.hp * 2;
    enemyChoisi.mp = enemyChoisi.mp * 2;
    enemyChoisi.str = enemyChoisi.str * 2;
    enemyChoisi.int = enemyChoisi.int * 2;
    enemyChoisi.def = enemyChoisi.def * 2;
    enemyChoisi.res = enemyChoisi.res * 2;
    enemyChoisi.spd = enemyChoisi.spd * 2;
    enemyChoisi.luck = enemyChoisi.luck * 2;
    enemyChoisi.race = enemyChoisi.race * 2;
    enemyChoisi.class = enemyChoisi.class * 2;
    bossChoisi.hp = bossChoisi.hp * 2;
    bossChoisi.mp = bossChoisi.mp * 2;
    bossChoisi.str = bossChoisi.str * 2;
    bossChoisi.int = bossChoisi.int * 2;
    bossChoisi.def = bossChoisi.def * 2;
    bossChoisi.res = bossChoisi.res * 2;
    bossChoisi.spd = bossChoisi.spd * 2;
    bossChoisi.luck = bossChoisi.luck * 2;
    bossChoisi.race = bossChoisi.race * 2;
    bossChoisi.class = bossChoisi.class * 2;

}

export function Difficulty_mobs_hard () {
    enemyChoisi.hp = enemyChoisi.hp * 1.5;
    enemyChoisi.mp = enemyChoisi.mp * 1.5;
    enemyChoisi.str = enemyChoisi.str * 1.5;
    enemyChoisi.int = enemyChoisi.int * 1.5;
    enemyChoisi.def = enemyChoisi.def * 1.5;
    enemyChoisi.res = enemyChoisi.res * 1.5;
    enemyChoisi.spd = enemyChoisi.spd * 1.5;
    enemyChoisi.luck = enemyChoisi.luck * 1.5;
    enemyChoisi.race = enemyChoisi.race * 1.5;
    enemyChoisi.class = enemyChoisi.class * 1.5;
    bossChoisi.hp = bossChoisi.hp * 1.5;
    bossChoisi.mp = bossChoisi.mp * 1.5;
    bossChoisi.str = bossChoisi.str * 1.5;
    bossChoisi.int = bossChoisi.int * 1.5;
    bossChoisi.def = bossChoisi.def * 1.5;
    bossChoisi.res = bossChoisi.res * 1.5;
    bossChoisi.spd = bossChoisi.spd * 1.5;
    bossChoisi.luck = bossChoisi.luck * 1.5;
    bossChoisi.race = bossChoisi.race * 1.5;
    bossChoisi.class = bossChoisi.class * 1.5;
console.log(bossChoisi.name, bossChoisi.hp, bossChoisi.mp)
}
Difficulty_mobs_hard();
Difficulty_mobs_insane();