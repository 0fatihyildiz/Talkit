<script setup>
import { ref, onMounted } from "vue";
import { useLoginStore } from "@/stores/auth";
import { ArrowLeftIcon } from "@heroicons/vue/outline";
import { useLoadingStore } from "@/stores/loading";
import Provider from "@/components/provider.vue";

const continueForm = ref(false);

const authLogin = useLoginStore();

const loadingStore = useLoadingStore();
const email = ref("");
const password = ref("");
const login = () => authLogin.loginFirebase(email.value, password.value);

onMounted(() => loadingStore.setLoading(false, "Done"));
</script>

<template>
  <div class="content">
    <div class="content__top">
      <h2>Welcome Back</h2>
      <p>Please enter your details.</p>
    </div>
    <div class="transition-all duration-500" :class="continueForm ? 'h-56' : 'h-[26rem]'">
      <transition name="fade" mode="out-in">
        <div v-if="!continueForm">
          <div class="content__middle">
            <div class="content__middle__top">
              <div class="content__middle__top__bottom__form">
                <div class="content__middle__top__bottom__form__formItem1">
                  <div>
                    <input id="email" name="email" type="email" v-model="email" autocomplete="false" required
                      placeholder="Enter your email" />
                  </div>
                </div>

                <div class="content__middle__top__bottom__form__formItem4">
                  <button @click="continueForm = true">Continue</button>
                </div>
              </div>
              <div class="content__middle__top__middle">
                <div class="content__middle__top__middle__line" aria-hidden="true">
                  <div />
                </div>
                <div class="content__middle__top__middle__content">
                  <span>OR</span>
                </div>
              </div>
            </div>
          </div>
          <div class="content__bottom">
            <Provider />
            <div class="content__bottom__bottom">
              <p>
                Don't have an account ?
                <router-link to="/register" as="a">Sign up</router-link>
              </p>
            </div>
          </div>
        </div>
        <div v-else class="content__continueForm">
          <div class="pt-2" v-if="continueForm">
            <button @click="continueForm = false" class="mb-5 text-gray-500 hover:text-gray-600">
              <ArrowLeftIcon class="h-5 w-5" />
            </button>
            <input id="password" name="password" type="password" v-model="password" autocomplete="false" required
              placeholder="Enter your password" />
          </div>
          <div class="content__continueForm__btn">
            <button @click="login">Login</button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  @apply transition-all duration-300;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0 transform translate-y-2;
}

.content {
  @apply mx-auto w-full max-w-sm lg:w-96;

  &__continueForm {
    input {
      @apply appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm;
    }

    &__btn {
      @apply pt-4;

      button {
        @apply w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none;
      }
    }
  }

  &__top {
    @apply flex flex-col items-center;

    h2 {
      @apply mt-6 text-3xl font-extrabold text-gray-900;
    }

    p {
      @apply mt-2 text-sm text-gray-600;
    }

    a {
      @apply font-medium text-cyan-600 hover:text-cyan-500;
    }
  }

  &__middle {
    @apply mt-8;

    &__top {
      p {
        @apply text-sm font-medium text-gray-700;
      }

      &__buttons {
        @apply mt-1 grid grid-cols-3 gap-3;

        a {
          @apply w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50;

          span {
            @apply sr-only;
          }

          svg {
            @apply w-5 h-5;
          }
        }
      }

      &__middle {
        @apply mt-6 relative;

        &__line {
          @apply absolute inset-0 flex items-center;

          div {
            @apply w-full border-t border-gray-300;
          }
        }

        &__content {
          @apply relative flex justify-center text-sm;

          span {
            @apply px-2 bg-white text-gray-500;
          }
        }
      }

      &__bottom {
        @apply mt-6;

        &__form {
          @apply space-y-6;

          &__formItem1 {
            @apply space-y-1;

            label {
              @apply block text-sm font-medium text-gray-700;
            }

            div {
              @apply mt-1;

              input {
                @apply appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm;
              }
            }
          }

          &__formItem2 {
            @apply space-y-1;

            label {
              @apply block text-sm font-medium text-gray-700;
            }

            div {
              @apply mt-1;

              input {
                @apply appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm;
              }
            }
          }

          &__formItem3 {
            @apply flex items-center justify-between;

            &__left {
              @apply flex items-center;

              input {
                @apply h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded;
              }

              label {
                @apply ml-2 block text-sm text-gray-900;
              }
            }

            &__right {
              @apply flex items-center;

              a {
                @apply font-medium text-cyan-600 hover:text-cyan-500;
              }
            }
          }

          &__formItem4 {
            button {
              @apply w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none;
            }
          }
        }
      }
    }
  }

  &__bottom {
    @apply mt-4 text-center;

    p {
      @apply text-gray-600 text-sm font-semibold;
    }

    a {
      @apply text-gray-800 text-sm font-bold hover:text-stone-600;
    }
  }
}
</style>
