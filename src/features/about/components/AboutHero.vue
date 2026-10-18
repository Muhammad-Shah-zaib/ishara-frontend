<script setup lang="ts">
import HandPoseIllustration from './HandPoseIllustration.vue'
</script>

<template>
  <section class="container-page py-12 sm:py-20">
    <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div>
        <p class="text-eyebrow">About the project</p>
        <h1 class="text-section-title mt-6 max-w-[11ch]">Understood, without an interpreter.</h1>
        <p class="mt-8 max-w-[520px] text-lead text-ink-muted">
          Millions of Pakistanis use sign language, and almost no hearing person can read it. We're building a
          Pakistani Sign Language to Urdu translator, trained on a dataset we recorded ourselves, so a signed
          sentence can become Urdu text or audio in real time.
        </p>
      </div>

      <figure class="mx-auto w-full max-w-[440px] lg:ml-auto lg:mr-0">
        <HandPoseIllustration />
        <figcaption class="mt-4 text-small text-ink-muted">
          This is how our model sees you: hands, face and body reduced to points. It reads the motion, not the
          video.
        </figcaption>
      </figure>
    </div>
  </section>
</template>
