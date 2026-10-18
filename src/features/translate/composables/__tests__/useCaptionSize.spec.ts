import { describe, expect, it } from 'vitest'
import { useCaptionSize } from '../useCaptionSize'

describe('useCaptionSize', () => {
  it('starts at the middle size', () => {
    expect(useCaptionSize().size.value).toBe(28)
  })

  it('steps through 22, 28 and 36 and stops at the ends', () => {
    const { size, canIncrease, canDecrease, increase, decrease } = useCaptionSize()

    increase()
    expect(size.value).toBe(36)
    expect(canIncrease.value).toBe(false)
    increase()
    expect(size.value).toBe(36)

    decrease()
    decrease()
    expect(size.value).toBe(22)
    expect(canDecrease.value).toBe(false)
    decrease()
    expect(size.value).toBe(22)
  })
})
