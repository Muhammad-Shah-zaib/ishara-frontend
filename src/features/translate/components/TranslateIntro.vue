<script setup lang="ts">
import ModelStatus from './ModelStatus.vue'

defineProps<{ modelConnected: boolean }>()
</script>

<template>
  <div class="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
    <div class="flex flex-col gap-3 sm:gap-4">
      <h1 class="text-page-title">Translate</h1>
      <p class="text-base text-ink-muted sm:text-lead">
        Sign in front of your camera. Subtitles appear under the video.
      </p>
    </div>
    <ModelStatus :connected="modelConnected" />
  </div>
</template>
