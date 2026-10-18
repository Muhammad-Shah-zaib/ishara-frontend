import { mount, RouterLinkStub } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import AboutView from '../AboutView.vue'

describe('AboutView', () => {
  const wrapper = mount(AboutView, { global: { stubs: { RouterLink: RouterLinkStub } } })

  it('opens with the hero headline', () => {
    expect(wrapper.find('h1').text()).toBe('Understood, without an interpreter.')
  })

  it('has the five numbered sections in order', () => {
    const eyebrows = wrapper
      .findAll('p')
      .map((p) => p.text())
      .filter((text) => /^0\d · /.test(text))

    expect(eyebrows).toEqual([
      '01 · The gap in numbers',
      '02 · The problem',
      "03 · What we're doing",
      '04 · How it works',
      '05 · Built with the community',
    ])
  })

  it('shows the four goals and four pipeline steps, and no team section', () => {
    const lists = wrapper.findAll('ol')

    expect(lists[0].findAll('li')).toHaveLength(4)
    expect(lists[1].findAll('li')).toHaveLength(4)
    expect(wrapper.text()).not.toContain('The team')
    expect(wrapper.text()).not.toContain('Sustainable Development Goals')
  })

  it('still ends with the "See it for yourself." call to action linking to Translate and Home', () => {
    expect(wrapper.text()).toContain('See it for yourself.')
    const links = wrapper.findAllComponents(RouterLinkStub).map((link) => link.props('to'))

    expect(links).toContain('/translate')
    expect(links).toContain('/home')
  })
})
