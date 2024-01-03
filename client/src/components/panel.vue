<template>
    <div id="panel">
        <router-link id="logo" to="/">TICKxTACK!!!</router-link>
        <div id="refs">
            <router-link to="/auth">AUTH</router-link>
        </div>
    </div>
</template>

<script>
export default {
    setup () {
        return {}
    }
}
</script>

<style lang="scss" scoped>
#panel{
    height:80px;
    width:100%;
    background-color: #0B090A;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    #logo{
        color: white;
        font-family: 'Oswald', sans-serif;
        font-size: 50px;
        user-select: none;
        text-decoration: none;
    }
    #logo::after{
        content: "";
        display: block;
        width:0%;
        height: 2px;
        background-color: white;
        transition: 3s;
    }
    #logo:hover:after{
        content: "";
        display: block;
        width:100%;
        height: 2px;
        background-color: white;
    }
}
#refs{
    
    display: flex;
    align-items: center;
    font-size: 30px;
    font-family: 'Oswald', sans-serif;
    a{
        text-decoration: none;
        color: white;
    }

}
</style>