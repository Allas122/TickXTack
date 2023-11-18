<script setup>
import Desk from './components/desc.vue'
import ServerList from './components/serverList.vue';
</script>

<template>
  <div id = "main">
      <ServerList/>
  </div>
</template>

<style scoped>
#main{
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 100%;
  height:100%;
  margin: 0;
  padding: 0;
  background-color: black;
}
</style>



