import Player from "./interface/Int_players";
import { stat } from "fs";
export default function character(path: string) {
    const fs = require('fs');
    const content = fs.readFileSync(path, 'utf-8');
    const stats: Player[] = JSON.parse(content);

    const statscharater = stats[Math.floor(Math.random() * stats.length)];
    return statscharater;

}
//console.log(character('../fichiers_json/players.json'));