<template>
  <div>
    <div class="text-2xl">Packliste</div>
    <div>Hier ist meine Packliste:</div>
    <div>
      <div id="8n06du"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://lighterpack.com/e/8n06du'
  script.async = true
  script.onload = () => {
    // Script executed successfully
  }
  script.onerror = () => {
    // Failed to load the script
  }
  document.body.appendChild(script)
})
</script>