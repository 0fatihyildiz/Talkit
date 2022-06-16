<template>
  <div class="overflow-hidden relative h-screen">
    <div class="absolute inset-0">
      <svg
        class="w-80 h-80 absolute top-1/3 right-2/3 opacity-10"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M93,63.5Q87,77,74.5,81.5Q62,86,51.5,82.5Q41,79,33,73.5Q25,68,22.5,59Q20,50,19.5,39Q19,28,28.5,20.5Q38,13,50.5,12Q63,11,76.5,16Q90,21,94.5,35.5Q99,50,93,63.5Z"
          stroke="none"
          stroke-width="0"
          fill="#fa4a84"
        ></path>
      </svg>
      <svg
        class="w-96 h-96 absolute top-1/2 left-1/2 opacity-10"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M65.5,63Q35,76,34.5,49Q34,22,65,36Q96,50,65.5,63Z"
          stroke="none"
          stroke-width="0"
          fill="#4b96fa"
        ></path>
      </svg>
      <svg
        class="w-96 h-96 absolute bottom-2/3 left-2/3 opacity-10"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M79.5,65Q67,80,47.5,84Q28,88,20,69Q12,50,23.5,36.5Q35,23,52.5,19Q70,15,81,32.5Q92,50,79.5,65Z"
          stroke="none"
          stroke-width="0"
          fill="#4beffa"
        ></path>
      </svg>
      <div class="absolute inset-0 bg-white/5 backdrop-blur-3xl"></div>
    </div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="relative z-40 md:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>

        <div class="fixed inset-0 flex z-40">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel
              class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white"
            >
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div class="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    @click="sidebarOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <div class="flex-shrink-0 flex items-center px-4">
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                  alt="Workflow"
                />
              </div>
              <div class="mt-5 flex-1 h-0 overflow-y-auto">
                <nav class="px-2 space-y-1">
                  <a
                    v-for="item in navigation"
                    :key="item.name"
                    :href="item.href"
                    :class="[
                      item.current
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                    ]"
                  >
                    <component
                      :is="item.icon"
                      :class="[
                        item.current
                          ? 'text-gray-500'
                          : 'text-gray-400 group-hover:text-gray-500',
                        'mr-4 flex-shrink-0 h-6 w-6',
                      ]"
                      aria-hidden="true"
                    />
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
      <div
        class="flex flex-col justify-between flex-grow py-20 px-6 overflow-y-auto"
      >
        <div class="flex items-center flex-shrink-0 px-4 py-5">
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
            alt="Workflow"
          />
        </div>
        <div class="-mt-12 flex flex-col">
          <!-- This example requires Tailwind CSS v2.0+ -->
            <div class="flex items-center px-4 pb-24">
              <div>
                <img
                  class="inline-block h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div class="ml-3 space-y-1">
                <p
                  class="text-sm font-medium text-gray-700 group-hover:text-gray-900"
                >
                  Tom Cook
                </p>
                <p
                  class="text-xs font-medium text-gray-500 group-hover:text-gray-700"
                >
                  toom@apple.com
                </p>
              </div>
            </div>

          <nav class="px-2 pb-4 space-y-4">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              :class="[
                item.current
                  ? 'text-black font-semibold'
                  : 'text-gray-500 hover:text-gray-600',
                'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
              ]"
            >
              <component
                :is="item.icon"
                :class="[
                  item.current
                    ? 'text-black'
                    : 'text-gray-400 group-hover:text-gray-500',
                  'mr-3 flex-shrink-0 h-6 w-6',
                ]"
                aria-hidden="true"
              />
              {{ item.name }}
            </a>
          </nav>
        </div>
        <div class="px-2">
          <a
            href="#"
            class="text-gray-600  hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
          >
            <!-- Heroicon name: outline/chart-bar -->
            <LoginIcon
              class="h-6 w-6 text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0"
              aria-hidden="true"
            />
            Log Out
          </a>
        </div>
      </div>
    </div>
    <div
      class="md:pl-64 h-screen py-20 justify-between flex flex-col w-full flex-shrink-0"
    >
      <div
        class="max-w-7xl w-full mx-auto sticky top-0 z-10 flex-shrink-0 flex h-16"
      >
        <button
          type="button"
          class="px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 md:hidden"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <MenuAlt2Icon class="h-6 w-6" aria-hidden="true" />
        </button>
        <div class="flex-1 px-4 flex justify-between">
          <div class="flex-1 flex">
            <form class="w-full flex md:ml-0" action="#" method="GET">
              <label for="search-field" class="sr-only">Search</label>
              <div
                class="relative w-full text-gray-400 focus-within:text-gray-600"
              >
                <div
                  class="absolute inset-y-0 left-0 flex items-center pointer-events-none"
                >
                  <SearchIcon class="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                  id="search-field"
                  class="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm bg-transparent"
                  placeholder="Search"
                  type="search"
                  name="search"
                />
              </div>
            </form>
          </div>
          <div class="ml-4 flex items-center md:ml-6">
            <button
              type="button"
              class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <main class="h-full z-10">
        <div class="py-6 h-full">
          <div
            class="max-w-7xl h-full w-full mx-auto px-4 sm:px-6 md:px-8 border-2 border-dashed rounded-3xl border-gray-200"
          ></div>
        </div>
      </main>
    </div>
  </div>
</template>

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

const navigation = [
  { name: "Chat", href: "#", icon: ChatAltIcon, current: true },
  { name: "Friends", href: "#", icon: UsersIcon, current: false },
  { name: "Settings", href: "#", icon: AdjustmentsIcon, current: false },
];

const sidebarOpen = ref(false);
</script>
