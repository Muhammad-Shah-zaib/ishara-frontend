<script setup lang="ts">
import type { CurrentLine } from '../stores/transcriptStore'
import { formatTime } from '../utils/formatTime'

defineProps<{ line: CurrentLine }>()
</script>

<template>
  <div class="rounded-card bg-tint px-5 py-4">
    <p class="flex items-baseline justify-between text-small text-primary-dark">
      <span>Signing now</span>
      <time>{{ formatTime(line.time) }}</time>
    </p>
    <p class="mt-1 text-[20px] font-medium leading-snug">{{ line.text }}</p>
  </div>
</template>
