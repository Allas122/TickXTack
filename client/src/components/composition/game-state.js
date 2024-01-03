import {ref} from "vue";
export class GameState{
    constructor(
        localGame = [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
        score = {X: 0, O: 0},
        whoseMove = [-1, 1][Math.floor(Math.random())]
    ) {
        this.localGame = ref(localGame)
        this.score = ref(score)
        this.whoseMove = ref(whoseMove)
        this.stepHooks = []

    }
    ResetGame(){
        this.localGame.value=[[0,0,0],[0,0,0],[0,0,0]]
    }
    addStepHook(StepHook){
        this.stepHooks.push(StepHook)
    }
    addStepHooks(StepHooks){
        this.stepHooks.push(...StepHooks)
    }
    stepFunctions(position){
        for (const func in this.stepHooks){
            this.stepHooks[func](this,position)
        }
    }
}

export function CheckWinnerFunction(gameObject,pos){
    let desk= gameObject.localGame.value
    const xy1=[]
    const xy2 = []

    for(let y=0;y<desk.length;y++){
        xy1.push(desk[y][y])
        xy2.push(desk[y][2-y])
        const yaxis = [desk[0][y],desk[1][y],desk[2][y]]
        if(desk[y].join("") === "111" || xy1.join("") == "111" || xy2.join("") =="111" || yaxis.join("")=="111"){
            gameObject.ResetGame()
            return gameObject.score.value.X +=1
        }
        if(desk[y].join("") === "-1-1-1"|| xy1.join("") == "-1-1-1" || xy2.join("") =="-1-1-1" || yaxis.join("")=="-1-1-1") {
            gameObject.ResetGame()
            return gameObject.score.value.O +=1
        }
    }
    return 0
}
export function SetStep(gameObject,pos){
    var step = gameObject.localGame.value
    if (step[pos[0]][pos[1]] == 0){
        step[pos[0]][pos[1]]=gameObject.whoseMove.value
        gameObject.whoseMove.value *= -1
    }
}

export const DefaultHooks = [SetStep,CheckWinnerFunction]
