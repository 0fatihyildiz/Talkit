import { createRouter, createWebHistory } from "vue-router";
import { useLoginStore } from "@/stores/auth";
import { useLoadingStore } from "@/stores/loading";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/layouts/dashboardLayout.vue'),
      children: [
        {
            path: "/",
            name: "home",
            component: () => import("@/views/dashboard/home.vue"),
        },
        {
            path: "/settings",
            name: "settings",
            component: () => import("@/views/dashboard/settings.vue"),
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/layouts/authLayout.vue'),
      children: [
        {
            path: "/login",
            name: "login",
            component: () => import("@/views/login.vue"),
        },
        {
            path: "/register",
            name: "register",
            component: () => import("@/views/register.vue"),
        },
      ]
    }
  ]
});
router.beforeEach((to,from)=>{
  const loadingStore = useLoadingStore();
  if (to.meta.requiresLogin) {  
    if(useLoginStore.user){
      router.push('/');
      return;
    }
    router.push('/login');
  }
});
export default router
