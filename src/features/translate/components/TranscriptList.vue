<script setup lang="ts">
import type { TranscriptEntry } from '../stores/transcriptStore'
import { formatTime } from '../utils/formatTime'

defineProps<{ entries: TranscriptEntry[] }>()
</script>

<template>
  <p v-if="!entries.length" class="py-4 text-small text-ink-muted">Subtitles will appear here as you sign.</p>
  <ul v-else>
    <li
      v-for="entry in entries"
      :key="entry.id"
      class="flex items-baseline gap-4 border-b border-outline py-4 last:border-b-0"
    >
      <time class="w-11 shrink-0 text-small text-ink-muted">{{ formatTime(entry.time) }}</time>
      <span class="text-[18px]">{{ entry.text }}</span>
    </li>
  </ul>
</template>
