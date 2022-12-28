import { defineStore } from "pinia";
import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";
import router from "@/router";
import { useNotificationStore } from "@/stores/notification";
import { useLoadingStore } from "@/stores/loading";

export const useLoginStore = defineStore({
  id: "auth",
  state: () => ({
    user: null,
    auth: getAuth(),
  }),
  getters: {
    getUser: (state) => state.user,
  },
  actions: {
    async loginFirebase(email, password) {
      this.auth;
      await setPersistence(this.auth, browserSessionPersistence)
        .then(() => {
          return signInWithEmailAndPassword(this.auth, email, password).then(
            (res) => {
              console.log(res.message);
              notificationStore.setNotification(1, "Error", "User not found");
            }
          );
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/user-not-found":
              // notificationStore.setNotification(1, "Error", "User not found");
              break;
            case "auth/wrong-password":
              // notificationStore.setNotification(1, "Error", "Wrong password");
              break;
            default:
              // notificationStore.setNotification(1,"Error","Email or password was incorrect");
              break;
          }
        });
    },
    async loginwithGoogle() {
      this.auth;
      const provider = new GoogleAuthProvider();
      await signInWithPopup(this.auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          this.user = result.user;
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    },
    async loginwithGithub() {
      this.auth;
      const provider = new GithubAuthProvider();
      signInWithPopup(this.auth, provider)
        .then((result) => {
          // This gives you a GitHub Access Token. You can use it to access the GitHub API.
          const credential = GithubAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;

          // The signed-in user info.
          this.user = result.user;
          // ...
        })
        .catch((error) => {
          console.log(error);
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GithubAuthProvider.credentialFromError(error);
          // ...
        });
    },
    logOut() {
      const loadingStore = useLoadingStore();
      signOut(this.auth).then(() => {
        this.user = null;
        router.push("/login");
      });
    },
    setUser(user) {
      this.user = user;
    },
  },
});

export const useRegisterStore = defineStore({
  id: "auth",
  state: () => ({}),
  getters: {},
  actions: {
    registerFirebase(email, password) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert("Successfully registered");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
});
