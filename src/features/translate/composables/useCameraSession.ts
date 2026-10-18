import { ref } from 'vue'

// Placeholder session state. Replace with real camera/model handling
// (getUserMedia + inference connection) once the camera is added.
export function useCameraSession() {
  const isRunning = ref(true)
  const isModelConnected = ref(true)

  function toggle() {
    isRunning.value = !isRunning.value
  }

  return { isRunning, isModelConnected, toggle }
}
