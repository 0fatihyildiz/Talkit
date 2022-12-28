import { defineStore } from "pinia";

export const useLoadingStore = defineStore({
  id: "loading",
  state: () => ({
    loading: false,
    loadingStatus: "Application İnitializing...",
  }),
  getters: {
    getLoading: (state) => state.loading,
    getLoadingStatus: (state) => state.loadingStatus,
  },
  actions: {
    setLoading(loading, loadingStatus) {
      this.loading = loading;
      loadingStatus && (this.loadingStatus = loadingStatus);
    },
  },
});
