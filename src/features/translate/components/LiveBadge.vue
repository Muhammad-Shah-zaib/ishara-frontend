<script setup lang="ts">
defineProps<{ live: boolean }>()
</script>

<template>
  <span class="text-status inline-flex items-center gap-2 rounded-chip bg-caption-panel px-3 py-2 text-white">
    <span class="h-2 w-2 rounded-full" :class="live ? 'bg-live' : 'bg-outline-field'"></span>
    {{ live ? 'Live' : 'Paused' }}
  </span>
</template>
