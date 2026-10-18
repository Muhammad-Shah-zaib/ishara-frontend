<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AppLogo from '@/core/components/AppLogo.vue'
import { APP_TAGLINE } from '@/core/constants/app'
</script>

<!-- Account pages (log in, sign up…): wordmark-only header, slim footer, no navigation. -->
<template>
  <div class="flex min-h-screen flex-col">
    <header class="container-page py-4 sm:py-6">
      <RouterLink to="/" aria-label="ishara home" class="inline-block">
        <AppLogo />
      </RouterLink>
    </header>

    <main class="container-page flex flex-1 flex-col items-center justify-start pb-6 pt-0">
      <slot><RouterView /></slot>
    </main>

    <footer class="bg-primary text-on-primary">
      <div class="container-page py-5 text-small sm:text-right">
        <p>{{ APP_TAGLINE }}</p>
      </div>
    </footer>
  </div>
</template>
