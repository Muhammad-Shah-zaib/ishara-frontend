<script setup lang="ts">
import PipelineSteps from '@/core/components/PipelineSteps.vue'
import SignVideo from '@/core/components/SignVideo.vue'
import { DEMO_VIDEO } from '@/core/constants/media'
import { PIPELINE_STEPS } from '@/core/constants/pipeline'
</script>

<!-- Compact portrait clip with a sample subtitle, beside an explanation of how it works. -->
<template>
  <div class="grid items-stretch gap-6 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-8">
    <div class="card relative mx-auto aspect-[4/5] w-full max-w-[360px] overflow-hidden !bg-tint-stage lg:mx-0 lg:aspect-auto lg:max-w-none">
      <SignVideo :src="DEMO_VIDEO.src" :poster="DEMO_VIDEO.poster" :label="DEMO_VIDEO.label" fit="cover" />
      <!-- Subtitle on a black-to-transparent fade, so no box covers the video. -->
      <div class="absolute inset-x-0 bottom-0 bg-linear-to-t from-caption-panel/90 to-transparent px-4 pb-3 pt-16">
        <p class="text-center text-[15px] font-medium text-white" aria-live="polite">
          {{ DEMO_VIDEO.caption }}
        </p>
      </div>
    </div>

    <div class="card flex flex-col justify-center p-6 sm:p-10">
      <p class="text-eyebrow">How it works</p>
      <h2 class="text-item-title mt-3 max-w-[22ch]">From your signing to subtitles in four steps</h2>
      <div class="mt-8">
        <PipelineSteps :steps="PIPELINE_STEPS" />
      </div>
    </div>
  </div>
</template>
