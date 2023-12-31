import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// route level code-splitting
// this generates a separate chunk (About.[hash].js) for this route
// which is lazy-loaded when the route is visited.

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/blog/feed',
      name: 'blog',
      component: () => import('../views/BlogFeedView.vue')
    },
    {
      path: '/blog/:id',
      name: 'blog-post',
      component: () => import('../views/BlogPostView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
