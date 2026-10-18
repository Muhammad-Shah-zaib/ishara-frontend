<script setup lang="ts">
import { ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    src: string
    poster?: string
    label: string
    playing?: boolean
    /** `cover` crops to fill the box (biased towards the lower middle so head and hands stay in view). */
    fit?: 'contain' | 'cover'
  }>(),
  { playing: true, fit: 'contain' },
)

const video = ref<HTMLVideoElement | null>(null)

// Respect "reduce motion": show the poster frame until the video is played explicitly.
const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
const autoplay = props.playing && !prefersReducedMotion

watch(
  () => props.playing,
  (playing) => {
    if (playing) video.value?.play()?.catch(() => {})
    else video.value?.pause()
  },
)
</script>

<!-- Fills its nearest positioned parent. Muted, looping and inline so it can autoplay on phones. -->
<template>
  <video
    ref="video"
    class="absolute inset-0 h-full w-full"
    :class="fit === 'cover' ? 'object-cover object-[50%_60%]' : 'object-contain'"
    :src="src"
    :poster="poster"
    :aria-label="label"
    :autoplay="autoplay"
    muted
    loop
    playsinline
    preload="auto"
  ></video>
</template>
