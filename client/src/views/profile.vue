<template>
  <div>

  </div>
</template>

<script setup>
import {GetCode,GetUserAuth} from "../components/composition/auth-logic.js";
const code =GetCode();
if(code){
  GetUserAuth(code)
}
</script>

<style lang="scss" scoped>

</style>