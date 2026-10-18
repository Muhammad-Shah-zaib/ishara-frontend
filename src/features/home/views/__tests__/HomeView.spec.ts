import { mount, RouterLinkStub } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { DEMO_VIDEO } from '@/core/constants/media'
import HomeView from '../HomeView.vue'

describe('HomeView', () => {
  const wrapper = mount(HomeView, { global: { stubs: { RouterLink: RouterLinkStub } } })

  it('renders the hero headline', () => {
    expect(wrapper.find('h1').text()).toContain('Sign it.')
    expect(wrapper.find('h1').text()).toContain('Read it instantly.')
  })

  it('has a "Why we built it" link that targets the why section', () => {
    const link = wrapper.find('a[href="#why"]')

    expect(link.exists()).toBe(true)
    expect(wrapper.find('#why').exists()).toBe(true)
  })

  it('plays the demo clip in the hero with its subtitle', () => {
    expect(wrapper.find('video').attributes('src')).toBe(DEMO_VIDEO.src)
    expect(wrapper.text()).toContain(DEMO_VIDEO.caption)
  })

  it('explains the pipeline beside the clip, without a LIVE label', () => {
    expect(wrapper.text()).toContain('How it works')
    for (const title of ['Camera', 'Pose', 'Model', 'Subtitles']) expect(wrapper.text()).toContain(title)
    expect(wrapper.find('[aria-live]').text()).toBe(DEMO_VIDEO.caption)
  })

  it('lists the three things we built', () => {
    const lists = wrapper.findAll('ol')

    expect(lists.at(-1)!.findAll('li')).toHaveLength(3)
  })
})
