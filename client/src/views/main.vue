<template>
  <div>
    <header>
      <h1 class="header" id="h-up">TICKxTACK!!!</h1>
      <div id="control">
        <h2 class="header" id="h-down">Welcome to my small ed.project!!</h2>
      </div>
    </header>
    <main>
      <desk v-bind:GameObject="gameState"/>
      <score-visualizer :game-state="gameState"/>
    </main>
  </div>
</template>

<script setup>
import desk from "../components/desk.vue";
import UiButton from "../components/ui/ui-button.vue";
import {GameState,DefaultHooks} from "../components/composition/game-state.js";
import ScoreVisualizer from "../components/ui/scoreVisualizer.vue";
const gameState = new GameState()
gameState.addStepHooks(DefaultHooks)
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: url("https://i.gifer.com/Dtau.gif") repeat center;
  height: 600px;
}

.header {
  color: rgba(255, 255, 255, 0.7);
  transition: 0.5s;
  font-family: "Oswald", sans-serif;
  background-size: 100% 100%;
  user-select: none;
}

.header:hover {
  color: rgba(255, 255, 255, 1);
}

#h-up {
  font-size: 100px;
  height: 90px;
}
</style>
