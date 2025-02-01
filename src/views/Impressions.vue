<template>
  <div>
    <div class="text-2xl mb-4">Impressionen</div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <img v-for="(image, index) in images" :key="index" :src="image" class="w-full h-auto rounded-lg shadow-md" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const images = ref([])

const importAll = (modules) => {
  for (const path in modules) {
    modules[path]().then((module) => {
      images.value.push(module.default)
    })
  }
}

const imagesContext = import.meta.glob('@/assets/impressions/*.{png,jpg,jpeg,svg}')
importAll(imagesContext)
</script>

<style scoped>
.grid {
  display: grid;
  gap: 1rem;
}
</style>