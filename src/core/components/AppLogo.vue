<script setup lang="ts">
import { APP_NAME } from '@/core/constants/app'
import AppLogoMark from './AppLogoMark.vue'

defineProps<{ onPrimary?: boolean }>()
</script>

<template>
  <span class="inline-flex items-center gap-2.5">
    <AppLogoMark :on-primary="onPrimary" />
    <span class="text-wordmark text-[28px] leading-none" :class="onPrimary ? 'text-white' : 'text-ink'"
      >{{ APP_NAME }}<span :class="onPrimary ? 'text-footer-dot' : 'text-primary'">.</span></span
    >
  </span>
</template>
