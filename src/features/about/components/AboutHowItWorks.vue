<script setup lang="ts">
import { STEPS } from '../constants/aboutContent'
</script>

<template>
  <section class="section-y">
    <div class="container-page">
      <div class="flex flex-wrap items-end justify-between gap-x-12 gap-y-6">
        <div>
          <p class="text-eyebrow">04 · How it works</p>
          <h2 class="text-section-title mt-6 max-w-[14ch]">From video to Urdu in four steps.</h2>
        </div>
        <p class="max-w-[380px] text-lead text-ink-muted">
          Each step uses methods already proven in published sign language research, combined in a new way for PSL.
        </p>
      </div>

      <ol class="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <li v-for="(step, index) in STEPS" :key="step.title" class="flex flex-col">
          <div class="flex items-center gap-3">
            <span
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-ui text-white"
              :class="index === STEPS.length - 1 ? 'bg-ink' : 'bg-primary'"
            >
              {{ index + 1 }}
            </span>
            <span v-if="index < STEPS.length - 1" class="hidden h-0.5 flex-1 bg-outline-field lg:block" aria-hidden="true"></span>
          </div>
          <h3 class="text-item-title mt-6">{{ step.title }}</h3>
          <p class="mt-4 text-body text-ink-muted">{{ step.text }}</p>
          <p class="mt-auto pt-5">
            <span class="inline-block rounded-chip bg-tint px-3 py-1 text-small font-medium text-primary-dark">{{ step.tag }}</span>
          </p>
        </li>
      </ol>

      <div class="mt-14 grid gap-10 rounded-card bg-tint p-8 sm:p-12 md:grid-cols-2 md:gap-16">
        <div>
          <p class="text-stat-title">99.9% less data</p>
          <p class="mt-4 text-body text-primary-dark">
            Points take up about 99.9% less space than raw video, so the model can run in real time on an ordinary
            phone camera.
          </p>
        </div>
        <div>
          <p class="text-stat-title">Borrowed practice</p>
          <p class="mt-4 text-body text-primary-dark">
            Because PSL data is scarce, the model is first trained on related sign language datasets (Isharah-1000,
            ArabSign and PHOENIX-2014T) to learn from.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
