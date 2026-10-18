import { mount, RouterLinkStub } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import LoginForm from '../LoginForm.vue'

const mountForm = () =>
  mount(LoginForm, { global: { stubs: { RouterLink: RouterLinkStub } } })

describe('LoginForm', () => {
  it('shows validation errors and does not submit when empty', async () => {
    const wrapper = mountForm()

    await wrapper.find('form').trigger('submit')

    expect(wrapper.emitted('submit')).toBeUndefined()
    expect(wrapper.text()).toContain('Enter your email.')
    expect(wrapper.text()).toContain('Enter your password.')
  })

  it('emits submit with the credentials when valid', async () => {
    const wrapper = mountForm()

    await wrapper.find('#login-email').setValue('you@example.com')
    await wrapper.find('#login-password').setValue('secret')
    await wrapper.find('form').trigger('submit')

    expect(wrapper.emitted('submit')?.[0]).toEqual([
      { email: 'you@example.com', password: 'secret' },
    ])
  })

  it('toggles the password field between hidden and visible', async () => {
    const wrapper = mountForm()
    const toggle = wrapper.find('button[aria-pressed]')

    expect(wrapper.find('#login-password').attributes('type')).toBe('password')
    await toggle.trigger('click')
    expect(wrapper.find('#login-password').attributes('type')).toBe('text')
    expect(toggle.attributes('aria-label')).toBe('Hide password')
  })

  it('emits guest when continuing without an account', async () => {
    const wrapper = mountForm()

    await wrapper.find('button.btn-secondary').trigger('click')

    expect(wrapper.emitted('guest')).toHaveLength(1)
  })
})
