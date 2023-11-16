"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.game = exports.Player = exports.Field = void 0;
class Field {
    fieldPosition = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    setMotion(x, y, figure) {
        if (this.fieldPosition[y][x] == 0) {
            this.fieldPosition[y][x] = figure;
        }
    }
    reset() {
        this.fieldPosition = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
    }
}
exports.Field = Field;
class Player {
    id;
    name;
    side;
    score;
    constructor(id, name, side) {
        this.id = id;
        this.name = name;
        this.side = side;
        this.score = 0;
    }
}
exports.Player = Player;
class game {
    player1;
    player2;
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }
}
exports.game = game;
