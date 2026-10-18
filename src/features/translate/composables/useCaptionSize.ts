import { computed, ref } from 'vue'

export const CAPTION_SIZES = [22, 28, 36] as const

export function useCaptionSize() {
  const index = ref(1)

  const size = computed(() => CAPTION_SIZES[index.value])
  const canDecrease = computed(() => index.value > 0)
  const canIncrease = computed(() => index.value < CAPTION_SIZES.length - 1)

  function decrease() {
    if (canDecrease.value) index.value--
  }

  function increase() {
    if (canIncrease.value) index.value++
  }

  return { size, canDecrease, canIncrease, decrease, increase }
}
