import { createRouter, createWebHistory } from 'vue-router';
import store from './store/index';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./layouts/MainLayout.vue'),
      redirect: '/order',
      children: [
        {
          path: '/order',
          component: () => import('./pages/Order.vue'),
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: '/login',
      component: () => import('./pages/Login.vue'),
      meta: { requireUnauth: true },
    },
    {
      path: '/:notFound(.*)',
      component: () => import('./pages/NotFound.vue'),
    },
  ],
});

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !store.getters['auth/isAuthenticated']) {
    next('/login');
  } else if (to.meta.requireUnauth && store.getters['auth/isAuthenticated']) {
    next('/order');
  } else {
    next();
  }
});

export default router;
