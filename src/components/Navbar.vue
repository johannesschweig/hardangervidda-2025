<template>
  <header class="bg-slate-100">
    <div class="container mx-auto p-4">
      <nav class="flex items-center justify-between">
        <div class="text-xl font-bold">Hardangervidda 2025</div>
        <div class="block lg:hidden">
          <button @click="toggleMenu" class="focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div :class="{'block': isMenuOpen, 'hidden': !isMenuOpen}" class="w-full lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <RouterLink to="/planning" class="block mt-4 lg:inline-block lg:mt-0 mr-4" active-class="font-bold">
              Reiseplanung
            </RouterLink>
            <RouterLink to="/gear" class="block mt-4 lg:inline-block lg:mt-0 mr-4" active-class="font-bold">
              Packliste
            </RouterLink>
            <RouterLink to="/impressions" class="block mt-4 lg:inline-block lg:mt-0 mr-4" active-class="font-bold">
              Impressionen
            </RouterLink>
            <RouterLink to="/faq" class="block mt-4 lg:inline-block lg:mt-0" active-class="font-bold">
              FAQ
            </RouterLink>
          </div>
        </div>
      </nav>
    </div>
    <div v-if="isMenuOpen" class="fixed inset-0 bg-slate-100 z-50 flex flex-col items-center justify-center">
      <button @click="toggleMenu" class="absolute top-4 right-4 focus:outline-none">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <RouterLink @click="toggleMenu" to="/planning" class="text-2xl mb-4" active-class="font-bold">
        Reiseplanung
      </RouterLink>
      <RouterLink @click="toggleMenu" to="/gear" class="text-2xl mb-4" active-class="font-bold">
        Packliste
      </RouterLink>
      <RouterLink @click="toggleMenu" to="/impressions" class="text-2xl mb-4" active-class="font-bold">
        Impressionen
      </RouterLink>
      <RouterLink @click="toggleMenu" to="/faq" class="text-2xl" active-class="font-bold">
        FAQ
      </RouterLink>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

