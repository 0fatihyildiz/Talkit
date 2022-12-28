<template>
  <div class="dashboard-main">
    <div class="dashboard-main__background">
      <svg class="w-80 h-80 absolute top-1/3 right-2/3 opacity-10" viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M93,63.5Q87,77,74.5,81.5Q62,86,51.5,82.5Q41,79,33,73.5Q25,68,22.5,59Q20,50,19.5,39Q19,28,28.5,20.5Q38,13,50.5,12Q63,11,76.5,16Q90,21,94.5,35.5Q99,50,93,63.5Z"
          stroke="none" stroke-width="0" fill="#fa4a84"></path>
      </svg>
      <svg class="w-96 h-96 absolute top-1/2 left-1/2 opacity-10" viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M65.5,63Q35,76,34.5,49Q34,22,65,36Q96,50,65.5,63Z" stroke="none" stroke-width="0" fill="#4b96fa">
        </path>
      </svg>
      <svg class="w-96 h-96 absolute bottom-2/3 left-2/3 opacity-10" viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M79.5,65Q67,80,47.5,84Q28,88,20,69Q12,50,23.5,36.5Q35,23,52.5,19Q70,15,81,32.5Q92,50,79.5,65Z"
          stroke="none" stroke-width="0" fill="#4beffa"></path>
      </svg>
      <div class="absolute inset-0 bg-white/5 backdrop-blur-3xl"></div>
    </div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="dashboard-main__sidebarMobile" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
          enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
          leave-to="opacity-0">
          <div class="overlay" />
        </TransitionChild>

        <div class="dashboard-main__sidebarMobile__content">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full" enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
            leave-to="-translate-x-full">
            <DialogPanel class="dashboard-main__sidebarMobile__content__wrap">
              <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0"
                enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="close-btn">
                  <button type="button"
                    class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <div class="flex-shrink-0 flex items-center px-4">
                <img class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                  alt="Workflow" />
              </div>
              <div class="mt-5 flex-1 h-0 overflow-y-auto">
                <nav class="px-2 space-y-1">
                  <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[
                    item.current
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                  ]">
                    <component :is="item.icon" :class="[
                      item.current
                        ? 'text-gray-500'
                        : 'text-gray-400 group-hover:text-gray-500',
                      'mr-4 flex-shrink-0 h-6 w-6',
                    ]" aria-hidden="true" />
                    {{ item.name }}
                  </a>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
          <div class="flex-shrink-0 w-14" aria-hidden="true">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:w-72 md:flex-col md:fixed md:inset-y-0">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex flex-col justify-between flex-grow py-20 px-6 overflow-y-auto">
        <div class="flex items-center flex-shrink-0 px-4 py-5">
          <svg class="h-10 w-auto" viewBox="0 0 492 145" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M98.2908 125.146C125.557 125.146 139.194 125.146 147.661 116.672C156.135 108.205 156.135 94.5678 156.135 67.3013C156.135 40.0348 156.135 26.398 147.661 17.931C139.194 9.45679 125.557 9.45679 98.2908 9.45679H69.3686C42.1021 9.45679 28.4653 9.45679 19.9983 17.931C11.524 26.398 11.524 40.0348 11.524 67.3013C11.524 94.5678 11.524 108.205 19.9983 116.672C24.7198 121.4 31.0466 123.49 40.4463 124.408"
              fill="#FF7777" />
            <path
              d="M98.2908 125.146C89.3538 125.146 79.5058 128.761 70.5182 133.425C56.0715 140.923 48.8482 144.676 45.2907 142.282C41.7333 139.896 42.4057 132.485 43.7579 117.669L44.0615 114.3"
              fill="#FF7777" />
            <path
              d="M86.7668 117.689C114.033 117.689 127.67 117.689 136.137 109.215C144.611 100.748 144.611 87.111 144.611 59.8445C144.611 32.5781 144.611 18.9412 136.137 10.4742C127.67 2 114.033 2 86.7668 2H57.8445C30.5781 2 16.9412 2 8.47422 10.4742C-1.29296e-06 18.9412 0 32.5781 0 59.8445C0 87.111 -1.29296e-06 100.748 8.47422 109.215C13.1958 113.944 19.5225 116.033 28.9223 116.952"
              fill="#5259FF" fill-opacity="0.5" />
            <path
              d="M86.7668 117.689C77.8298 117.689 67.9818 121.304 58.9942 125.968C44.5475 133.466 37.3242 137.219 33.7667 134.825C30.2093 132.439 30.8818 125.028 32.2339 110.213L32.5376 106.843"
              fill="#5259FF" fill-opacity="0.5" />
            <path
              d="M92.1899 123.112C119.456 123.112 133.093 123.112 141.56 114.638C150.034 106.171 150.034 92.5341 150.034 65.2676C150.034 38.0012 150.034 24.3643 141.56 15.8973C133.093 7.42309 119.456 7.4231 92.1899 7.4231H63.2676C36.0012 7.4231 22.3643 7.42309 13.8973 15.8973C5.42309 24.3643 5.4231 38.0012 5.4231 65.2676C5.4231 92.5341 5.42309 106.171 13.8973 114.638C18.6189 119.367 24.9456 121.456 34.3454 122.375"
              fill="#1D2024" />
            <path
              d="M92.1898 123.112C83.2528 123.112 73.4048 126.727 64.4172 131.391C49.9706 138.889 42.7472 142.642 39.1898 140.249C35.6323 137.862 36.3048 130.451 37.6569 115.636L37.9606 112.266"
              fill="#1D2024" />
            <circle cx="64.5" cy="89.5" r="12.5" fill="white" />
            <path
              d="M132 89.4637C132 96.3873 126.404 102 119.5 102C112.596 102 107 96.3873 107 89.4637C107 82.5402 112.596 85.7368 119.5 85.7368C126.404 85.7368 132 82.5402 132 89.4637Z"
              fill="white" />
            <path
              d="M198.773 41.9801V28.7273H268.403V41.9801H241.429V116H225.747V41.9801H198.773ZM287.474 117.321C283.326 117.321 279.59 116.582 276.266 115.105C272.971 113.599 270.357 111.384 268.426 108.457C266.522 105.531 265.57 101.923 265.57 97.6335C265.57 93.9403 266.252 90.8864 267.616 88.4716C268.98 86.0568 270.84 84.125 273.198 82.6761C275.556 81.2273 278.213 80.1335 281.167 79.3949C284.15 78.6278 287.232 78.0739 290.414 77.733C294.249 77.3352 297.36 76.9801 299.747 76.6676C302.133 76.3267 303.866 75.8153 304.945 75.1335C306.053 74.4233 306.607 73.3295 306.607 71.8523V71.5966C306.607 68.3864 305.656 65.9006 303.752 64.1392C301.849 62.3778 299.107 61.4972 295.528 61.4972C291.749 61.4972 288.752 62.321 286.536 63.9688C284.349 65.6165 282.872 67.5625 282.105 69.8068L267.701 67.7614C268.838 63.7841 270.713 60.4602 273.326 57.7898C275.94 55.0909 279.136 53.0739 282.914 51.7386C286.693 50.375 290.869 49.6932 295.443 49.6932C298.596 49.6932 301.735 50.0625 304.86 50.8011C307.985 51.5398 310.84 52.7614 313.426 54.4659C316.011 56.142 318.085 58.429 319.647 61.3267C321.238 64.2244 322.034 67.8466 322.034 72.1932V116H307.204V107.009H306.693C305.755 108.827 304.434 110.531 302.73 112.122C301.053 113.685 298.937 114.949 296.38 115.915C293.852 116.852 290.883 117.321 287.474 117.321ZM291.48 105.986C294.576 105.986 297.261 105.375 299.534 104.153C301.806 102.903 303.553 101.256 304.775 99.2102C306.025 97.1648 306.65 94.9347 306.65 92.5199V84.8068C306.167 85.2045 305.343 85.5739 304.178 85.9148C303.042 86.2557 301.764 86.554 300.343 86.8097C298.923 87.0653 297.516 87.2926 296.124 87.4915C294.732 87.6903 293.525 87.8608 292.502 88.0028C290.201 88.3153 288.141 88.8267 286.323 89.5369C284.505 90.2472 283.07 91.2415 282.019 92.5199C280.968 93.7699 280.443 95.3892 280.443 97.3778C280.443 100.219 281.48 102.364 283.553 103.812C285.627 105.261 288.269 105.986 291.48 105.986ZM349.371 28.7273V116H333.945V28.7273H349.371ZM375.696 95.4602L375.654 76.8381H378.125L401.648 50.5455H419.674L390.739 82.7614H387.543L375.696 95.4602ZM361.634 116V28.7273H377.06V116H361.634ZM402.713 116L381.407 86.2131L391.804 75.3466L421.165 116H402.713ZM426.354 116V50.5455H441.78V116H426.354ZM434.11 41.2557C431.667 41.2557 429.564 40.446 427.803 38.8267C426.042 37.179 425.161 35.2045 425.161 32.9034C425.161 30.5739 426.042 28.5994 427.803 26.9801C429.564 25.3324 431.667 24.5085 434.11 24.5085C436.582 24.5085 438.684 25.3324 440.417 26.9801C442.178 28.5994 443.059 30.5739 443.059 32.9034C443.059 35.2045 442.178 37.179 440.417 38.8267C438.684 40.446 436.582 41.2557 434.11 41.2557ZM486.728 50.5455V62.4773H449.1V50.5455H486.728ZM458.39 34.8636H473.816V96.3125C473.816 98.3864 474.129 99.9773 474.754 101.085C475.407 102.165 476.259 102.903 477.31 103.301C478.362 103.699 479.526 103.898 480.805 103.898C481.771 103.898 482.651 103.827 483.447 103.685C484.271 103.543 484.896 103.415 485.322 103.301L487.921 115.361C487.097 115.645 485.918 115.957 484.384 116.298C482.879 116.639 481.032 116.838 478.844 116.895C474.981 117.009 471.501 116.426 468.404 115.148C465.308 113.841 462.85 111.824 461.032 109.097C459.242 106.369 458.362 102.96 458.39 98.8693V34.8636Z"
              fill="black" />
          </svg>
        </div>
        <div class="-mt-12 flex flex-col">
          <!-- This example requires Tailwind CSS v2.0+ -->
          <div class="flex items-center px-4 pb-24" v-if="authLogin.user">
            <div>
              <img class="inline-block h-10 w-10 rounded-full bg-black/5" :src="authLogin.user.photoURL" alt="" />
            </div>
            <div class="ml-3 space-y-1">
              <p class="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                {{ authLogin.user.displayName }}
              </p>
              <p class="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                {{ authLogin.user.email }}
              </p>
            </div>
          </div>
          <div class="flex items-center px-4 pb-24" v-else>
            <div>
              <img class="inline-block h-10 w-10 rounded-full bg-black/5" />
            </div>
            <div class="ml-3 space-y-1">
              <p class="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                test
              </p>
              <p class="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                test
              </p>
            </div>
          </div>

          <nav class="px-2 pb-4 space-y-4">
            <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[
              item.current
                ? 'text-black font-semibold'
                : 'text-gray-500 hover:text-gray-600',
              'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
            ]">
              <component :is="item.icon" :class="[
                item.current
                  ? 'text-black'
                  : 'text-gray-400 group-hover:text-gray-500',
                'mr-3 flex-shrink-0 h-6 w-6',
              ]" aria-hidden="true" />
              {{ item.name }}
            </a>
          </nav>
        </div>
        <div class="px-2">
          <a @click="authLogin.logOut"
            class="text-gray-600 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md cursor-pointer">
            <!-- Heroicon name: outline/chart-bar -->
            <LoginIcon class="h-6 w-6 text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0" aria-hidden="true" />
            Log Out
          </a>
        </div>
      </div>
    </div>
    <div class="md:pl-64 h-screen py-20 justify-between flex flex-col w-full flex-shrink-0">
      <div class="max-w-7xl w-full mx-auto sticky top-0 z-10 flex-shrink-0 flex h-16">
        <button type="button"
          class="px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 md:hidden"
          @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <MenuAlt2Icon class="h-6 w-6" aria-hidden="true" />
        </button>
        <div class="flex-1 px-4 flex justify-between">
          <div class="flex-1 flex">
            <form class="w-full flex md:ml-0" action="#" method="GET">
              <label for="search-field" class="sr-only">Search</label>
              <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                  <SearchIcon class="h-5 w-5" aria-hidden="true" />
                </div>
                <input id="search-field"
                  class="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm bg-transparent"
                  placeholder="Search" type="search" name="search" />
              </div>
            </form>
          </div>
          <div class="ml-4 flex items-center md:ml-6">
            <button type="button"
              class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <main class="h-full z-10">
        <div class="py-6 h-full">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dashboard-main {
  @apply overflow-hidden relative h-screen;

  &__background {
    @apply absolute inset-0;
  }

  &__sidebarMobile {
    @apply relative z-40 md:hidden;

    &__content{
      @apply fixed inset-0 flex z-40;

      &__wrap{
        @apply relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white;

        .close-btn{
          @apply absolute top-0 right-0 -mr-12 pt-2;
        }
      }
    }

    .overlay {
      @apply fixed inset-0 bg-gray-600 bg-opacity-75
    }

  }
}
</style>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  AdjustmentsIcon,
  ChatAltIcon,
  LoginIcon,
  UsersIcon,
  XIcon,
} from "@heroicons/vue/outline";
import { SearchIcon } from "@heroicons/vue/solid";
import { useLoginStore } from "@/stores/auth";

const authLogin = useLoginStore();

const navigation = [
  { name: "Chat", href: "#", icon: ChatAltIcon, current: true },
  { name: "Friends", href: "#", icon: UsersIcon, current: false },
  { name: "Settings", href: "#", icon: AdjustmentsIcon, current: false },
];

const sidebarOpen = ref(false);
</script>
