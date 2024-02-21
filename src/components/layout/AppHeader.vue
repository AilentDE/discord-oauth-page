<template>
  <header class="fixed w-full left-0 top-0 right-0 z-50 bg-white shadow-sm">
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
              <IconDiscord class="fill-[#5562EA]" />
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
        <!-- right mobile -->
        <div class="flex items-center xl:hidden space-x-4">
          <button type="button" @click.prevent="toggleSubBar('search')">
            <IconSearch class="w-5 h-5 mr-2 fill-[#BDBDBD] hover:fill-gray-500" />
          </button>
          <button type="button">
            <IconAlarm class="w-8 h-8 fill-[#BDBDBD] hover:fill-gray-500" />
          </button>
        </div>
        <!-- right PC -->
        <div class="items-center hidden xl:flex">
          <div class="bg-gray-100 flex mr-5 px-3 py-2 w-[9.5rem]">
            <button @click="search">
              <IconSearch class="mr-2 fill-[#BDBDBD] hover:fill-gray-500" />
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
            <IconAlarm class="w-8 h-8 fill-[#BDBDBD] hover:fill-gray-500" />
          </button>
          <button
            type="button"
            class="bg-[#3892d3] border-[#3892d3] mb-1 px-4 py-2 text-sm text-white justify-center items-center rounded-full border hover:bg-[#013c85] hover:border-[#013c85] duration-300"
            @click="publish"
          >
            發布
          </button>
          <button class="ml-5 mb-1">
            <div class="h-10 w-10 rounded-full bg-gray-600"></div>
          </button>
        </div>
      </div>
    </div>
    <!-- mobile search bar -->
    <div
      class="container mx-auto px-4 md:px-6 pb-2 -pt-1 xl:hidden"
      v-show="showSubBar === 'search'"
    >
      <div class="flex px-3 py-2 bg-gray-100 rounded">
        <button @click="search">
          <IconSearch class="mr-2 fill-[#BDBDBD] hover:fill-gray-500" />
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
import IconDiscord from '@/components/icons/IconDiscord.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import IconAlarm from '@/components/icons/IconAlarm.vue'

const open = ref(false)
const toggle = () => {
  open.value = !open.value
  console.log(open.value)
}

const showSubBar = ref(null)
const toggleSubBar = (val) => {
  if (showSubBar.value == val) {
    showSubBar.value = null
  } else {
    showSubBar.value = val
  }
}

const searchKeyWord = ref('')
const search = () => {
  if (searchKeyWord.value != '') {
    console.log('search:', searchKeyWord.value)
  }
}

const publish = () => {
  console.log('publish')
}
</script>
