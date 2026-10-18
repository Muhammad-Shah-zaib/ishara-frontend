<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'
import { useLoginForm } from '../composables/useLoginForm'

const emit = defineEmits<{
  submit: [credentials: { email: string; password: string }]
  guest: []
}>()

const { form, errors, submitted, showPassword, togglePassword, validate } = useLoginForm()

function onSubmit() {
  if (validate()) emit('submit', { ...form })
}
</script>

<template>
  <form class="card card-form w-full max-w-[480px] p-5 text-left sm:p-6" novalidate @submit.prevent="onSubmit">
    <div class="mb-4 sm:mb-5">
      <label class="field-label !text-sm" for="login-email">Email</label>
      <input
        id="login-email"
        v-model.trim="form.email"
        class="field !min-h-[44px] !text-[15px]"
        type="email"
        autocomplete="email"
        placeholder="you@example.com"
        :aria-invalid="submitted && !!errors.email"
      />
      <p v-if="submitted && errors.email" class="mt-1 text-small text-ink-muted" role="alert">
        {{ errors.email }}
      </p>
    </div>

    <div class="mb-4 sm:mb-5">
      <div class="flex items-baseline justify-between">
        <label class="field-label !text-sm" for="login-password">Password</label>
        <RouterLink to="/forgot-password" class="link text-small underline">
          Forgot password?
        </RouterLink>
      </div>
      <div class="relative">
        <input
          id="login-password"
          v-model="form.password"
          class="field !min-h-[44px] !text-[15px] pr-12"
          :type="showPassword ? 'text' : 'password'"
          autocomplete="current-password"
          :aria-invalid="submitted && !!errors.password"
        />
        <button
          type="button"
          class="link absolute inset-y-0 right-0 flex min-w-[44px] cursor-pointer items-center justify-center pr-2"
          :aria-label="showPassword ? 'Hide password' : 'Show password'"
          :aria-pressed="showPassword"
          @click="togglePassword"
        >
          <Icon :icon="showPassword ? 'mdi:eye-off-outline' : 'mdi:eye-outline'" width="22" height="22" />
        </button>
      </div>
      <p v-if="submitted && errors.password" class="mt-1 text-small text-ink-muted" role="alert">
        {{ errors.password }}
      </p>
    </div>

    <button type="submit" class="btn btn-primary w-full !min-h-[46px]">Log in</button>

    <div class="my-4 flex items-center gap-4 text-small text-ink-muted" role="separator">
      <span class="h-px flex-1 bg-outline"></span>
      or
      <span class="h-px flex-1 bg-outline"></span>
    </div>

    <button type="button" class="btn btn-secondary w-full bg-surface-input !min-h-[46px]" @click="emit('guest')">
      Continue without an account
    </button>
  </form>
</template>
