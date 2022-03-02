/** @format */

import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    exact: true,
    component: () => import('./components/empty.vue'),
  },
  {
    path: '/hello',
    name: 'hello',
    exact: true,
    component: () => import('./components/HelloWorld.vue'),
  },
  {
    path: '/urunler',
    name: 'urunler',
    exact: true,
    component: () => import('./urunler.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    else return { left: 0, top: 0 };
  },
});

export default router;
