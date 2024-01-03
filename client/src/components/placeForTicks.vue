<template>
    <div id = "place" @click="$emit('clickOnPlace',position)">
        <div id="chrest" v-if="state == 1">
            <Chrest/>
        </div>
        <div id="circle" v-else-if="state == -1">
            <Circle/>
        </div>
        <div v-else/>
    </div>
</template>

<script setup>
import {defineProps} from 'vue'
import Chrest from '../assets/Chrest.vue';
import Circle from '../assets/Circle.vue'
defineProps({state:Number,position:{x:Number,y:Number}})
</script>

<style lang="scss" scoped>
#place{
    width: 195px;
    height: 195px;
    border: 2px solid white;
}
.figure{
    width: 100px;
    height: 100px;
}
</style>