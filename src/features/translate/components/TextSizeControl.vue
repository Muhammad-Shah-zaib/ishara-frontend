<script setup lang="ts">
defineProps<{ canDecrease: boolean; canIncrease: boolean }>()
defineEmits<{ decrease: []; increase: [] }>()
</script>

<template>
  <div class="flex items-center gap-2 text-ink-muted">
    <span class="mr-1 text-ui">Text size</span>
    <button
      type="button"
      class="btn-icon cursor-pointer text-[20px] font-medium disabled:cursor-not-allowed disabled:opacity-40"
      aria-label="Decrease text size"
      :disabled="!canDecrease"
      @click="$emit('decrease')"
    >
      A−
    </button>
    <button
      type="button"
      class="btn-icon cursor-pointer text-[20px] font-medium disabled:cursor-not-allowed disabled:opacity-40"
      aria-label="Increase text size"
      :disabled="!canIncrease"
      @click="$emit('increase')"
    >
      A+
    </button>
  </div>
</template>
