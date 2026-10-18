# Testing

Stack: **Vitest** + **@vue/test-utils** + **jsdom** (+ `@pinia/testing` for stores).

```
npm run test           # watch mode
npm run test:run       # single run (use before committing / in CI)
npm run test:coverage  # single run with coverage
```

## Where tests live

Tests are co-located: a `__tests__/` folder next to the code, named `<Name>.spec.ts`.

```
features/auth/components/LoginForm.vue
features/auth/components/__tests__/LoginForm.spec.ts
```

Moving or deleting a feature takes its tests with it.

## What to test

| Kind | Tool | Example |
|---|---|---|
| Composables, utils, stores | Vitest | `useLoginForm` rejects a malformed email |
| Components | `mount` from test-utils | `LoginForm` emits `submit` with the credentials |
| Layouts | `mount` with a slot | `SecondaryLayout` has no `nav` and shows the footer tagline |
| Full flows (later) | Playwright, in `e2e/` | Log in and land on the translate page |

Expectation: every composable and store gets a spec, and so does every shared component in `core/`.

## Conventions

- Import `describe`, `it`, `expect` from `vitest` (no globals).
- Test behaviour (what the user sees or what is emitted), not implementation details.
- Stub `RouterLink` with `RouterLinkStub` when a component does not need a real router.
- Mock API calls and services; tests never hit the real backend.
- For stores use a real `createPinia()` (or `setActivePinia(createPinia())`). If you need stubbed actions, `createTestingPinia({ createSpy: vi.fn })` from `@pinia/testing` (the `createSpy` option is required).

## Example

```ts
import { mount, RouterLinkStub } from '@vue/test-utils'
import { expect, it } from 'vitest'
import LoginForm from '../LoginForm.vue'

it('emits guest when continuing without an account', async () => {
  const wrapper = mount(LoginForm, { global: { stubs: { RouterLink: RouterLinkStub } } })
  await wrapper.find('button.btn-secondary').trigger('click')
  expect(wrapper.emitted('guest')).toHaveLength(1)
})
```
