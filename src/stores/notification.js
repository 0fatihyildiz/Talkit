import { defineStore } from "pinia";

export const useNotificationStore = defineStore({
  id: "notification",
  state: () => ({
    data: [],
  }),
  getters: {
    getData: (state) => state.data,
  },
  actions: {
    setNotification(show, type, message) {
        this.data.push({show: show, type: type, message: message})
    },
  },
});
