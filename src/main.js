import { createApp } from "vue";
import { createPinia } from "pinia";
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, browserSessionPersistence,browserPopupRedirectResolver } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAc4a8TvUMqfyTbsCzA53Sr0ciC1VOb0po",
  authDomain: "talkit-18f63.firebaseapp.com",
  projectId: "talkit-18f63",
  storageBucket: "talkit-18f63.appspot.com",
  messagingSenderId: "42384844088",
  appId: "1:42384844088:web:5d3444b445541025cc8dcd",
  measurementId: "G-9XJDT1QYSM",
};

import App from "./App.vue";
import router from "./router";
import "./index.scss";

const app = createApp(App);

const firebaseApp = initializeApp(firebaseConfig);

initializeAuth(firebaseApp, {
  persistence: browserSessionPersistence,
  popupRedirectResolver: browserPopupRedirectResolver,
});
getAuth();
app.use(createPinia());
app.use(router);

app.mount("#app");
