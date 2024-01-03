<template>
  <div>
    <form-input v-model="form.email">EMAIL</form-input>
    <form-input v-model="form.password" type="password">PASSWORD</form-input>
    <div id="control">
      <a :href="authRefs.discord">
        <v-icon name="co-discord" color="white" scale="2"/>
      </a>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
    }
  },
  methods:{
  },
}
</script>
<script setup>
import {ref} from "vue";
import {usersApi} from "../../apiComponent.js";
const authRefs=ref({
  discord:""
})

usersApi.userControllerAuth((err,res,data)=>{authRefs.value.discord=data.text})
</script>
<style lang="scss" scoped>

</style>