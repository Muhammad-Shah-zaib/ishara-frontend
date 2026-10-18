<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { PipelineStep } from '@/core/constants/pipeline'

defineProps<{ steps: PipelineStep[] }>()
</script>

<template>
  <ol class="flex flex-col">
    <li v-for="(step, index) in steps" :key="step.title" class="relative flex gap-4 pb-6 last:pb-0">
      <!-- connector line to the next step -->
      <span
        v-if="index < steps.length - 1"
        class="absolute left-[19px] top-11 h-[calc(100%-2.75rem)] w-px bg-outline-field"
        aria-hidden="true"
      ></span>
      <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-control bg-tint text-primary-dark">
        <Icon :icon="step.icon" width="22" height="22" />
      </span>
      <div>
        <h3 class="text-ui text-ink">{{ index + 1 }}. {{ step.title }}</h3>
        <p class="mt-0.5 text-small text-ink-muted">{{ step.text }}</p>
      </div>
    </li>
  </ol>
</template>
