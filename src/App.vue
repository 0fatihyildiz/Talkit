<template>
  <loading />
  <notification />
  <router-view></router-view>
</template>

<script setup>
import { onMounted } from "vue";
import { getAuth } from "firebase/auth";
import { useLoginStore } from "@/stores/auth";
import { useLoadingStore } from "@/stores/loading";
import loading from "@/components/loading.vue";
import notification from '@/components/notification.vue'
import router from "@/router";

const authLogin = useLoginStore();
const loadingStore = useLoadingStore();

onMounted(() => {
  loadingStore.setLoading(true, "Application initializing...");
  getAuth().onAuthStateChanged((user) => {
    authLogin.setUser(user);
    if (user) {
      loadingStore.setLoading(true, "Auth Checking...");
      router.push("/");
      loadingStore.setLoading(false, "Done");
      return;
    }
    router.push("/login");
  });
});
</script>
