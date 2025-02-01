<template>
  <header>
    <div class="wrapper">
      <nav>
        <div class="inline">Hardangervidda 2025</div>
        <RouterLink to="/stages">Etappen</RouterLink>
        <RouterLink to="/luggage">Packliste</RouterLink>
        <RouterLink to="/impressions">Impressionen</RouterLink>
        <RouterLink to="/faq">FAQ</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>