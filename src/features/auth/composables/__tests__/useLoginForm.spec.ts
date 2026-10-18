import { describe, expect, it } from 'vitest'
import { useLoginForm } from '../useLoginForm'

describe('useLoginForm', () => {
  it('requires an email and a password', () => {
    const { errors, isValid } = useLoginForm()

    expect(errors.value.email).toBe('Enter your email.')
    expect(errors.value.password).toBe('Enter your password.')
    expect(isValid.value).toBe(false)
  })

  it('rejects a malformed email', () => {
    const { form, errors } = useLoginForm()
    form.email = 'not-an-email'

    expect(errors.value.email).toBe('Enter a valid email address.')
  })

  it('is valid with a proper email and a password', () => {
    const { form, isValid } = useLoginForm()
    form.email = 'you@example.com'
    form.password = 'secret'

    expect(isValid.value).toBe(true)
  })

  it('validate() flags the form as submitted and returns validity', () => {
    const { submitted, validate } = useLoginForm()

    expect(submitted.value).toBe(false)
    expect(validate()).toBe(false)
    expect(submitted.value).toBe(true)
  })

  it('toggles password visibility', () => {
    const { showPassword, togglePassword } = useLoginForm()

    togglePassword()
    expect(showPassword.value).toBe(true)
    togglePassword()
    expect(showPassword.value).toBe(false)
  })
})
