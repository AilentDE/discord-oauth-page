<template>
  <header class="fixed w-full left-0 top-0 right-0 z-50 bg-white shadow-sm">
    <!-- main -->
    <div class="container py-3">
      <div class="flex items-center justify-between w-full xl:w-auto">
        <!-- left -->
        <div class="flex items-center">
          <button type="button" @click.prevent="toggleSubBar('sideBar')">
            <img class="mr-3 xl:hidden" src="@/assets/hamburger.svg" alt="Menu" />
          </button>
          <a href="https://clusters.tw/" class="flex items-center relative">
            <img class="w-24 xl:w-40" src="@/assets/logo.svg" alt="Logo" />
            <div class="absolute -right-1 -top-2 size-4">
              <IconDiscord class="fill-[#5562EA]" />
            </div>
          </a>
          <ul class="ml-6 items-center hidden xl:flex">
            <li class="px-3 py-2 text-gray hover:text-black">
              <a href="https://clusters.tw/">首頁</a>
            </li>
            <li class="px-3 py-2 text-gray hover:text-black">
              <a href="https://clusters.tw/explore">全站探索</a>
            </li>
          </ul>
        </div>
        <!-- right mobile -->
        <div class="flex items-center xl:hidden space-x-4">
          <button type="button" @click.prevent="toggleSubBar('searchBar')">
            <IconSearch class="size-5 mr-2 fill-[#BDBDBD] hover:fill-gray-500" />
          </button>
          <button type="button" @click.prevent="toggleSubBar('notificationBar')">
            <IconAlarm class="size-8 fill-[#BDBDBD] hover:fill-gray-500" />
          </button>
        </div>
        <!-- right PC -->
        <div class="items-center hidden xl:flex">
          <div class="bg-primary-lighter flex mr-5 px-3 py-2 w-[9.5rem]">
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
          <div class="relative">
            <button type="button" class="mr-3" @click.prevent="toggleSubBar('notificationBar')" @blur="toggleSubBar(null)">
              <IconAlarm class="size-8 fill-[#BDBDBD] hover:fill-gray-500" />
            </button>
            <div class="absolute left-auto right-0 top-full w-80 rounded-xl border border-gray-lighter bg-white shadow-sm container text-sm" v-show="showSubBar === 'notificationBar'">
              <div class="flex justify-between">
                <div class="py-2 font-medium text-left">通知停用中</div>
              </div>
            </div>
          </div>
          <div class="relative">
            <button
              type="button"
              class="bg-primary border-primary mb-1 px-4 py-2 text-sm text-white justify-center items-center rounded-full border hover:bg-primary-dark hover:border-primary-dark duration-300"
              @click.prevent="toggleSubBar('publish')"
              @blur="toggleSubBar(null)"
            >
              發布
            </button>
            <div class="absolute -left-8 top-full w-40 py-3 flex flex-col rounded-xl border border-gray-lighter bg-white shadow-sm" v-show="showSubBar === 'publish'">
              <div class="divide-y devide-gray-lighter space-y-2">
                  <ul class="text-gray text-sm">
                    <li class="py-3 px-4 hover:text-black">插畫</li>
                    <li class="py-3 px-4 hover:text-black">Cosplay</li>
                    <li class="py-3 px-4 hover:text-black">聲音創作</li>
                  </ul>
                  <ul class="text-gray text-sm">
                    <li class="py-3 px-4 hover:text-black">新增創作領域</li>
                  </ul>
                </div>
            </div>
          </div>
          <div class="relative ml-5">
            <button class="size-10 rounded-full bg-gray-600 border-none" @click.prevent="toggleSubBar('sideBar')" @blur="toggleSubBar(null)"></button>
            <div class="absolute right-0 top-full w-54 rounded-xl border border-gray-lighter bg-white shadow-sm" v-show="showSubBar === 'sideBar'">
              <div class="flex items-center space-x-1 px-3 py-2">
                <div class="size-10 rounded-full bg-gray-600 shrink-0"></div>
                <div class="font-bold line-clamp-1">User Name</div>
              </div>
              <div class="px-4 py-2">
                <div class="divide-y devide-gray-lighter">
                  <ul class="text-gray text-sm">
                    <li class="py-3 hover:text-black">首頁</li>
                    <li class="py-3 hover:text-black">我的創作者頁面</li>
                  </ul>
                  <ul class="text-gray text-sm">
                    <li class="py-3 hover:text-black">個人檔案</li>
                    <li class="py-3 hover:text-black">訂閱管理</li>
                    <li class="py-3 hover:text-black">企劃管理</li>
                    <li class="py-3 hover:text-black">訂單管理</li>
                    <li class="py-3 hover:text-black">金流管理</li>
                  </ul>
                  <ul class="text-gray text-sm">
                    <li class="py-3 hover:text-black">返回</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- mobile search bar -->
    <div class="container pb-2 -pt-1 xl:hidden" v-show="showSubBar === 'searchBar'">
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
  <!-- mobile side bar -->
  <div
    class="fixed top-12 bottom-0 left-0 z-30 bg-white shadow-sm w-54 py-4 xl:hidden"
    v-show="showSubBar === 'sideBar'"
  >
    <div class="animate-pulse flex items-center space-x-1 px-3 py-2">
      <div class="size-10 rounded-full bg-gray-600 shrink-0"></div>
      <div class="font-bold line-clamp-1">User Name</div>
    </div>
    <div class="py-2 px-4">
      <button
        type="button"
        class="bg-primary border-primary mb-1 px-4 py-2 text-sm text-white justify-center items-center rounded-full w-full border hover:bg-primary-dark hover:border-primary-dark duration-300"
        @click="publish"
      >
        發布
      </button>
      <div class="divide-y devide-gray-lighter">
        <ul class="text-gray text-sm">
          <li class="py-3 hover:text-black">首頁</li>
          <li class="py-3 hover:text-black">全站探索</li>
          <li class="py-3 hover:text-black">我的創作者頁面</li>
        </ul>
        <ul class="text-gray text-sm">
          <li class="py-3 hover:text-black">個人檔案</li>
          <li class="py-3 hover:text-black">訂閱管理</li>
          <li class="py-3 hover:text-black">企劃管理</li>
          <li class="py-3 hover:text-black">訂單管理</li>
          <li class="py-3 hover:text-black">金流管理</li>
        </ul>
        <ul class="text-gray text-sm">
          <li class="py-3 hover:text-black">返回</li>
        </ul>
      </div>
    </div>
  </div>
  <!-- mobile notification bar -->
  <div
    class="fixed top-12 bottom-0 right-0 z-30 bg-white shadow-sm w-60 py-4 text-sm xl:hidden"
    v-show="showSubBar === 'notificationBar'"
  >
    <div class="container">
      <div class="flex justify-between">
        <div class="py-2 font-medium text-left">通知停用中</div>
      </div>
    </div>
  </div>
  <!-- bar background -->
  <div
    class="fixed inset-0 z-20 bg-black bg-opacity-50 xl:hidden"
    v-show="!!showSubBar"
    @click.prevent="toggleSubBar(null)"
  ></div>
</template>

<script setup>
import { ref } from 'vue'
import IconDiscord from '@/components/icons/IconDiscord.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import IconAlarm from '@/components/icons/IconAlarm.vue'

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
