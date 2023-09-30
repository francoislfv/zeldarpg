"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function boss(path) {
    var fs = require('fs');
    var content = fs.readFileSync(path, 'utf-8');
    var stats = JSON.parse(content);
    var statsboss = stats[Math.floor(Math.random() * stats.length)];
    return statsboss;
}
exports.default = boss;
