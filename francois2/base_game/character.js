"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function character(path) {
    var fs = require('fs');
    var content = fs.readFileSync(path, 'utf-8');
    var stats = JSON.parse(content);
    var statscharater = stats[Math.floor(Math.random() * stats.length)];
    return statscharater;
}
exports.default = character;
