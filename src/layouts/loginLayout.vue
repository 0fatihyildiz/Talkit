<script></script>

<template>
  <div class="main">
    <div class="main__leftSide">
      <div class="main__leftSide__content">
        <div class="main__leftSide__content__top">
          <img
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2>Welcome Back</h2>
          <p>Please enter your details.</p>
        </div>
        <div class="main__leftSide__content__middle">
          <div class="main__leftSide__content__middle__top">
            <form
              action="#"
              method="POST"
              class="main__leftSide__content__middle__top__bottom__form"
            >
              <div
                class="main__leftSide__content__middle__top__bottom__form__formItem1"
              >
                <div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required=""
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div
                class="main__leftSide__content__middle__top__bottom__form__formItem4"
              >
                <button type="submit">Continue</button>
              </div>
            </form>

            <div class="main__leftSide__content__middle__top__middle">
              <div
                class="main__leftSide__content__middle__top__middle__line"
                aria-hidden="true"
              >
                <div />
              </div>
              <div
                class="main__leftSide__content__middle__top__middle__content"
              >
                <span>OR</span>
              </div>
            </div>
          </div>

          <div class="main__leftSide__content__middle__top__bottom">
            <a href="#">
              <img src="../assets/" alt="" />
            </a>
          </div>
        </div>
        <div class="main__leftSide__content__bottom">
          <div class="main__leftSide__content__bottom__top">
            <a href="#" class="main__leftSide__content__bottom__top__item">
              <!-- <img src="../assets/google-logo-perfekt.webp" alt="" /> -->
              <p>Continue with Google</p>
            </a>
            <a href="#" class="main__leftSide__content__bottom__top__item">
              <!-- <img src="../assets/google-logo-perfekt.webp" alt="" /> -->
              <p>Continue with Facebook</p>
            </a>
            <a href="#" class="main__leftSide__content__bottom__top__item">
              <!-- <img src="../assets/google-logo-perfekt.webp" alt="" /> -->
              <p>Continue with Apple</p>
            </a>
          </div>
          <div class="main__leftSide__content__bottom__bottom">
            <p>Don't have an account ? <a href="#">Sign up</a></p>
          </div>

        </div>
      </div>
    </div>
    <div class="main__rightSide">
      <img
        src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
        alt=""
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  @apply min-h-screen flex;
  &__leftSide {
    @apply flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24;
    &__content {
      @apply mx-auto w-full max-w-sm lg:w-96;
      &__top {
        @apply flex flex-col items-center;
        img {
          @apply h-12 w-auto;
        }
        h2 {
          @apply mt-6 text-3xl font-extrabold text-gray-900;
        }
        p {
          @apply mt-2 text-sm text-gray-600;
        }
        a {
          @apply font-medium text-indigo-600 hover:text-indigo-500;
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
                    @apply appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm;
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
                    @apply appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm;
                  }
                }
              }
              &__formItem3 {
                @apply flex items-center justify-between;
                &__left {
                  @apply flex items-center;
                  input {
                    @apply h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded;
                  }
                  label {
                    @apply ml-2 block text-sm text-gray-900;
                  }
                }
                &__right {
                  @apply flex items-center;
                  a {
                    @apply font-medium text-indigo-600 hover:text-indigo-500;
                  }
                }
              }
              &__formItem4 {
                button {
                  @apply w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500;
                }
              }
            }
          }
        }
      }
      &__bottom {
        @apply flex flex-col ;
        &__top {
        @apply flex flex-col ;
          &__item {
            @apply flex justify-center items-center border rounded-lg my-2 p-2 hover:bg-gray-100 ;
            img {
              @apply w-10 ;
            }
            p {
              @apply font-semibold text-sm text-gray-700 ml-2 ;
            }
          }
        }
        &__bottom {
          @apply mt-4 text-center;
          p {
            @apply text-gray-600 text-sm font-semibold;
          }
          a {
            @apply text-gray-800 text-sm font-bold hover:text-stone-600 ;
          }
        }
      }
    }
  }
  &__rightSide {
    @apply hidden lg:block relative w-0 flex-1;
    img {
      @apply rounded-l-[4rem] absolute inset-0 h-full w-full object-cover ;
    }
  }
}
</style>
