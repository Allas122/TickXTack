<template>
  <div id="desk">
    <div class="y" v-for="y in [0,1,2]">
      <PlaceForTicks v-for="x in [0,1,2]" :state="GameObject.localGame.value[x][y]" :position='[x,y]'  @clickOnPlace="(position)=>GameObject.stepFunctions(position)"></PlaceForTicks>
    </div>
  </div>
</template>

<script setup>
import PlaceForTicks from "./placeForTicks.vue";
import {GameState} from "./composition/game-state.js";
defineProps({
  GameObject: GameState,
})

</script>

<style lang="scss" scoped>
#desk {
  width: 600px;
  height: 600px;
  justify-content: left;
  flex-direction: column;
  .y{
    display: flex;
    flex-direction: row;
  }
}

</style>