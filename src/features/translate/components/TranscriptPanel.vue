<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useTranscriptExport } from '../composables/useTranscriptExport'
import { useTranscriptStore } from '../stores/transcriptStore'
import SigningNowCard from './SigningNowCard.vue'
import TranscriptActions from './TranscriptActions.vue'
import TranscriptList from './TranscriptList.vue'

const store = useTranscriptStore()
const { copied, copyAll, download } = useTranscriptExport()
</script>

<template>
  <section class="card" aria-labelledby="transcript-title">
    <header class="flex items-center justify-between border-b border-outline px-6 py-5">
      <h2 id="transcript-title" class="text-card-title">Transcript</h2>
      <button
        type="button"
        class="btn btn-secondary btn-sm cursor-pointer bg-surface-input disabled:cursor-not-allowed disabled:opacity-40"
        :disabled="!store.hasContent"
        @click="copyAll"
      >
        {{ copied ? 'Copied' : 'Copy all' }}
      </button>
    </header>

    <div class="flex flex-col gap-5 px-6 pb-6 pt-2">
      <TranscriptList :entries="store.entries" />
      <SigningNowCard v-if="store.current" :line="store.current" />
      <TranscriptActions :disabled="!store.hasContent" @download="download" @clear="store.clear" />
      <p class="text-small text-ink-muted">
        <RouterLink to="/login" class="link underline">Log in</RouterLink> to save your transcripts.
      </p>
    </div>
  </section>
</template>
