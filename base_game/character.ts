import Player from "./interface/Int_players";
import Enemy from "./interface/Int_enemies";
import Boss from "./interface/Int_bosses";
import { stat } from "fs";
export default function character(player: string) {
    const fs = require('fs');
    const content = fs.readFileSync(character, 'utf-8');
    const stats.id = JSON.parse(content);



//boucle fight
    while (stats.hp > 0) {
//fight enemy
        if () {
        stats.hp = stats.hp - stats.str;
        } 
//fight boss
        else if () {
        stats.hp = stats.hp - stats.str;
        }
    }



}
character(process.argv[2]);