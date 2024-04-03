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
          <a :href="clustersUrl" class="flex items-center relative">
            <img class="w-24 xl:w-40" src="@/assets/logo.svg" alt="Logo" />
            <div class="absolute -right-1 -top-2 size-4">
              <IconDiscord class="fill-[#5562EA]" />
            </div>
          </a>
          <ul class="ml-6 items-center hidden xl:flex">
            <li class="px-3 py-2 text-gray hover:text-black">
              <a :href="clustersUrl">首頁</a>
            </li>
            <li class="px-3 py-2 text-gray hover:text-black">
              <a :href="clustersUrl + '/explore'">全站探索</a>
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
            <button
              type="button"
              class="mr-3"
              @click.prevent="toggleSubBar('notificationBar')"
              @blur="toggleSubBar(null)"
            >
              <IconAlarm class="size-8 fill-[#BDBDBD] hover:fill-gray-500" />
            </button>
            <div
              class="absolute left-auto right-0 top-full w-80 rounded-xl border border-gray-lighter bg-white shadow-sm container text-sm"
              v-show="showSubBar === 'notificationBar'"
            >
              <div class="flex justify-between">
                <div class="py-2 font-medium text-left">通知停用中</div>
              </div>
            </div>
          </div>
          <div class="relative" v-if="authStore.clustersUser.creatorFields?.length > 0">
            <button
              type="button"
              class="bg-primary border-primary mb-1 px-4 py-2 text-sm text-white justify-center items-center rounded-full border hover:bg-primary-dark hover:border-primary-dark duration-300"
              @click.prevent="toggleSubBar('publish')"
            >
              發布
            </button>
            <div
              class="absolute -left-8 top-full w-40 py-3 flex flex-col rounded-xl border border-gray-lighter bg-white shadow-sm"
              v-show="showSubBar === 'publish'"
            >
              <div class="divide-y devide-gray-lighter space-y-2">
                <ul class="text-gray text-sm">
                  <li
                    v-for="field in authStore.clustersUser.creatorFields"
                    :key="field"
                    class="py-3 px-4 hover:text-black"
                  >
                    <a :href="clustersUrl + '/creator-posts/new?creatorField=' + field">{{
                      creatorField(field)
                    }}</a>
                  </li>
                </ul>
                <ul class="text-gray text-sm">
                  <li class="py-3 px-4 hover:text-black">
                    <a :href="clustersUrl + '/add-creator-field'">新增創作領域</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="relative ml-5">
            <button
              class="size-10 rounded-full bg-gray-600 border-none"
              :class="authStore.clustersUser.id ? '' : 'animate-pulse'"
              @click.prevent="toggleSubBar('sideBar')"
            >
              <img
                v-if="authStore.clustersUser.avatarAssetId"
                class="size-10 rounded-full shrink-0"
                :src="authStore.clustersAvatarUrl"
                alt="avatar"
              />
              <img
                v-else-if="authStore.clustersUser.id"
                class="size-10 rounded-full shrink-0"
                src="@/assets/default-avatar.jpg"
                alt="avatar"
              />
            </button>
            <div
              class="absolute right-0 top-full w-54 rounded-xl border border-gray-lighter bg-white shadow-sm"
              v-show="showSubBar === 'sideBar'"
            >
              <div
                class="flex items-center space-x-1 px-3 py-2"
                :class="authStore.clustersUser.id ? '' : 'animate-pulse'"
              >
                <img
                  v-if="authStore.clustersUser.avatarAssetId"
                  class="size-10 rounded-full shrink-0"
                  :src="authStore.clustersAvatarUrl"
                  alt="avatar"
                />
                <img
                  v-else-if="authStore.clustersUser.id"
                  class="size-10 rounded-full shrink-0"
                  src="@/assets/default-avatar.jpg"
                  alt="avatar"
                />
                <div v-else class="size-10 rounded-full bg-gray-600 shrink-0"></div>
                <div class="font-bold line-clamp-1">
                  {{ authStore.clustersUser.displayName || 'User Name' }}
                </div>
              </div>
              <div class="px-4 py-2">
                <div class="divide-y devide-gray-lighter">
                  <ul class="text-gray text-sm">
                    <li class="py-3 hover:text-black"><a :href="clustersUrl">首頁</a></li>
                    <li
                      v-if="authStore.clustersUser.creatorFields?.length > 0"
                      class="py-3 hover:text-black"
                    >
                      <a :href="`${clustersUrl}/profile/${authStore.clustersUser.id}/works`"
                        >我的創作者頁面</a
                      >
                    </li>
                  </ul>
                  <ul class="text-gray text-sm">
                    <li class="py-3 hover:text-black">
                      <a :href="clustersUrl + '/admin/profile/me'">個人檔案</a>
                    </li>
                    <li class="py-3 hover:text-black">
                      <a :href="clustersUrl + '/admin/subscription'">訂閱管理</a>
                    </li>
                    <li class="py-3 hover:text-black">
                      <a :href="clustersUrl + '/my-project-participations'">企劃管理</a>
                    </li>
                    <li class="py-3 hover:text-black">
                      <a :href="clustersUrl + '/admin/orders'">訂單管理</a>
                    </li>
                    <li
                      v-if="authStore.clustersUser.creatorFields?.length > 0"
                      class="py-3 hover:text-black"
                    >
                      <a :href="clustersUrl + '/admin/receivables'">金流管理</a>
                    </li>
                  </ul>
                  <ul
                    v-if="authStore.clustersUser.creatorFields?.length === 0"
                    class="text-gray text-sm"
                  >
                    <li class="py-3 hover:text-black">
                      <a :href="clustersUrl + '/register-as-creator'">成為創作者</a>
                    </li>
                  </ul>
                  <ul class="text-gray text-sm">
                    <li class="py-3 hover:text-black"><a :href="clustersUrl">返回</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- mobile search bar -->
    <Search
      :show="showSubBar === 'searchBar'"
      :search="search"
      :searchKeyWord="searchKeyWord"
      @updateKeyWord="updateSearchKeyWord"
    ></Search>
  </header>
  <!-- mobile side bar -->
  <SideBar
    :show="showSubBar === 'sideBar'"
    :userData="authStore.clustersUser"
    :avatarUrl="authStore.clustersAvatarUrl"
  ></SideBar>
  <!-- mobile notification bar -->
  <Notification :show="showSubBar === 'notificationBar'"></Notification>
  <!-- bar background -->
  <Background :show="!!showSubBar" :toggleSubBar="toggleSubBar"></Background>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import IconDiscord from '@/components/icons/IconDiscord.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import IconAlarm from '@/components/icons/IconAlarm.vue'

