<script setup lang="ts">
import { RouterLink } from 'vue-router'
import HomeDemo from './HomeDemo.vue'
</script>

<template>
  <section class="container-page pb-16 pt-8 sm:pb-24 sm:pt-12">
    <div class="flex flex-col items-start gap-6 sm:gap-8">
      <h1 class="text-display">Sign it.<br />Read it instantly.</h1>

      <p class="max-w-[520px] text-lead text-ink-muted">
        Live subtitles for Pakistani Sign Language. Open your camera, sign a sentence, and read it as text.
      </p>

      <div class="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
        <RouterLink to="/translate" class="btn btn-primary !min-h-[60px] !px-9 !text-[18px]">
          Start translating
        </RouterLink>
        <a href="#why" class="btn btn-secondary !min-h-[60px] !px-9 !text-[18px]">Why we built it</a>
      </div>
    </div>

    <HomeDemo class="mt-12 sm:mt-16" />
  </section>
</template>
