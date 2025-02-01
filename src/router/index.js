import { createRouter, createWebHistory } from 'vue-router'
import Planning from '@/views/Planning.vue'
import Gear from '@/views/Gear.vue'
import Impressions from '@/views/Impressions.vue'
import FAQ from '@/views/FAQ.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/planning',
    },
    {
      path: '/planning',
      component: Planning,
    },
    {
      path: '/gear',
      component: Gear,
    },
    {
      path: '/impressions',
      component: Impressions,
    },
    {
      path: '/faq',
      component: FAQ,
    },
  ],
})

export default router