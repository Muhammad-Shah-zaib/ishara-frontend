import { mount, RouterLinkStub } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { NAV_LINKS } from '@/core/constants/navigation'
import PrimaryHeader from '../PrimaryHeader.vue'

describe('PrimaryHeader', () => {
  const wrapper = mount(PrimaryHeader, { global: { stubs: { RouterLink: RouterLinkStub } } })

  it('renders every navigation link', () => {
    const labels = wrapper.findAll('nav a').map((link) => link.text())

    expect(labels).toEqual(NAV_LINKS.map((link) => link.label))
  })

  it('offers a log in action and no start translating button', () => {
    const text = wrapper.text()

    expect(text).toContain('Log in')
    expect(text).not.toContain('Start translating')
  })
})
