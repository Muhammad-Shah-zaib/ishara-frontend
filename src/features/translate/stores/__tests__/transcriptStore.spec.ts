import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { useTranscriptStore } from '../transcriptStore'

describe('transcriptStore', () => {
  beforeEach(() => setActivePinia(createPinia()))

  it('starts empty', () => {
    const store = useTranscriptStore()

    expect(store.hasContent).toBe(false)
    expect(store.asText).toBe('')
  })

  it('exports entries and the current line as timestamped text', () => {
    const store = useTranscriptStore()
    store.loadDemo()

    const lines = store.asText.split('\n')
    expect(lines[0]).toBe('00:04  Hello.')
    expect(lines.at(-1)).toBe('00:21  I am going to the hospital tomorrow.')
  })

  it('clear() removes everything', () => {
    const store = useTranscriptStore()
    store.loadDemo()

    store.clear()

    expect(store.entries).toEqual([])
    expect(store.current).toBeNull()
    expect(store.hasContent).toBe(false)
  })
})
