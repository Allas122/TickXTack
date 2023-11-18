<template>
  <div id="list">
    <h1>Server List</h1>
    <div id = "inner">
        <serverPlane v-bind:data="data"
        v-for="data in state.res"/>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, toRefs } from "vue";
import hubApi from "./services/hubApi";
import serverPlane from "./ui/serverPlane.vue"
const state = reactive({
    res:{},
});
hubApi.getServerList.bind(this)
onMounted(() => {
    setInterval(()=>{hubApi.getServerList(0).then((res)=>{state.res = res.data})},500)
});

</script>

<style lang="scss" scoped>
#list{
    width: 200px;
    height: 100%;
    background-color: black;
    border-right: white 3px solid;
    h1{
        color: aliceblue;
        justify-content: center;
        display: flex;
        border-bottom: 3px solid white;
    }
    #inner{
        display: flex;
        flex-direction:column;
    }
}
</style>
