import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { PIPELINE_STEPS } from '@/core/constants/pipeline'
import PipelineSteps from '../PipelineSteps.vue'

describe('PipelineSteps', () => {
  it('renders every step in order with its number and title', () => {
    const items = mount(PipelineSteps, { props: { steps: PIPELINE_STEPS } }).findAll('li')

    expect(items).toHaveLength(PIPELINE_STEPS.length)
    expect(items.map((li) => li.find('h3').text())).toEqual(
      PIPELINE_STEPS.map((step, index) => `${index + 1}. ${step.title}`),
    )
  })

  it('walks camera → pose → model → subtitles', () => {
    expect(PIPELINE_STEPS.map((step) => step.title)).toEqual(['Camera', 'Pose', 'Model', 'Subtitles'])
  })
})
