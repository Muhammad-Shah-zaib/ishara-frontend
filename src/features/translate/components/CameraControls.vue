<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{ running: boolean }>()
defineEmits<{ toggle: []; switchCamera: []; fullscreen: [] }>()
</script>

<template>
  <div class="flex items-center gap-3">
    <button type="button" class="btn cursor-pointer bg-ink text-white" @click="$emit('toggle')">
      {{ running ? 'Stop' : 'Start' }}
    </button>
    <button
      type="button"
      class="btn-icon min-h-[52px] min-w-[52px] cursor-pointer bg-surface-card"
      aria-label="Switch camera"
      @click="$emit('switchCamera')"
    >
      <Icon icon="mdi:camera-flip-outline" width="24" height="24" />
    </button>
    <button
      type="button"
      class="btn-icon min-h-[52px] min-w-[52px] cursor-pointer bg-surface-card"
      aria-label="Full screen"
      @click="$emit('fullscreen')"
    >
      <Icon icon="mdi:fullscreen" width="26" height="26" />
    </button>
  </div>
</template>
