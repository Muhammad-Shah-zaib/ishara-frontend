<script setup lang="ts">
import CameraPlaceholder from './CameraPlaceholder.vue'
import CaptionBar from './CaptionBar.vue'
import LiveBadge from './LiveBadge.vue'

defineProps<{ running: boolean; caption: string; captionSize: number }>()
</script>

<!-- The video area. The default slot is where the camera <video> will go. -->
<template>
  <div class="relative aspect-[4/3] overflow-hidden rounded-card bg-stage sm:aspect-video">
    <slot><CameraPlaceholder /></slot>
    <LiveBadge :live="running" class="absolute left-4 top-4" />
    <CaptionBar :text="caption" :size="captionSize" class="absolute inset-x-0 bottom-0" />
  </div>
</template>
