import { UUID } from "mongodb"

export class Field{
    fieldPosition = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ]
    setMotion(x:number,y:number,figure:number){
        if(this.fieldPosition[y][x] ==0){
            this.fieldPosition[y][x] = figure
        }
    }
    reset(){
        this.fieldPosition = [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ]
    }
}

export class Player{
    id:string
    name:string
    side:number
    score:number
    constructor(id:string,name:string,side:number){
        this.id = id
        this.name = name
        this.side = side
        this.score = 0
    }
}


export class game{
    player1: Player;
    player2: Player;    
    constructor(player1:Player,player2:Player){
        this.player1 = player1
        this.player2 = player2
    }
}