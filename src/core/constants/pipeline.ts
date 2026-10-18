export interface PipelineStep {
  icon: string
  title: string
  text: string
}

// How a sign becomes a subtitle. Shown on the home page and on Translate.
export const PIPELINE_STEPS: PipelineStep[] = [
  {
    icon: 'mdi:video-outline',
    title: 'Camera',
    text: 'Your phone or laptop camera captures you signing. Nothing to install.',
  },
  {
    icon: 'mdi:human-handsup',
    title: 'Pose',
    text: 'We pick out the position of your hands, body and face in every frame.',
  },
  {
    icon: 'mdi:brain',
    title: 'Model',
    text: 'Our model reads that movement and works out the sentence you signed.',
  },
  {
    icon: 'mdi:subtitles-outline',
    title: 'Subtitles',
    text: 'The text streams back to you as you sign, ready to read or save.',
  },
]
