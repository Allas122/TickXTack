<template>
    <div>
        <button>
            <slot></slot>
        </button>
    </div>
</template>

<script>
export default {
    props:{
        glass:Boolean
    },
    name:"ui-button",
    setup () {
        
        return {}
    }
}
</script>

<style lang="scss" scoped>
button{
    background-color: transparent;
    border: 2px solid white;
    border-radius: 10px;
    color:white;
    font-family: 'Roboto', sans-serif;
    transition: 0.5s;
}
button:active{
  transform: scale(1.01);
}
</style>