<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AppLogo from '@/core/components/AppLogo.vue'
import { NAV_LINKS } from '@/core/constants/navigation'
</script>

<template>
  <header class="container-page flex flex-wrap items-center gap-x-8 gap-y-3 py-4">
    <RouterLink to="/home" aria-label="ishara home">
      <AppLogo />
    </RouterLink>

    <nav aria-label="Main" class="order-3 flex w-full gap-6 sm:order-none sm:w-auto">
      <RouterLink
        v-for="link in NAV_LINKS"
        :key="link.to"
        :to="link.to"
        class="text-ui py-1 text-ink-muted"
        active-class="!text-ink underline decoration-2 underline-offset-8"
      >
        {{ link.label }}
      </RouterLink>
    </nav>

    <RouterLink to="/login" class="btn btn-tertiary btn-sm ml-auto">Log in</RouterLink>
  </header>
</template>
