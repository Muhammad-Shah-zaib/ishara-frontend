import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import CameraStage from '../CameraStage.vue'

const mountStage = (props: Partial<InstanceType<typeof CameraStage>['$props']> = {}) =>
  mount(CameraStage, { props: { running: true, caption: 'Hello there.', captionSize: 28, ...props } })

describe('CameraStage', () => {
  it('shows LIVE while running and PAUSED when stopped', async () => {
    const wrapper = mountStage()
    expect(wrapper.text()).toContain('Live')

    await wrapper.setProps({ running: false })
    expect(wrapper.text()).toContain('Paused')
  })

  it('shows the caption and hides the bar when there is none', async () => {
    const wrapper = mountStage()
    expect(wrapper.find('[aria-live]').text()).toBe('Hello there.')

    await wrapper.setProps({ caption: '' })
    expect(wrapper.find('[aria-live]').exists()).toBe(false)
  })

  it('renders slot content in place of the placeholder', () => {
    const wrapper = mount(CameraStage, {
      props: { running: true, caption: '', captionSize: 28 },
      slots: { default: '<video data-test="feed" />' },
    })

    expect(wrapper.find('[data-test="feed"]').exists()).toBe(true)
    expect(wrapper.find('svg[aria-hidden="true"]').exists()).toBe(false)
  })
})
