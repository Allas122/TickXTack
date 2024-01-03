<script setup>
import {GameState} from "../composition/game-state.js";

defineProps({
  gameState:GameState
})
</script>

<template>
<div id = "main">
  <div id = "X">
    X:{{gameState.score.value.X}}
  </div>
  <div id = "O">
    O:{{gameState.score.value.O}}
  </div>
</div>
</template>

<style scoped lang="scss">
#main{
  width: 600px;
  display: inline-flex;
  border: 1px solid white;
  justify-content: space-between;
  div{
    font-size: 40px;
    color: white;
    font-family: "Oswald", sans-serif;
  }
}
</style>