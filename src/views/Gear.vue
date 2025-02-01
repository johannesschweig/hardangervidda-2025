<template>
  <div>
    <div class="text-2xl mb-4">Packliste</div>
    <div class="mb-4">Hier ist meine Packliste:</div>
    <div v-if="isLoading" class="text-center">Lade Packliste...</div>
    <div v-else>
      <div id="8n06du"></div>
    </div>
    <a href="https://lighterpack.com/" class="link text-xs">Link zu LighterPack</a>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isLoading = ref(true)

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://lighterpack.com/e/8n06du'
  script.async = true
  script.onload = () => {
    isLoading.value = false
  }
  script.onerror = () => {
    // Failed to load the script
    isLoading.value = false
  }
  document.body.appendChild(script)
})
</script>