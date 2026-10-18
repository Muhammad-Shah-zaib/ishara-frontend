import { mount, RouterLinkStub } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { APP_TAGLINE } from '@/core/constants/app'
import SecondaryLayout from '../SecondaryLayout.vue'

describe('SecondaryLayout', () => {
  const mountLayout = () =>
    mount(SecondaryLayout, {
      slots: { default: '<p data-test="content">Hello</p>' },
      global: { stubs: { RouterLink: RouterLinkStub } },
    })

  it('renders the wordmark header without navigation', () => {
    const wrapper = mountLayout()

    expect(wrapper.find('header').text()).toContain('ishara')
    expect(wrapper.find('header nav').exists()).toBe(false)
  })

  it('renders slotted content and the slim footer', () => {
    const wrapper = mountLayout()

    expect(wrapper.find('[data-test="content"]').text()).toBe('Hello')
    expect(wrapper.find('footer').text()).toContain(APP_TAGLINE)
  })
})
