<template>
  <header class="fixed w-full z-50 bg-white shadow-sm">
    <div class="container mx-auto px-4 md:px-6 py-3">
      <div class="flex items-center justify-between w-full xl:w-auto">
        <!-- left -->
        <div class="flex items-center">
          <button type="button" @click.prevent="toggle">
            <img class="mr-3 xl:hidden" src="@/assets/hamburger.svg" alt="Menu" />
          </button>
          <a href="https://clusters.tw/" class="flex items-center relative">
            <img class="w-24 xl:w-40" src="@/assets/logo.svg" alt="Logo" />
            <div class="absolute -right-1 -top-2 w-4 h-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="fill-[#5562EA]">
                <path
                  d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"
                />
              </svg>
            </div>
          </a>
          <ul class="ml-6 items-center hidden xl:flex">
            <li class="px-3 py-2 text-gray-600 hover:text-black">
              <a href="https://clusters.tw/">首頁</a>
            </li>
            <li class="px-3 py-2 text-gray-600 hover:text-black">
              <a href="https://clusters.tw/explore">全站探索</a>
            </li>
          </ul>
        </div>
        <!-- mobile right -->
        <div class="flex items-center xl:hidden space-x-4">
          <button type="button">
            <img src="@/assets/search.svg" class="w-5 h-5" alt="Search" />
          </button>
          <button type="button">
            <img src="@/assets/alarm.svg" class="w-8 h-8" alt="Alarm" />
          </button>
        </div>
        <!-- PC right -->
        <div class="items-center hidden xl:flex">
          <div class="bg-gray-100 flex mr-5 px-3 py-2 w-[9.5rem]">
            <button @click="search">
              <img src="@/assets/search.svg" alt="Search" class="mr-2" />
            </button>
            <input
              type="text"
              class="w-full text-xs bg-transparent focus:outline-none"
              placeholder="請輸入關鍵字"
              @keydown.enter="search"
              v-model="searchKeyWord"
            />
          </div>
          <button type="button" class="mr-3">
            <img src="@/assets/alarm.svg" alt="Alarm" class="w-8 h-8" />
          </button>
          <button
            type="button"
            class="bg-[#3892d3] border-[#3892d3] mb-1 px-4 py-2 text-sm text-white justify-center items-center rounded-full border hover:bg-[#013c85] hover:border-[#013c85] duration-300"
            @click="publish"
          >
            發布
          </button>
          <button class="ml-5 mb-1">
            <div class="h-10 w-10 rounded-full"></div>
          </button>
        </div>
      </div>
    </div>
    <!-- mobile search bar -->
    <div class="container mx-auto px-4 md:px-6 pb-2 -pt-1 xl:hidden">
      <div class="flex px-3 py-2 bg-gray-100 rounded">
        <button @click="search">
          <img src="@/assets/search.svg" alt="Search" class="mr-2" />
        </button>
        <input
          type="text"
          class="w-full text-xs bg-transparent focus:outline-none"
          placeholder="請輸入關鍵字"
          @keydown.enter="search"
          v-model="searchKeyWord"
        />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const open = ref(false)
const toggle = () => {
  open.value = !open.value
  console.log(open.value)
}

const searchKeyWord = ref('')
const search = () => {
  console.log('search:', searchKeyWord.value)
}

const publish = () => {
  console.log('publish')
}
</script>
