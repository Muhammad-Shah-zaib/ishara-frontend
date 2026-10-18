<script setup lang="ts">
defineProps<{ connected: boolean }>()
</script>

<template>
  <p class="flex items-center gap-2 text-ui text-ink-muted" role="status">
    <span class="h-2.5 w-2.5 rounded-full" :class="connected ? 'bg-primary' : 'bg-outline-field'"></span>
    {{ connected ? 'Model connected' : 'Model offline' }}
  </p>
</template>
