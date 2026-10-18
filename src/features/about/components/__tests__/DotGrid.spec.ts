import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import DotGrid from '../DotGrid.vue'

describe('DotGrid', () => {
  it('draws 100 dots and highlights the given ones', () => {
    const dots = mount(DotGrid, { props: { highlighted: [12, 47, 64, 88] } }).findAll('span')

    expect(dots).toHaveLength(100)
    expect(dots.filter((dot) => dot.classes().includes('bg-primary'))).toHaveLength(4)
  })
})
