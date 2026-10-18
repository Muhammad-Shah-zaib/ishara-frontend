<script setup lang="ts">
import { COMMUNITY_POINTS, COMMUNITY_STATS } from '../constants/aboutContent'
</script>

<template>
  <section class="section-y border-y border-outline bg-surface-card">
    <div class="container-page grid gap-12 lg:grid-cols-2 lg:gap-20">
      <div>
        <p class="text-eyebrow">05 · Built with the community</p>
        <h2 class="text-section-title mt-6 max-w-[14ch]">Made with Deaf signers, not just for them.</h2>
        <dl class="mt-10 flex flex-wrap gap-x-10 gap-y-4">
          <div v-for="stat in COMMUNITY_STATS" :key="stat.label">
            <dd class="text-[44px] font-semibold leading-none tracking-[-0.03em]">{{ stat.value }}</dd>
            <dt class="mt-2 text-small text-ink-muted">{{ stat.label }}</dt>
          </div>
        </dl>
      </div>

      <div class="flex flex-col gap-8 lg:pt-4">
        <article
          v-for="(point, index) in COMMUNITY_POINTS"
          :key="point.title"
          :class="index > 0 ? 'border-t border-outline pt-8' : ''"
        >
          <h3 class="text-card-title">{{ point.title }}</h3>
          <p class="mt-3 text-body text-ink-muted">{{ point.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
