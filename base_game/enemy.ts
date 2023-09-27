import Enemy from './interface/Int_enemies'

export default function enemy(path: string) {
    const fs = require('fs');
    const content = fs.readFileSync(path, 'utf-8');
    const stats: Enemy[] = JSON.parse(content);

        const statsenemy = stats[0];
        return statsenemy.name[0], statsenemy.hp[0], statsenemy.str[0];

}