import SideBar from '@/components/layout/MobileBars/SideBar.vue'
import Search from './MobileBars/Search.vue'
import Notification from '@/components/layout/MobileBars/Notification.vue'
import Background from '@/components/layout/MobileBars/Background.vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import axiosInstance from '@/utils/requests'
import creatorField from '@/utils/creatorFieldTranslate'
import { setUser } from '@/utils/indexddb'
import qs from 'qs'

const clustersUrl = ref(import.meta.env.VITE_CLUSTERS_URL)

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()

const showSubBar = ref(null)
const toggleSubBar = (val) => {
  if (showSubBar.value == val) {
    showSubBar.value = null
  } else {
    showSubBar.value = val
  }
}

const searchKeyWord = ref('')
const updateSearchKeyWord = (data) => {
  searchKeyWord.value = data
}
const search = () => {
  if (searchKeyWord.value != '') {
    const params = qs.stringify({ q: searchKeyWord.value }, { addQueryPrefix: true })
    location.href = `${clustersUrl.value}/search${params}`
  }
}

onMounted(async () => {
  await router.isReady()
  const apiClient = await axiosInstance()
  try {
    const response = await apiClient.post('/session/clusters', route.query)
    authStore.setClustersUser(response.data.clustersUser)
    await setUser('clustersUser', response.data.clustersUser)
  } catch (error) {
    console.log(error.response.data.message || '登入錯誤')
  }
})
</script>
