import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import WelcomeCharacter from '../WelcomeCharacter.vue'

describe('WelcomeCharacter', () => {
  it('renders an inline, accessible SVG without any text of its own', () => {
    const wrapper = mount(WelcomeCharacter)
    const svg = wrapper.find('svg')

    expect(svg.attributes('role')).toBe('img')
    expect(svg.attributes('aria-label')).toContain('signing welcome')
    expect(wrapper.find('text').exists()).toBe(false)
  })
})
