<script setup lang="ts">
import DataBars from './DataBars.vue'
import DotGrid from './DotGrid.vue'

// Four dots out of a hundred, scattered like the design.
const HIGHLIGHTED_DOTS = [12, 47, 64, 88]
</script>

<template>
  <section class="section-y border-y border-outline bg-surface-card">
    <div class="container-page">
      <p class="text-eyebrow">01 · The gap in numbers</p>
      <h2 class="text-section-title mt-6">
        250,000 people sign every day.<br class="hidden lg:block" />
        Only 22 interpreters are certified.
      </h2>

      <div class="mt-12 grid gap-6 md:grid-cols-2">
        <article class="card !bg-surface flex flex-wrap items-center gap-x-10 gap-y-6 p-8 sm:p-10">
          <DotGrid :highlighted="HIGHLIGHTED_DOTS" />
          <div class="min-w-[200px] flex-1">
            <p class="text-eyebrow">The community</p>
            <p class="text-page-title mt-3">4 in 100</p>
            <p class="mt-3 text-body text-ink-muted">
              people in Pakistan are deaf. That's about 10 million of 260 million.
            </p>
          </div>
        </article>

        <article class="card !bg-surface flex flex-col justify-between gap-6 p-8 sm:p-10">
          <p class="text-eyebrow">Certified interpreters</p>
          <p class="text-stat-giant">22</p>
          <p class="max-w-[420px] text-body text-ink-muted">
            That's how many certified sign language interpreters Pakistan has, for about 250,000 daily PSL users.
            Others interpret without certification, and training one more takes years.
          </p>
        </article>

        <article class="card !bg-surface grid items-center gap-10 p-8 sm:p-10 md:col-span-2 md:grid-cols-2">
          <div>
            <p class="text-eyebrow">The data problem</p>
            <p class="text-page-title mt-3">250 hours vs. almost none</p>
            <p class="mt-6 max-w-[420px] text-body text-ink-muted">
              American Sign Language has about 250 hours of annotated data for AI to learn from. For PSL, almost
              nothing exists, which is why we are recording our own dataset.
            </p>
          </div>
          <DataBars />
        </article>
      </div>

      <p class="mt-12 text-small text-ink-muted">
        Figures from our project proposal, citing People Groups and published sign language research. Bar lengths
        are illustrative.
      </p>
    </div>
  </section>
</template>
