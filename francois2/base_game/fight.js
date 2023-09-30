"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainFight = exports.jeu = exports.checkround = exports.input3 = exports.input2 = exports.input1 = exports.pressKeyToContinue = exports.bossHpDisplay = exports.hpDisplay = exports.bossFight = exports.fight = exports.inputMenu = exports.bosschoisi = exports.characterChoisi = exports.enemyChoisi = void 0;
var rl = require("readline-sync");
var enemy_1 = require("./enemy");
var character_1 = require("./character");
var boss_1 = require("./boss");
var basic_game_customization_1 = require("../mods/basic_game_customization");
exports.enemyChoisi = (0, enemy_1.default)("./../fichiers_json/enemies.json");
exports.characterChoisi = (0, character_1.default)("./../fichiers_json/players.json");
exports.bosschoisi = (0, boss_1.default)("./../fichiers_json/bosses.json");
var enemyHp = exports.enemyChoisi.hp;
var characterHp = exports.characterChoisi.hp;
var bossHp = exports.bosschoisi.hp;
var characterHpDebut = exports.characterChoisi.hp;
var enemyHpDebut = exports.enemyChoisi.hp;
var bossHpDebut = exports.bosschoisi.hp;
function inputMenu() {
    var getInput = function (question) { return rl.question("".concat(question, "\n")); };
    var action = getInput("----- OPTIONS -----\n1. \uD83D\uDDE1\uFE0F  ATTACK      2. \uD83C\uDF4E HEAL");
    return action;
}
exports.inputMenu = inputMenu;
function fight(Difficulty) {
    var action = inputMenu();
    var characterHpDebut = exports.characterChoisi.hp;
    if (action === "1") {
        var damageDealtEnemy = Math.min(exports.enemyChoisi.str * Difficulty);
        characterHp = characterHp - damageDealtEnemy;
        var damageDealtChar = Math.min(exports.characterChoisi.str);
        enemyHp = enemyHp * Difficulty - damageDealtChar;
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
function bossFight() {
    console.clear();
    while (characterHp > 0 && bossHp > 0) {
        bossHpDisplay();
        var action = inputMenu();
        var characterHpDebut_1 = exports.characterChoisi.hp;
        if (action === "1") {
            var damageDealtBoss = Math.min(exports.bosschoisi.str);
            characterHp = characterHp - damageDealtBoss;
            var damageDealtChar = Math.min(exports.characterChoisi.str);
            bossHp = bossHp - damageDealtChar;
            console.log("\n\u001B[3m You attacked and dealt ".concat(damageDealtChar, " damage! \u001B[0m\n"));
            console.log("\u001B[3m ".concat(exports.bosschoisi.name, " attacked and dealt ").concat(damageDealtBoss, " damage! \u001B[0m\n"));
        }
        else if (action === "2") {
            if (characterHp < characterHpDebut_1) {
                console.log("\u001B[3m You used heal! \u001B[0m\n");
                var healAmount = Math.min(characterHpDebut_1 - characterHp, characterHpDebut_1 / 2);
                characterHp += healAmount;
                var damageDealtBoss = Math.min(exports.bosschoisi.str);
                characterHp = characterHp - damageDealtBoss;
                if (characterHp > characterHpDebut_1) {
                    characterHp = characterHpDebut_1;
                }
                console.log("\u001B[3m ".concat(exports.bosschoisi.name, " attacked and dealt ").concat(exports.bosschoisi.str, " damage! \u001B[0m\n"));
            }
            else {
                console.log("You can't use heal, you are at full HP.");
                pressKeyToContinue();
            }
        }
        characterHp = Math.min(characterHp, characterHpDebut_1);
        pressKeyToContinue();
    }
    var isBossDefeated = bossHp <= 0;
    displayBossLore(isBossDefeated);
}
exports.bossFight = bossFight;
function displayBossLore(isBossDefeated) {
    console.clear();
    if (isBossDefeated) {
        console.log("".concat(exports.bosschoisi.name, " is defeated, vanishing into the darkness. The treasure is revealed. \n").concat(exports.characterChoisi.name, " triumphs, restoring peace to Hyrule."));
    }
    else {
        console.log("".concat(exports.characterChoisi.name, " falls, unable to continue. \n").concat(exports.bosschoisi.name, " triumphs, plunging Hyrule into eternal darkness."));
        pressKeyToContinue();
        return;
    }
}
function hpDisplay(Difficulty) {
    var charRemainingHp = Math.max(0, characterHp);
    var enemyRemainingHp = Math.max(0, enemyHp * Difficulty);
    console.log(" \u2694\uFE0F  - FIGHT ".concat(etageactuel, " - \u2694\uFE0F\n"));
    console.log("\u001B[31m".concat(exports.enemyChoisi.name, "\u001B[0m\nHP : ").concat("❤️ ".repeat(enemyRemainingHp)).concat("💔".repeat(Math.max(0, enemyHpDebut - enemyRemainingHp)), "  ").concat(enemyRemainingHp, "/").concat(enemyHpDebut * Difficulty, "\n"));
    console.log("\u001B[32m".concat(exports.characterChoisi.name, "\u001B[0m\nHP : ").concat("❤️ ".repeat(charRemainingHp)).concat("💔".repeat(Math.max(0, characterHpDebut - charRemainingHp)), "  ").concat(charRemainingHp, "/").concat(characterHpDebut, "\n"));
}
exports.hpDisplay = hpDisplay;
function bossHpDisplay() {
    var charRemainingHp = Math.max(0, characterHp);
    var bossRemainingHp = Math.max(0, bossHp);
    console.log(" \u2694\uFE0F  - BOSS FIGHT - \u2694\uFE0F\n");
    console.log("\u001B[31m".concat(exports.bosschoisi.name, "\u001B[0m\nHP : ").concat("❤️ ".repeat(bossRemainingHp)).concat("💔".repeat(Math.max(0, bossHpDebut - bossRemainingHp)), "  ").concat(bossRemainingHp, "/").concat(bossHpDebut, "\n"));
    console.log("\u001B[32m".concat(exports.characterChoisi.name, "\u001B[0m\nHP : ").concat("❤️ ".repeat(charRemainingHp)).concat("💔".repeat(Math.max(0, characterHpDebut - charRemainingHp)), "  ").concat(charRemainingHp, "/").concat(characterHpDebut, "\n"));
}
exports.bossHpDisplay = bossHpDisplay;
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
var roundJoué = 0;
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
// let roundsToPlay: number
function jeu() {
    (0, basic_game_customization_1.Menu_welcome_player)();
    input1();
    console.clear();
    if (action1 === "1") {
        (0, basic_game_customization_1.Menu_Rounds)();
        input2();
        if (action2 === "1") {
            console.log("\u001B[31m you have chosen to enter the 10-rounds tower. The final boss awaits you at the top.\u001B[0m\n\n");
            console.clear();
            (0, basic_game_customization_1.Menu_difficulty)();
            input3();
            if (action3 === "1") {
                console.log("\u001B[31m You have chosen to play on normal difficulty. Enemy stats are unchanged.\u001B[0m\n\n");
                pressKeyToContinue();
                mainFight((0, basic_game_customization_1.ChooseRoundsToPlay)(10), (0, basic_game_customization_1.ChooseDifficultyToPlay)(1));
            }
            else if (action3 === "2") {
                console.log("\u001B[31m You have chosen to play on hard difficulty. Enemy stats are x1.5.\u001B[0m\n\n");
                pressKeyToContinue();
                console.log("1111cc");
                mainFight((0, basic_game_customization_1.ChooseRoundsToPlay)(10), (0, basic_game_customization_1.ChooseDifficultyToPlay)(1.5));
                console.log("21°03NNCNKC");
            }
            else if (action3 === "3") {
                console.log("\u001B[31m You have chosen to play on hard difficulty. Enemy stats are x1.5.\u001B[0m\n\n");
                pressKeyToContinue();
                mainFight((0, basic_game_customization_1.ChooseRoundsToPlay)(10), (0, basic_game_customization_1.ChooseDifficultyToPlay)(2));
            }
        }
        else if (action2 === "2") {
            console.log("\u001B[31m you have chosen to enter the 20-rounds tower. The final boss awaits you at the top.\u001B[0m\n\n");
            console.clear();
            (0, basic_game_customization_1.Menu_difficulty)();
            input3();
            if (action3 === "1") {
                console.log("\u001B[31m You have chosen to play on normal difficulty. Enemy stats are unchanged.\u001B[0m\n\n");
                pressKeyToContinue();
                mainFight((0, basic_game_customization_1.ChooseRoundsToPlay)(20), (0, basic_game_customization_1.ChooseDifficultyToPlay)(1));
            }
            else if (action3 === "2") {
                console.log("\u001B[31m You have chosen to play on hard difficulty. Enemy stats are x1.5.\u001B[0m\n\n");
                pressKeyToContinue();
                mainFight((0, basic_game_customization_1.ChooseRoundsToPlay)(20), (0, basic_game_customization_1.ChooseDifficultyToPlay)(1.5));
            }
            else if (action3 === "3") {
                console.log("\u001B[31m You have chosen to play on insane difficulty. Enemy stats are x2.\u001B[0m\n\n");
                pressKeyToContinue();
                mainFight((0, basic_game_customization_1.ChooseRoundsToPlay)(20), (0, basic_game_customization_1.ChooseDifficultyToPlay)(2));
            }
        }
        else if (action2 === "3") {
            console.log("\u001B[31m you have chosen to enter the 50-rounds tower. The final boss awaits you at the top.\u001B[0m\n\n");
            console.clear();
            (0, basic_game_customization_1.Menu_difficulty)();
            input3();
            if (action3 === "1") {
                console.log("\u001B[31m You have chosen to play on normal difficulty. Enemy stats are unchanged.\u001B[0m\n\n");
                pressKeyToContinue();
                mainFight((0, basic_game_customization_1.ChooseRoundsToPlay)(50), (0, basic_game_customization_1.ChooseDifficultyToPlay)(1));
            }
            else if (action3 === "2") {
                console.log("\u001B[31m You have chosen to play on hard difficulty. Enemy stats are x1.5.\u001B[0m\n\n");
                pressKeyToContinue();
                mainFight((0, basic_game_customization_1.ChooseRoundsToPlay)(50), (0, basic_game_customization_1.ChooseDifficultyToPlay)(1.5));
            }
            else if (action3 === "3") {
                console.log("\u001B[31m You have chosen to play on insane difficulty. Enemy stats are x2.\u001B[0m\n\n");
                pressKeyToContinue();
                mainFight((0, basic_game_customization_1.ChooseRoundsToPlay)(50), (0, basic_game_customization_1.ChooseDifficultyToPlay)(2));
            }
        }
        else if (action2 === "4") {
            console.log("\u001B[31m you have chosen to enter the 20-rounds tower. The final boss awaits you at the top.\u001B[0m\n\n");
            console.clear();
            (0, basic_game_customization_1.Menu_difficulty)();
            input3();
            if (action3 === "1") {
                console.log("\u001B[31m You have chosen to play on normal difficulty. Enemy stats are unchanged.\u001B[0m\n\n");
                pressKeyToContinue();
                mainFight((0, basic_game_customization_1.ChooseRoundsToPlay)(100), (0, basic_game_customization_1.ChooseDifficultyToPlay)(1));
            }
            else if (action3 === "2") {
                console.log("\u001B[31m You have chosen to play on hard difficulty. Enemy stats are x1.5.\u001B[0m\n\n");
                pressKeyToContinue();
                mainFight((0, basic_game_customization_1.ChooseRoundsToPlay)(100), (0, basic_game_customization_1.ChooseDifficultyToPlay)(1.5));
            }
            else if (action3 === "3") {
                console.log("\u001B[31m You have chosen to play on insane difficulty. Enemy stats are x2.\u001B[0m\n\n");
                pressKeyToContinue();
                mainFight((0, basic_game_customization_1.ChooseRoundsToPlay)(100), (0, basic_game_customization_1.ChooseDifficultyToPlay)(2));
            }
        }
    }
    else if (action1 === "2") {
        console.log("LEAVING THE GAME\n");
        pressKeyToContinue();
        return;
    }
}
exports.jeu = jeu;
jeu();
function mainFight(roundsToPlay, Difficulty) {
    while (roundJoué < roundsToPlay) {
        if (characterHp > 0 && enemyHp > 0) {
            hpDisplay(Difficulty);
            console.log(roundsToPlay);
            fight(Difficulty);
            pressKeyToContinue();
        }
        else {
            etageactuel = etageactuel + 1;
            checkround();
            if (enemyHp <= 0) {
                exports.enemyChoisi = (0, enemy_1.default)("./../fichiers_json/enemies.json");
                enemyHpDebut = exports.enemyChoisi.hpDebut;
                enemyHp = exports.enemyChoisi.hp;
                console.log("You finished the floor ".concat(roundJoué, "! You change level and come across: ").concat(exports.enemyChoisi.name));
                pressKeyToContinue();
            }
            if (characterHp <= 0) {
                console.log("You are dead...");
                return;
            }
        }
    }
    if (roundJoué === roundsToPlay) {
        console.log("".concat(exports.characterChoisi.name, " stands before the dungeon gates, sword in hand. The gates creak open, \nrevealing ").concat(exports.bosschoisi.name, ", a terrifying creature. The epic battle begins."));
        pressKeyToContinue();
        if (characterHp > 0) {
            bossFight();
        }
    }
}
exports.mainFight = mainFight;
