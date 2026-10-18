import { ref } from 'vue'
import { useTranscriptStore } from '../stores/transcriptStore'

const COPIED_FEEDBACK_MS = 2000

export function useTranscriptExport() {
  const store = useTranscriptStore()
  const copied = ref(false)

  async function copyAll() {
    if (!store.hasContent) return
    await navigator.clipboard.writeText(store.asText)
    copied.value = true
    setTimeout(() => (copied.value = false), COPIED_FEEDBACK_MS)
  }

  function download() {
    if (!store.hasContent) return
    const url = URL.createObjectURL(new Blob([store.asText], { type: 'text/plain' }))
    const link = document.createElement('a')
    link.href = url
    link.download = 'ishara-transcript.txt'
    link.click()
    URL.revokeObjectURL(url)
  }

  return { copied, copyAll, download }
}
