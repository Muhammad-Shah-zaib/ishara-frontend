import { describe, expect, it } from 'vitest'
import router from '../index'

describe('router', () => {
  it('redirects / to /home', async () => {
    await router.push('/')

    expect(router.currentRoute.value.fullPath).toBe('/home')
    expect(router.currentRoute.value.name).toBe('home')
  })

  it('serves the translate page at /translate', async () => {
    await router.push('/translate')

    expect(router.currentRoute.value.name).toBe('translate')
  })

  it('serves the about page at /about', async () => {
    await router.push('/about')

    expect(router.currentRoute.value.name).toBe('about')
  })

  it('serves the log in page at /login', async () => {
    await router.push('/login')

    expect(router.currentRoute.value.name).toBe('login')
  })

  it('falls back to the not-found page for unknown paths', async () => {
    await router.push('/does-not-exist')

    expect(router.currentRoute.value.name).toBe('not-found')
  })
})
