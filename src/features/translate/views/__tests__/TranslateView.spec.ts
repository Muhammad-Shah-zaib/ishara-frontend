import { createPinia } from 'pinia'
import { mount, RouterLinkStub } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import TranslateView from '../TranslateView.vue'

const mountView = () =>
  mount(TranslateView, { global: { stubs: { RouterLink: RouterLinkStub }, plugins: [createPinia()] } })

describe('TranslateView', () => {
  it('renders the page title, model status and transcript panel', () => {
    const wrapper = mountView()

    expect(wrapper.find('h1').text()).toBe('Translate')
    expect(wrapper.text()).toContain('Model connected')
    expect(wrapper.text()).toContain('Transcript')
  })

  it('shows the camera placeholder (no demo video) and no pipeline card', () => {
    const wrapper = mountView()

    expect(wrapper.find('video').exists()).toBe(false)
    expect(wrapper.text()).not.toContain('How it works')
  })

  it('toggles between Stop and Start, flipping the LIVE badge', async () => {
    const wrapper = mountView()
    const toggle = () => wrapper.findAll('button').find((b) => ['Stop', 'Start'].includes(b.text()))!

    expect(toggle().text()).toBe('Stop')
    expect(wrapper.text()).toContain('Live')

    await toggle().trigger('click')

    expect(toggle().text()).toBe('Start')
    expect(wrapper.text()).toContain('Paused')
  })

  it('changes the caption size with A- and A+', async () => {
    const wrapper = mountView()
    await wrapper.vm.$nextTick()
    const caption = () => wrapper.find('[aria-live]').attributes('style')

    expect(caption()).toContain('28px')
    await wrapper.find('button[aria-label="Increase text size"]').trigger('click')
    expect(caption()).toContain('36px')
  })
})
