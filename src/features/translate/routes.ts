import type { RouteRecordRaw } from 'vue-router'

export const translateRoutes: RouteRecordRaw[] = [
  {
    path: 'translate',
    name: 'translate',
    component: () => import('./views/TranslateView.vue'),
  },
]
