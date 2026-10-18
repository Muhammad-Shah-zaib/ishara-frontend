import { describe, expect, it } from 'vitest'
import { formatTime } from '../formatTime'

describe('formatTime', () => {
  it('formats seconds as mm:ss', () => {
    expect(formatTime(0)).toBe('00:00')
    expect(formatTime(21)).toBe('00:21')
    expect(formatTime(75)).toBe('01:15')
  })

  it('clamps negatives and drops fractions', () => {
    expect(formatTime(-5)).toBe('00:00')
    expect(formatTime(9.9)).toBe('00:09')
  })
})
