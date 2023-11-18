<template>
    <div id = "desk" >
        <h1>X:{{scores.X}}||O:{{scores.O}}</h1>
        <div v-for="y in places.keys()" class="y">
            <placeForTicks 
            v-bind:state="places[x][y]"
            v-bind:position="{x:x,y:y}" 
            v-for="x in places[y].keys()" 
            @clickOnPlace = "setPlace"></placeForTicks>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs, onMounted} from 'vue'
import placeForTicks from './placeForTicks.vue'
export default {
    setup () {
        const state = reactive({
            places:[
                ["0","0","0"],
                ["0","0","0"],
                ["0","0","0"]
            ],
            round:0,
            apponent: [-1,1][Math.floor(Math.random()*2)].toString(),
            scores: {X:0,O:0}
        })
        function someoneWin(apponent){
            state.places=[
                    ["0","0","0"],
                    ["0","0","0"],
                    ["0","0","0"]
                    ]
            if(apponent == "-1"){
                state.scores.O +=1
            }else{
                state.scores.X +=1
            }
        }
        function checkWinner(){
            state.places.forEach((el)=>{
                if (el.join("") == "111" || el.join("") == "-1-1-1"){
                    someoneWin(el[0])
                }
            }
            )
        }
        function setPlace(pos){
            state.places[pos.x][pos.y] = state.apponent
            if(state.apponent == "-1"){
                state.apponent = "1"
            }else{
                state.apponent ="-1"
            }

        }
        onMounted(() => {
          setInterval(checkWinner,500)  
        })
        return {
            ...toRefs(state),
            setPlace
        }
    },
    components:{
        placeForTicks
    }
}
</script>

<style lang="scss" scoped>
#desk{
    background-color: black;
    width: 600px;
    height: 710px;
    display: grid;
}
.y{
    display: inline-flex;
    flex-direction: row;
}
</style>