<template>
    <div id = "place" @click="$emit('clickOnPlace',position)">
        <div id="chrest" v-if="state == '1'">
            <Chrest/>
        </div>
        <div id="circle" v-else-if="state == '-1'">
            <Circle/>
        </div>
        <div v-else/>
    </div>
</template>

<script setup>
import {defineProps,reactive, toRefs } from 'vue'
import Chrest from '../assets/Chrest.vue';
import Circle from '../assets/Circle.vue'
defineProps({state:String,position:{x:Number,y:Number}})
</script>

<style lang="scss" scoped>
#place{
    width: 190px;
    height: 190px;
    border: 5px solid white;
}
.figure{
    width: 100px;
    height: 100px;
}
</style>