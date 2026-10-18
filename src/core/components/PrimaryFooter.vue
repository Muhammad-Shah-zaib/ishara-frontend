<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AppLogo from '@/core/components/AppLogo.vue'
import { APP_TAGLINE } from '@/core/constants/app'
import { NAV_LINKS } from '@/core/constants/navigation'

const links = [...NAV_LINKS, { label: 'Log in', to: '/login' }]
</script>

<template>
  <footer class="bg-primary text-on-primary">
    <div
      class="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between"
    >
      <div class="flex flex-col gap-2">
        <AppLogo on-primary />
        <p class="text-small text-footer-text">{{ APP_TAGLINE }}</p>
      </div>
      <nav aria-label="Footer" class="flex gap-6">
        <RouterLink v-for="link in links" :key="link.to" :to="link.to" class="text-small font-medium text-white">
          {{ link.label }}
        </RouterLink>
      </nav>
    </div>
  </footer>
</template>
