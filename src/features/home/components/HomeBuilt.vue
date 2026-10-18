<script setup lang="ts">
import { RouterLink } from 'vue-router'

const items = [
  {
    title: 'A PSL dataset',
    text: '[NUMBER] signs and sentences, recorded by us with Deaf signers from [CITIES / COMMUNITIES].',
  },
  {
    title: 'Our own model',
    text: 'A computer-vision model trained on that dataset. It reads hand shapes and movement frame by frame and turns them into sentences.',
  },
  {
    title: 'This web app',
    text: 'Open your camera, sign, and read live subtitles. Works on a laptop or phone, right in the browser.',
  },
]
</script>

<template>
  <section class="section-y border-t border-outline bg-surface-card">
    <div class="container-page">
      <div class="flex flex-wrap items-center justify-between gap-6">
        <h2 class="text-section-title">What we've built</h2>
        <RouterLink to="/translate" class="btn btn-primary btn-sm">Try it now</RouterLink>
      </div>

      <ol class="mt-12 grid gap-10 sm:mt-16 md:grid-cols-3 md:gap-8">
        <li v-for="(item, index) in items" :key="item.title" class="border-t-2 border-ink pt-6">
          <p class="text-small text-ink-muted">{{ String(index + 1).padStart(2, '0') }}</p>
          <h3 class="text-item-title mt-3">{{ item.title }}</h3>
          <p class="mt-3 text-body text-ink-muted">{{ item.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
