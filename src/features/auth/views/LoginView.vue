<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'
import LoginForm from '../components/LoginForm.vue'
import WelcomeCharacter from '../components/WelcomeCharacter.vue'

const router = useRouter()

// TODO: wire to the auth service/store once the backend login endpoint is available.
function onSubmit() {}

function onGuest() {
  router.push('/home')
}
</script>

<template>
  <div class="flex w-full flex-col items-center gap-4 text-center sm:gap-6">
    <div class="w-[100px] sm:w-[190px]">
      <WelcomeCharacter />
    </div>
    <h1 class="text-page-title">Welcome back.</h1>

    <LoginForm @submit="onSubmit" @guest="onGuest" />

    <p class="text-small text-ink-muted sm:text-body">
      New here?
      <RouterLink to="/signup" class="link underline">Create an account</RouterLink>
    </p>
  </div>
</template>
