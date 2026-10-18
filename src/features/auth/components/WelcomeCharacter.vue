<!--
  Welcome signing animation (see DESIGN.md §8). Inline SVG + CSS keyframes only:
  it must stay inline (not an <img>) so the styles.
  Width is controlled by the parent; the SVG fills its container.
-->
<template>
  <svg
    class="ws-sign"
    viewBox="0 0 360 380"
    role="img"
    aria-label="A friendly character signing welcome with both hands"
  >
    <rect x="0" y="0" width="360" height="380" rx="36" fill="#E6E7D2" />

    <g class="ws-body">
      <!-- neck, torso, collar -->
      <rect x="169" y="176" width="22" height="70" rx="10" fill="#E8B88F" />
      <path d="M106 380 Q112 258 148 238 L212 238 Q248 258 254 380 Z" fill="#5B6B2E" />
      <path
        d="M164 240 Q180 256 196 240"
        fill="none"
        stroke="#FAF8F2"
        stroke-width="4.5"
        stroke-linecap="round"
      />

      <!-- head -->
      <g class="ws-head">
        <circle cx="180" cy="78" r="16" fill="#2B2620" />
        <ellipse cx="180" cy="136" rx="47" ry="53" fill="#F0C29B" />
        <path d="M133 132 Q131 85 180 85 Q229 85 227 132 Q210 106 180 106 Q150 106 133 132 Z" fill="#2B2620" />
        <g class="ws-eyes">
          <ellipse cx="162" cy="140" rx="5.5" ry="7.5" fill="#161616" />
          <ellipse cx="198" cy="140" rx="5.5" ry="7.5" fill="#161616" />
        </g>
        <circle cx="149" cy="158" r="7.5" fill="#EE9C86" opacity=".65" />
        <circle cx="211" cy="158" r="7.5" fill="#EE9C86" opacity=".65" />
        <path d="M170 160 Q180 171 190 160" fill="none" stroke="#161616" stroke-width="4" stroke-linecap="round" />
      </g>

      <!-- left arm (viewer's right) -->
      <g class="ws-lu" stroke="#5B6B2E" stroke-width="16" stroke-linecap="round" fill="none">
        <line x1="222" y1="240" x2="222" y2="282" />
        <g class="ws-lf">
          <line x1="222" y1="282" x2="222" y2="318" />
          <g transform="translate(222 318) scale(-0.9 0.9)" stroke="none">
            <g class="ws-lh">
              <rect x="-17" y="-4" width="34" height="48" rx="15" fill="#F0C29B" />
              <ellipse cx="18" cy="14" rx="8" ry="13" transform="rotate(-28 18 14)" fill="#F0C29B" />
              <g stroke="#D69A72" stroke-width="2.5" stroke-linecap="round">
                <line x1="-8.5" y1="28" x2="-8.5" y2="40" />
                <line x1="0" y1="28" x2="0" y2="42" />
                <line x1="8.5" y1="28" x2="8.5" y2="40" />
              </g>
            </g>
          </g>
        </g>
      </g>

      <!-- right arm (viewer's left) -->
      <g class="ws-ru" stroke="#5B6B2E" stroke-width="16" stroke-linecap="round" fill="none">
        <line x1="138" y1="240" x2="138" y2="282" />
        <g class="ws-rf">
          <line x1="138" y1="282" x2="138" y2="318" />
          <g transform="translate(138 318) scale(0.9)" stroke="none">
            <g class="ws-rh">
              <rect x="-17" y="-4" width="34" height="48" rx="15" fill="#F0C29B" />
              <ellipse cx="18" cy="14" rx="8" ry="13" transform="rotate(-28 18 14)" fill="#F0C29B" />
              <g stroke="#D69A72" stroke-width="2.5" stroke-linecap="round">
                <line x1="-8.5" y1="28" x2="-8.5" y2="40" />
                <line x1="0" y1="28" x2="0" y2="42" />
                <line x1="8.5" y1="28" x2="8.5" y2="40" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
</template>

<style scoped>
.ws-body,
.ws-head,
.ws-ru,
.ws-rf,
.ws-rh,
.ws-lu,
.ws-lf,
.ws-lh {
  animation-duration: 6.6s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.45, 0, 0.25, 1);
}
.ws-body { transform-origin: 180px 380px; animation-name: ws-body; }
.ws-head { transform-origin: 180px 192px; animation-name: ws-head; }
.ws-ru { transform-origin: 138px 240px; animation-name: ws-ru; }
.ws-rf { transform-origin: 138px 282px; animation-name: ws-rf; animation-delay: 0.07s; }
.ws-rh { transform-origin: 0 0; animation-name: ws-rh; animation-delay: 0.14s; }
.ws-lu { transform-origin: 222px 240px; animation-name: ws-lu; }
.ws-lf { transform-origin: 222px 282px; animation-name: ws-lf; animation-delay: 0.07s; }
.ws-lh { transform-origin: 0 0; animation-name: ws-lh; animation-delay: 0.14s; }
.ws-eyes { transform-origin: 180px 138px; animation: ws-blink 3.3s infinite; }

@keyframes ws-body { 0%,22%{transform:rotate(0deg)} 36%{transform:rotate(-1deg)} 54%,64%{transform:rotate(1deg)} 78%,100%{transform:rotate(0deg)} }
@keyframes ws-head { 0%{transform:rotate(0deg)} 12%,22%{transform:rotate(-2deg)} 36%{transform:rotate(2deg)} 54%,64%{transform:rotate(4deg)} 78%,100%{transform:rotate(0deg)} }
@keyframes ws-ru { 0%{transform:rotate(6deg)} 12%{transform:rotate(20deg)} 17%{transform:rotate(22deg)} 22%{transform:rotate(20deg)} 36%{transform:rotate(70deg)} 40%{transform:rotate(68deg)} 54%,64%{transform:rotate(30deg)} 78%,100%{transform:rotate(6deg)} }
@keyframes ws-rf { 0%{transform:rotate(2deg)} 12%{transform:rotate(-125deg)} 17%{transform:rotate(-128deg)} 22%{transform:rotate(-125deg)} 36%{transform:rotate(-255deg)} 40%{transform:rotate(-250deg)} 54%,64%{transform:rotate(-100deg)} 78%,100%{transform:rotate(2deg)} }
@keyframes ws-rh { 0%{transform:rotate(0deg)} 12%,22%{transform:rotate(-30deg)} 36%{transform:rotate(5deg)} 40%{transform:rotate(-6deg)} 54%,64%{transform:rotate(12deg)} 78%,100%{transform:rotate(0deg)} }
@keyframes ws-lu { 0%,22%{transform:rotate(-6deg)} 36%,40%{transform:rotate(-30deg)} 54%,64%{transform:rotate(-22deg)} 78%,100%{transform:rotate(-6deg)} }
@keyframes ws-lf { 0%,22%{transform:rotate(-2deg)} 36%{transform:rotate(150deg)} 40%{transform:rotate(146deg)} 54%,64%{transform:rotate(60deg)} 78%,100%{transform:rotate(-2deg)} }
@keyframes ws-lh { 0%,22%{transform:rotate(0deg)} 36%,40%{transform:rotate(-8deg)} 54%,64%{transform:rotate(20deg)} 78%,100%{transform:rotate(0deg)} }
@keyframes ws-blink { 0%,90%,100%{transform:scaleY(1)} 94%{transform:scaleY(0.08)} }

/* Reduced motion: show one still frame (hands open). */
@media (prefers-reduced-motion: reduce) {
  .ws-body,
  .ws-head,
  .ws-ru,
  .ws-rf,
  .ws-rh,
  .ws-lu,
  .ws-lf,
  .ws-lh {
    animation-play-state: paused;
    animation-delay: -3.9s;
  }
  .ws-eyes { animation: none; }
}

.ws-sign {
  display: block;
  width: 100%;
  height: auto;
}
</style>
