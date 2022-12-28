<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div
    aria-live="assertive"
    class="notification"
  >
    <item v-for="(item, index) in notificationStore.getData" :show="item.show" :type="item.type" :message="item.message" :key="index" />
  </div>
</template>

<style lang="scss" scoped>
.notification{
  @apply z-20 fixed inset-0 flex flex-col items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start;
}
</style>

<script setup>
import { ref, watch } from "vue";
import item from "@/components/notificationItem.vue";
import { useNotificationStore } from "@/stores/notification";

const notificationStore = useNotificationStore();


watch(() => notificationStore.getData, (newValue, oldValue) => {
    console.log(newValue, oldValue);
})

const show = ref(true);
</script>
