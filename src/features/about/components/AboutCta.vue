<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="section-y">
    <div class="container-page">
      <div
        class="flex flex-wrap items-center justify-between gap-x-10 gap-y-8 rounded-card bg-primary px-8 py-12 text-white sm:px-14 sm:py-14"
      >
        <h2 class="text-page-title">See it for yourself.</h2>
        <div class="flex flex-wrap gap-3">
          <RouterLink to="/translate" class="btn btn-on-primary">Start translating</RouterLink>
          <RouterLink to="/home" class="btn border border-white/40 text-white">Back to home</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
