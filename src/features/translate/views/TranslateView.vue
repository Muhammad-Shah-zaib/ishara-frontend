<script setup lang="ts">
import { onMounted } from 'vue'
import CameraControls from '../components/CameraControls.vue'
import CameraStage from '../components/CameraStage.vue'
import TextSizeControl from '../components/TextSizeControl.vue'
import TranscriptPanel from '../components/TranscriptPanel.vue'
import TranslateIntro from '../components/TranslateIntro.vue'
import { useCameraSession } from '../composables/useCameraSession'
import { useCaptionSize } from '../composables/useCaptionSize'
import { useTranscriptStore } from '../stores/transcriptStore'

const store = useTranscriptStore()
const { isRunning, isModelConnected, toggle } = useCameraSession()
const captionSize = useCaptionSize()

// Placeholder data until the camera and model are wired in.
onMounted(store.loadDemo)
</script>

<template>
  <div class="container-page flex flex-col gap-8 pb-16 pt-6 sm:gap-10 sm:pb-24 sm:pt-10">
    <TranslateIntro :model-connected="isModelConnected" />

    <div class="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
      <div class="flex flex-col gap-4">
        <CameraStage
          :running="isRunning"
          :caption="store.current?.text ?? ''"
          :caption-size="captionSize.size.value"
        />

        <div class="flex flex-wrap items-center justify-between gap-4">
          <CameraControls :running="isRunning" @toggle="toggle" />
          <TextSizeControl
            :can-decrease="captionSize.canDecrease.value"
            :can-increase="captionSize.canIncrease.value"
            @decrease="captionSize.decrease"
            @increase="captionSize.increase"
          />
        </div>

        <p class="text-small text-ink-muted sm:text-body">
          For best results: good light on your face, both hands in the frame, about an arm's length from the
          camera.
        </p>
      </div>

      <TranscriptPanel />
    </div>
  </div>
</template>
