<template>
    <div>
    <svg fill="#FF0000" width="190px" height="190px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M 5 5 L 95 95  z" id="1" stroke-width="10px" stroke="white">
            <animate
            attributeName="stroke-width"
            from="0px"
            to="10px"
            dur="0.5s"
            />    
        </path>
        <path d="M 95 5 L 5 95 L z" id="1" stroke-width="10px" stroke="white">
            <animate
            attributeName="stroke-width"
            from="0px"
            to="10px"
            dur="0.5s"
            />  
            </path>
        </svg>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>

</style>
