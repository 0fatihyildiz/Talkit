<template>
  <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
    <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
    <transition
      enter-active-class="transform ease-out duration-300 transition-all"
      enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
      leave-active-class="transform ease-in-out duration-300 transition-all"
      leave-from-class="scale-100 opacity-100 h-24"
      leave-to-class="scale-95 opacity-0 h-0"
      appear
    >
      <div
        v-if="show"
        class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden transition-margin-top duration-300" :class="show ? 'mt-2' : 'mt-0'" 
      >
        <div class="p-4">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <CheckCircleIcon v-if="type == 'Successfuly'" class="h-6 w-6 text-green-400" aria-hidden="true" />
              <XCircleIcon v-else class="h-6 w-6 text-red-400" aria-hidden="true" />
            </div>
            <div class="ml-3 w-0 flex-1 pt-0.5">
              <p class="text-sm font-medium text-gray-900">
                {{ type }}
              </p>
              <p class="mt-1 text-sm text-gray-500">
                {{ message }}
              </p>
            </div>
            <div class="ml-4 flex-shrink-0 flex">
              <button
                type="button"
                @click="show = false"
                class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                <span class="sr-only">Close</span>
                <XIcon class="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
          <button
            @click="notificationStore.setNotification(1,'Successfuly','You are now sign in.')">
            test
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useNotificationStore } from "@/stores/notification";
import { XIcon, XCircleIcon,CheckCircleIcon } from "@heroicons/vue/outline";

const notificationStore = useNotificationStore();

defineProps({
    show: Boolean,
    type: Number,
    message: String,
})

</script>

<style lang="scss" scoped></style>
