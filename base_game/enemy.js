"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function enemy(path) {
    var fs = require('fs');
    var content = fs.readFileSync(path, 'utf-8');
    var stats = JSON.parse(content);
    var statsenemy = stats[Math.floor(Math.random() * stats.length)];
    return statsenemy;
}
exports.default = enemy;
