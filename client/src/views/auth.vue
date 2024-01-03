<template>
  <div>
    <header>
      Authentification
    </header>
    <main>
      <auth-form></auth-form>
    </main>
  </div>
</template>

<script setup>
import AuthForm from "../components/forms/auth-form.vue";
</script>

<style lang="scss" scoped>
div{
  height: 100%;
  header{
    font-size: 50px;
  }
}
</style>