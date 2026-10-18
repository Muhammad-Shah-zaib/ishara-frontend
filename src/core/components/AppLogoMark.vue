<script setup lang="ts">
// The "i" mark. Same artwork as public/favicon.svg; `onPrimary` inverts it for the green footer.
defineProps<{ onPrimary?: boolean }>()
</script>

<template>
  <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" class="h-8 w-8 shrink-0">
    <rect width="64" height="64" rx="16" :fill="onPrimary ? '#FAF8F2' : '#5B6B2E'" />
    <circle cx="32" cy="18" r="6" :fill="onPrimary ? '#5B6B2E' : '#D9E3B0'" />
    <rect x="27" y="28" width="10" height="23" rx="5" :fill="onPrimary ? '#5B6B2E' : '#FAF8F2'" />
  </svg>
</template>
