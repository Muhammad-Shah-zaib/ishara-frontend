<script setup lang="ts">
import { GOALS } from '../constants/aboutContent'
</script>

<template>
  <section class="section-y border-y border-outline bg-surface-card">
    <div class="container-page">
      <p class="text-eyebrow">03 · What we're doing</p>
      <h2 class="text-section-title mt-6">Four goals, one translator.</h2>

      <ol class="mt-12 grid gap-x-16 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="(goal, index) in GOALS" :key="goal.title" class="flex gap-6 border-t border-ink pt-8">
          <span class="w-8 shrink-0 text-body font-medium text-primary">{{ String(index + 1).padStart(2, '0') }}</span>
          <div>
            <h3 class="text-box-title">{{ goal.title }}</h3>
            <p class="mt-3 text-body text-ink-muted">{{ goal.text }}</p>
          </div>
        </li>
      </ol>

      <p class="mt-12 max-w-[760px] text-small text-ink-muted">
        <strong class="font-medium text-ink">Scope.</strong>
        This project translates one way: Pakistani Sign Language to Urdu. The other direction, Urdu to sign
        language, is being built separately by another group.
      </p>
    </div>
  </section>
</template>
