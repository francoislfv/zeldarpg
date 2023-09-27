import Player from "./interface/Int_players";
import Enemy from "./interface/Int_enemies";
import Boss from "./interface/Int_bosses";
import character from "./character";
import enemy from "./enemy";
import boss from "./boss";
export default function fight(path: string) {
   
   
const statscharacter = character("\\wsl.localhost\Debian\root\group-1012230\adam\fichiers_json\players.json");
const statsenemy = enemy("\\wsl.localhost\Debian\root\group-1012230\adam\fichiers_json\enemies.json");
const statsboss = boss("\\wsl.localhost\Debian\root\group-1012230\adam\fichiers_json\bosses.json");

    //boucle fight
    while (statscharacter.hp > 0) {
        //fight enemy
                if () {
                statscharacter.hp = statscharacter.hp - statsenemy.str;
                } 
        //fight boss
                else if () {
                statscharacter.hp = statscharacter.hp - statsboss.str;
                }
            }
        
        
        
        }

    
