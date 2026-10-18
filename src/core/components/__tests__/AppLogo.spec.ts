import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import AppLogo from '../AppLogo.vue'

describe('AppLogo', () => {
  it('shows the "i" mark next to the ishara wordmark', () => {
    const wrapper = mount(AppLogo)

    expect(wrapper.find('svg').exists()).toBe(true)
    expect(wrapper.text()).toBe('ishara.')
  })

  it('inverts the mark on the green footer', () => {
    const fill = (onPrimary: boolean) => mount(AppLogo, { props: { onPrimary } }).find('rect').attributes('fill')

    expect(fill(false)).toBe('#5B6B2E')
    expect(fill(true)).toBe('#FAF8F2')
  })
})
