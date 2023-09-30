import Player from './interface/Int_players'

export default function character(path: string) {
    const fs = require('fs');
    const content = fs.readFileSync(path, 'utf-8');
    const stats: Player[] = JSON.parse(content);

    const statscharater = stats[Math.floor(Math.random() * stats.length)];
    return statscharater;
}