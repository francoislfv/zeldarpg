"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jeu = exports.mainFight = exports.checkround = exports.input3 = exports.input2 = exports.input1 = exports.pressKeyToContinue = exports.hpDisplay = exports.fight = exports.inputMenu = exports.characterChoisi = exports.enemyChoisi = void 0;
var rl = require("readline-sync");
var enemy_1 = require("./enemy");
var character_1 = require("./character");
var menu_1 = require("./menu");
exports.enemyChoisi = (0, enemy_1.default)("./../fichiers_json/enemies.json");
exports.characterChoisi = (0, character_1.default)("./../fichiers_json/players.json");
var enemyHp = exports.enemyChoisi.hp;
var characterHp = exports.characterChoisi.hp;
var characterHpDebut = exports.characterChoisi.hp;
var enemyHpDebut = exports.enemyChoisi.hp;
function inputMenu() {
    var getInput = function (question) { return rl.question("".concat(question, "\n")); };
    var action = getInput("----- OPTIONS -----\n1. \uD83D\uDDE1\uFE0F  ATTACK      2. \uD83C\uDF4E HEAL");
    return action;
}
exports.inputMenu = inputMenu;
function fight() {
    var action = inputMenu();
    var characterHpDebut = exports.characterChoisi.hp;
    if (action === "1") {
        var damageDealtEnemy = Math.min(exports.enemyChoisi.str);
        characterHp = characterHp - damageDealtEnemy;
        var damageDealtChar = Math.min(exports.characterChoisi.str);
        enemyHp = enemyHp - damageDealtChar;
        console.log("\n\u001B[3m You attacked and dealt ".concat(damageDealtChar, " damages! \u001B[0m\n"));
        console.log("\u001B[3m ".concat(exports.enemyChoisi.name, " attacked and dealt ").concat(damageDealtEnemy, " damages! \u001B[0m\n"));
        return { enemyHp: enemyHp, characterHp: characterHp };
    }
    else if (action === "2") {
        if (characterHp < characterHpDebut) {
            console.log("\u001B[3m You used heal! \u001B[0m\n");
            var healAmount = Math.min(characterHpDebut - characterHp, characterHpDebut / 2);
            characterHp += healAmount;
            var damageDealtEnemy = Math.min(exports.enemyChoisi.str);
            characterHp = characterHp - damageDealtEnemy;
            if (characterHp > characterHpDebut) {
                characterHp = characterHpDebut;
            }
            console.log("\u001B[3m ".concat(exports.enemyChoisi.name, " attacked and dealt ").concat(exports.enemyChoisi.str, " damages! \u001B[0m\n"));
        }
        else {
            console.log("You can't use heal, you are full HP.");
            pressKeyToContinue();
        }
    }
    characterHp = Math.min(characterHp, characterHpDebut);
}
exports.fight = fight;
function hpDisplay() {
    var charRemainingHp = Math.max(0, characterHp);
    var enemyRemainingHp = Math.max(0, enemyHp);
    console.log(" \u2694\uFE0F  - FIGHT ".concat(etageactuel, " - \u2694\uFE0F\n"));
    console.log("\u001B[31m".concat(exports.enemyChoisi.name, "\u001B[0m\nHP : ").concat("❤️ ".repeat(enemyRemainingHp)).concat("💔".repeat(Math.max(0, enemyHpDebut - enemyRemainingHp)), "  ").concat(enemyRemainingHp, "/").concat(enemyHpDebut, "\n"));
    console.log("\u001B[32m".concat(exports.characterChoisi.name, "\u001B[0m\nHP : ").concat("❤️ ".repeat(charRemainingHp)).concat("💔".repeat(Math.max(0, characterHpDebut - charRemainingHp)), "  ").concat(charRemainingHp, "/").concat(characterHpDebut, "\n"));
}
exports.hpDisplay = hpDisplay;
function pressKeyToContinue() {
    rl.question("Press Enter to continue...");
    console.clear();
}
exports.pressKeyToContinue = pressKeyToContinue;
var action1;
var action2;
var action3;
function input1() {
    var getInput = function (question) { return rl.question("".concat(question, "\n")); };
    action1 = getInput('');
    return action1;
}
exports.input1 = input1;
function input2() {
    var getInput = function (question) { return rl.question("".concat(question, "\n")); };
    action2 = getInput('');
    return action2;
}
exports.input2 = input2;
function input3() {
    var getInput = function (question) { return rl.question("".concat(question, "\n")); };
    action3 = getInput('');
    return action3;
}
exports.input3 = input3;
var roundJoué = 1;
var etageactuel = 1;
var etageprochain = 2;
function checkround() {
    if (etageactuel === etageprochain) {
        etageprochain = etageprochain + 1;
        roundJoué++;
        return roundJoué;
    }
}
exports.checkround = checkround;
function mainFight() {
    while (roundJoué < 10) {
        if (characterHp > 0 && enemyHp > 0) {
            hpDisplay();
            fight();
            pressKeyToContinue();
            console.log(roundJoué);
        }
        else {
            etageactuel = etageactuel + 1;
            checkround();
            if (enemyHp <= 0) {
                exports.enemyChoisi = (0, enemy_1.default)("./../fichiers_json/enemies.json");
                enemyHpDebut = exports.enemyChoisi.hpDebut;
                enemyHp = exports.enemyChoisi.hp;
                console.log("Tu as termin\u00E9 l'\u00E9tage ".concat(roundJoué, "! Tu changes de niveau et tombes sur : ").concat(exports.enemyChoisi.name));
                pressKeyToContinue();
            }
            if (characterHp === 0) {
                console.log("Tu es mort");
            }
        }
    }
}
exports.mainFight = mainFight;
function jeu() {
    (0, menu_1.Menu_welcome_player)();
    input1();
    console.clear();
    if (action1 === "1") {
        (0, menu_1.Menu_difficulty)();
        input2();
        if (action2 === "1") {
            console.log("\u001B[3mYou choosed the normal difficulty, enemy stats are unchanged.\u001B[0m\n");
            console.clear();
            (0, menu_1.Menu_Rounds)();
            input3();
            if (action3 === "1") {
                console.log("\u001B[3mYou choosed to play 10 rounds before the boss fight.\u001B[0m\n");
                pressKeyToContinue();
                mainFight();
            }
        }
        else if (action2 === "2") {
            console.log("\u001B[3mYou choosed the hard difficulty, enemy stats are x1.5.\u001B[0m\n");
            console.clear();
        }
        else if (action2 === "3") {
            console.log("\u001B[3mYou choosed the insane difficulty, enemy stats are x2.\u001B[0m\n");
            console.clear();
        }
    }
    else if (action1 === "2") {
        return;
    }
}
exports.jeu = jeu;
jeu();
