<!-- A hand reduced to connected points, the way the model sees it. -->
<template>
  <svg
    viewBox="0 0 440 485"
    class="block h-auto w-full rounded-card bg-tint text-outline-field"
    role="img"
    aria-label="A hand drawn as connected points"
  >
    <defs>
      <pattern id="about-hand-dots" width="27" height="27" patternUnits="userSpaceOnUse">
        <circle cx="13.5" cy="13.5" r="1.6" fill="currentColor" opacity="0.55" />
      </pattern>
    </defs>
    <rect width="440" height="485" fill="url(#about-hand-dots)" />

    <g class="text-primary" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <!-- thumb, wrist and pinky edge -->
      <polyline points="220,441 165,396 124,351 97,304 79,262" />
      <polyline points="220,441 176,298" />
      <polyline points="220,441 312,328" />
      <!-- knuckle line -->
      <polyline points="176,298 226,281 273,293 312,328" />
      <!-- fingers -->
      <polyline points="176,298 165,236 158,194 154,157" />
      <polyline points="226,281 227,212 228,166 229,124" />
      <polyline points="273,293 282,234 286,194 289,161" />
      <polyline points="312,328 332,280 343,247 352,218" />
    </g>

    <g class="text-primary" fill="#fff" stroke="currentColor" stroke-width="2.5">
      <circle cx="220" cy="441" r="8" />
      <circle v-for="[x, y] in joints" :key="`${x}-${y}`" :cx="x" :cy="y" r="6.5" />
    </g>
    <g class="text-primary" fill="currentColor">
      <circle v-for="[x, y] in tips" :key="`${x}-${y}`" :cx="x" :cy="y" r="9" />
    </g>
  </svg>
</template>

<script setup lang="ts">
const joints = [
  [165, 396], [124, 351], [97, 304],
  [176, 298], [165, 236], [158, 194],
  [226, 281], [227, 212], [228, 166],
  [273, 293], [282, 234], [286, 194],
  [312, 328], [332, 280], [343, 247],
]
const tips = [[79, 262], [154, 157], [229, 124], [289, 161], [352, 218]]
</script>
