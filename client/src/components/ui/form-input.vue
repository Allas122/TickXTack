<template>
  <div>
    <slot/>
    :
    <div id="inputs">
      <input :type="Type" :value="modelValue" @input="$emit('update:modelValue',$event.target.value)"/>
      <button v-if="type === 'password'" @click="Switch">
        <v-icon scale="1.2" color="white" name="bi-eye"  v-if="Type==='password'"/>
        <v-icon scale="1.2" color="white" name="bi-eye-slash" v-else></v-icon>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "form-input"
}
</script>
<script setup>
import {ref} from "vue";

const props= defineProps(["type","modelValue"])
defineEmits(["update:modelValue"])
const Type = ref(props.type)
function Switch(data,ctx){
  if(Type.value === "password"){
    Type.value = "none"
  }else{
    Type.value = "password"
  }
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  max-width: 400px;

  #inputs {
    display: flex;
    flex-direction: row;

    width: 100%;
    input {
      height: 30px;
      outline: none;
      width: 100%;
      font-family: "Oswald", sans-serif;
      font-size: 25px;
    }

    button {
      width: 36px;
      height: 36px;
      background: transparent;
      border: 1px solid white;
    }
  }
}
</style>