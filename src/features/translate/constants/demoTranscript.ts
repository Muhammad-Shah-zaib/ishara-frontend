import type { TranscriptEntry } from '../stores/transcriptStore'

// Placeholder content shown until the camera and model are connected.
export const DEMO_ENTRIES: TranscriptEntry[] = [
  { id: 1, time: 4, text: 'Hello.' },
  { id: 2, time: 9, text: 'My name is Ali.' },
  { id: 3, time: 15, text: 'I need to see a doctor.' },
]

export const DEMO_CURRENT = { time: 21, text: 'I am going to the hospital tomorrow.' }
