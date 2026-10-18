import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import SignVideo from '../SignVideo.vue'

const props = { src: '/Videos/clip.mp4', poster: '/Videos/clip.jpg', label: 'A person signing' }

afterEach(() => vi.restoreAllMocks())

describe('SignVideo', () => {
  it('renders a muted, looping, inline video with the given source and label', () => {
    const video = mount(SignVideo, { props }).find('video')

    expect(video.attributes('src')).toBe('/Videos/clip.mp4')
    expect(video.attributes('poster')).toBe('/Videos/clip.jpg')
    expect(video.attributes('aria-label')).toBe('A person signing')
    expect(video.attributes('loop')).toBeDefined()
    expect(video.attributes('playsinline')).toBeDefined()
    expect((video.element as HTMLVideoElement).muted).toBe(true)
  })

  it('crops to fill when fit is cover and fits inside by default', () => {
    expect(mount(SignVideo, { props }).find('video').classes()).toContain('object-contain')
    expect(mount(SignVideo, { props: { ...props, fit: 'cover' } }).find('video').classes()).toContain('object-cover')
  })

  it('pauses and resumes when `playing` changes', async () => {
    const play = vi.spyOn(HTMLMediaElement.prototype, 'play').mockResolvedValue(undefined)
    const pause = vi.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(() => {})
    const wrapper = mount(SignVideo, { props })

    await wrapper.setProps({ playing: false })
    expect(pause).toHaveBeenCalledTimes(1)

    await wrapper.setProps({ playing: true })
    expect(play).toHaveBeenCalledTimes(1)
  })
})
