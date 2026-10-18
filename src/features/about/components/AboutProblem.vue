<script setup lang="ts">
import { AUDIENCES, GAP_WORDS } from '../constants/aboutContent'
</script>

<!-- "The problem": statement, where the gap shows up, and who it is for. No dividers, one tinted panel. -->
<template>
  <section class="section-y">
    <div class="container-page flex flex-col gap-14 lg:gap-[72px]">
      <!-- Part A: statement -->
      <div class="flex flex-wrap gap-x-20 gap-y-10">
        <div class="flex-[1_1_520px]">
          <p class="text-eyebrow">02 · The problem</p>
          <h2 class="text-section-title mt-6 max-w-[16ch]">
            The effort of communicating falls on the Deaf community.
          </h2>
        </div>
        <div class="flex flex-[1_1_380px] flex-col gap-6 pt-2 text-lead text-ink-muted">
          <p>
            Many Deaf people can follow spoken or written cues. The reverse rarely holds, because most hearing
            people have never learned PSL.
          </p>
          <p>
            Interpreters are not always available or dependable, and training one takes years. Research so far has
            mostly stopped at the alphabet and single words, not full sentences, because sentence-level PSL data
            barely exists.
          </p>
        </div>
      </div>

      <!-- Part B: where the gap shows up -->
      <div class="rounded-card bg-tint px-8 pb-16 pt-14">
        <p class="text-center text-ui !text-[15px] text-primary-dark">Where the gap shows up</p>
        <ul class="mt-9 flex flex-wrap items-center justify-evenly gap-x-8 gap-y-4" aria-label="Where the gap shows up">
          <li v-for="word in GAP_WORDS" :key="word" class="text-gap-word text-ink">{{ word }}</li>
        </ul>
      </div>

      <!-- Part C: who it's for -->
      <div>
        <p class="text-eyebrow">Who it's for</p>
        <div class="mt-5 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          <article v-for="audience in AUDIENCES" :key="audience.title" class="card p-8">
            <h3 class="text-box-title">{{ audience.title }}</h3>
            <p class="mt-3 text-body text-ink-muted">{{ audience.text }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
