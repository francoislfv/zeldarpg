import Boss from './interface/Int_bosses'

export default function enemy(path: string) {
    const fs = require('fs');
    const content = fs.readFileSync(path, 'utf-8');
    const stats: Boss[] = JSON.parse(content);

        const statsboss = stats[0];
        return statsboss;
    }
