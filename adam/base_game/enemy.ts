import Enemy from './interface/Int_enemies'

export default function enemy(path: string) {
    const fs = require('fs');
    const content = fs.readFileSync(path, 'utf-8');
    const stats: Enemy[] = JSON.parse(content);

        const statsenemy = stats[Math.floor(Math.random() * stats.length)];
        return statsenemy;
    }
//console.log(enemy('../fichiers_json/enemies.json'));