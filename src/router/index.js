import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/layouts/dashboardLayout.vue'),
      // children: [
      //   {
      //       path: "/",
      //       name: "home",
      //       component: () => import("@/views/dashboard/home.vue"),
      //   },
      //   {
      //       path: "/settings",
      //       name: "settings",
      //       component: () => import("@/views/dashboard/settings.vue"),
      //   },
      // ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/layouts/loginLayout.vue')
    }
  ]
})

export default router
