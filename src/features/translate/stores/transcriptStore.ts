import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { DEMO_CURRENT, DEMO_ENTRIES } from '../constants/demoTranscript'
import { formatTime } from '../utils/formatTime'

export interface TranscriptEntry {
  id: number
  /** Seconds since the session started. */
  time: number
  text: string
}

export interface CurrentLine {
  time: number
  text: string
}

export const useTranscriptStore = defineStore('transcript', () => {
  const entries = ref<TranscriptEntry[]>([])
  const current = ref<CurrentLine | null>(null)

  const hasContent = computed(() => entries.value.length > 0 || current.value !== null)

  /** Plain-text export: one "mm:ss  sentence" line per entry, current line last. */
  const asText = computed(() => {
    const lines = entries.value.map((entry) => `${formatTime(entry.time)}  ${entry.text}`)
    if (current.value) lines.push(`${formatTime(current.value.time)}  ${current.value.text}`)
    return lines.join('\n')
  })

  function loadDemo() {
    entries.value = [...DEMO_ENTRIES]
    current.value = { ...DEMO_CURRENT }
  }

  function clear() {
    entries.value = []
    current.value = null
  }

  return { entries, current, hasContent, asText, loadDemo, clear }
})
