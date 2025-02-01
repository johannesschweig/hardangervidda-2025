<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';

</script>

<template>
  <Navbar />
  <div class="container mx-auto p-4">
    <RouterView />
  </div>
</template>

<style scoped>


</style>
