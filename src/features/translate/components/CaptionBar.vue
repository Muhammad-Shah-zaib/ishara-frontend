<script setup lang="ts">
defineProps<{ text: string; size: number }>()
</script>

<template>
  <p
    v-if="text"
    class="bg-caption-panel/95 px-6 py-4 text-center font-medium text-white"
    :style="{ fontSize: `min(${size}px, 6vw)`, lineHeight: 1.25 }"
    aria-live="polite"
  >
    {{ text }}
  </p>
</template>
