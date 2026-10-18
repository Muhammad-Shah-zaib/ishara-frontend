import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { AUDIENCES, GAP_WORDS } from '../../constants/aboutContent'
import AboutProblem from '../AboutProblem.vue'

describe('AboutProblem', () => {
  const wrapper = mount(AboutProblem)

  it('states the problem with both paragraphs', () => {
    expect(wrapper.text()).toContain('02 · The problem')
    expect(wrapper.find('h2').text()).toBe('The effort of communicating falls on the Deaf community.')
    expect(wrapper.findAll('p').filter((p) => p.text().startsWith('Many Deaf people'))).toHaveLength(1)
    expect(wrapper.text()).toContain('sentence-level PSL data barely exists.')
  })

  it('shows the four gap words in one list, in order', () => {
    const words = wrapper.findAll('ul li').map((li) => li.text())

    expect(words).toEqual(['Education', 'Healthcare', 'Work', 'Everyday life'])
    expect(words).toEqual(GAP_WORDS)
  })

  it('lists who it is for in three boxes', () => {
    const boxes = wrapper.findAll('article')

    expect(boxes).toHaveLength(3)
    expect(boxes.map((box) => box.find('h3').text())).toEqual(AUDIENCES.map((a) => a.title))
  })

  it('has no divider lines or tinted panel other than the gap panel', () => {
    expect(wrapper.find('hr').exists()).toBe(false)
    expect(wrapper.findAll('.bg-tint')).toHaveLength(1)
  })
})
