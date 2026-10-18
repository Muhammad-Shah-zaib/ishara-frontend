import { createRouter, createWebHistory } from 'vue-router'
import PrimaryLayout from '@/core/layouts/PrimaryLayout.vue'
import SecondaryLayout from '@/core/layouts/SecondaryLayout.vue'
import { aboutRoutes } from '@/features/about/routes'
import { authRoutes } from '@/features/auth/routes'
import { homeRoutes } from '@/features/home/routes'
import { translateRoutes } from '@/features/translate/routes'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    {
      // Content pages share the primary layout (navigation header, full footer).
      path: '/',
      component: PrimaryLayout,
      children: [...homeRoutes, ...translateRoutes, ...aboutRoutes],
    },
    {
      // Account pages share the secondary layout (wordmark header, slim footer).
      path: '/',
      component: SecondaryLayout,
      children: authRoutes,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/core/pages/NotFound.vue'),
    },
  ],
})

export default router
