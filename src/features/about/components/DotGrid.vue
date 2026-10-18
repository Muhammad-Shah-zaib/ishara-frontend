<script setup lang="ts">
// A 10 x 10 grid of dots with a few highlighted ("4 in 100").
defineProps<{ highlighted: number[] }>()
</script>

<template>
  <div class="grid w-[216px] shrink-0 grid-cols-10 gap-[14px]" aria-hidden="true">
    <span
      v-for="index in 100"
      :key="index"
      class="rounded-full"
      :class="highlighted.includes(index - 1) ? 'h-[10px] w-[10px] bg-primary' : 'h-[10px] w-[10px] bg-outline-field/60'"
      :style="highlighted.includes(index - 1) ? { transform: 'scale(1.7)' } : undefined"
    ></span>
  </div>
</template>
