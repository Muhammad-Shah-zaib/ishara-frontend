<script setup lang="ts">
import { RouterView } from 'vue-router'
import PrimaryFooter from '@/core/components/PrimaryFooter.vue'
import PrimaryHeader from '@/core/components/PrimaryHeader.vue'
</script>

<!-- Content pages (home, translate, about): full header with navigation and full footer. -->
<template>
  <div class="flex min-h-screen flex-col">
    <PrimaryHeader />
    <main class="flex-1">
      <slot><RouterView /></slot>
    </main>
    <PrimaryFooter />
  </div>
</template>
