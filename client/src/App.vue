<script setup>
import panel from "./components/panel.vue";
import { BiGithub } from "oh-vue-icons/icons/bi";
import {addIcons } from "oh-vue-icons";
addIcons(BiGithub)
</script>

<template>
  <div id="main">
    <header>
      <panel />
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style scoped>
#main {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  min-height: 100%;
  margin: 0;
  padding: 0;
  background-color: #161a1d;
  font-family: "Oswald", sans-serif;
  color: white;

}
</style>
