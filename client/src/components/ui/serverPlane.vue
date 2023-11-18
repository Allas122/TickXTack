<template>
  <div id = "plane">
    <h2>{{ data.name }}:{{data.players}}/2</h2>
    <h3>date:{{data.created_at}}</h3>
  </div>
</template>

<script setup>
import { reactive, toRefs, defineProps } from "vue";
const state = reactive({
    count: 0,
});
defineProps({
    data: Object,
});
</script>

<style lang="scss" scoped>
#plane{
    color: aliceblue;
    border: 2px solid white;
    height:90px;
    font-size: 10px;
    padding: 0;
    margin: 0;
}
</style>
