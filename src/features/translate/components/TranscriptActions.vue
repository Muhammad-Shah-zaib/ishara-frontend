<script setup lang="ts">
defineProps<{ disabled: boolean }>()
defineEmits<{ download: []; clear: [] }>()
</script>

<template>
  <div class="grid grid-cols-2 gap-3">
    <button
      type="button"
      class="btn btn-secondary btn-sm cursor-pointer bg-surface-input disabled:cursor-not-allowed disabled:opacity-40"
      :disabled="disabled"
      @click="$emit('download')"
    >
      Download .txt
    </button>
    <button
      type="button"
      class="btn btn-secondary btn-sm cursor-pointer bg-surface-input disabled:cursor-not-allowed disabled:opacity-40"
      :disabled="disabled"
      @click="$emit('clear')"
    >
      Clear
    </button>
  </div>
</template>
