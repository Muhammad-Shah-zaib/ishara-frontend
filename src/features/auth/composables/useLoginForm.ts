import { computed, reactive, ref } from 'vue'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function useLoginForm() {
  const form = reactive({ email: '', password: '' })
  const showPassword = ref(false)
  const submitted = ref(false)

  const errors = computed(() => ({
    email: !form.email
      ? 'Enter your email.'
      : !EMAIL_PATTERN.test(form.email)
        ? 'Enter a valid email address.'
        : '',
    password: form.password ? '' : 'Enter your password.',
  }))

  const isValid = computed(() => !errors.value.email && !errors.value.password)

  function togglePassword() {
    showPassword.value = !showPassword.value
  }

  /** Marks the form as submitted (reveals errors) and reports whether it can be sent. */
  function validate() {
    submitted.value = true
    return isValid.value
  }

  return { form, errors, isValid, submitted, showPassword, togglePassword, validate }
}
