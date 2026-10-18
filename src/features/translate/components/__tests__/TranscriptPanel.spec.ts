import { createPinia } from 'pinia'
import { mount, RouterLinkStub } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useTranscriptStore } from '../../stores/transcriptStore'
import TranscriptPanel from '../TranscriptPanel.vue'

function mountPanel() {
  const wrapper = mount(TranscriptPanel, {
    global: {
      stubs: { RouterLink: RouterLinkStub },
      plugins: [createPinia()],
    },
  })
  const store = useTranscriptStore()
  store.loadDemo()
  return { wrapper, store }
}

const buttonByText = (wrapper: ReturnType<typeof mountPanel>['wrapper'], text: string) =>
  wrapper.findAll('button').find((button) => button.text() === text)!

afterEach(() => vi.unstubAllGlobals())

describe('TranscriptPanel', () => {
  it('lists the entries and the line being signed now', async () => {
    const { wrapper } = mountPanel()
    await wrapper.vm.$nextTick()

    expect(wrapper.findAll('ul li')).toHaveLength(3)
    expect(wrapper.text()).toContain('Signing now')
    expect(wrapper.text()).toContain('I am going to the hospital tomorrow.')
  })

  it('shows an empty state and disables actions after Clear', async () => {
    const { wrapper } = mountPanel()
    await wrapper.vm.$nextTick()

    await buttonByText(wrapper, 'Clear').trigger('click')

    expect(wrapper.text()).toContain('Subtitles will appear here as you sign.')
    expect(wrapper.text()).not.toContain('Signing now')
    expect(buttonByText(wrapper, 'Copy all').attributes('disabled')).toBeDefined()
  })

  it('copies the transcript text to the clipboard', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined)
    vi.stubGlobal('navigator', { clipboard: { writeText } })
    const { wrapper, store } = mountPanel()
    await wrapper.vm.$nextTick()

    await buttonByText(wrapper, 'Copy all').trigger('click')

    expect(writeText).toHaveBeenCalledWith(store.asText)
  })
})
