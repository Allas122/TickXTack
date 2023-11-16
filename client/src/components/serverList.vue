<template>
    <div>

    </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'
import hubApi from "./services/hubApi"
export default {
    setup () {
        const state = reactive({
            res:Object,
        })
        onMounted(()=>{
            setInterval(hubApi.getServerList(state.res,0),500).then(()=>{
                console.log("Low pulling is start!")
            })
        })
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>