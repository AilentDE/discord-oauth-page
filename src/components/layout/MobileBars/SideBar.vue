<template>
  <div
    class="fixed top-12 bottom-0 left-0 z-30 bg-white shadow-sm w-54 py-4 xl:hidden"
    v-show="show"
  >
    <div
      class="flex items-center space-x-1 px-3 py-2"
      :class="userData.avatarAssetId ? '' : 'animate-pulse'"
    >
      <img
        v-if="userData.avatarAssetId"
        class="size-10 rounded-full shrink-0"
        :src="avatarUrl"
        alt="avatar"
      />
      <div v-else class="size-10 rounded-full bg-gray-600 shrink-0"></div>
      <div class="font-bold line-clamp-1">{{ userData.displayName || 'User Name' }}</div>
    </div>
    <div class="py-2 px-4">
      <button
        v-if="userData.creatorFields?.length > 0"
        type="button"
        class="bg-primary border-primary mb-1 px-4 py-2 text-sm text-white justify-center items-center rounded-full w-full border hover:bg-primary-dark hover:border-primary-dark duration-300"
        @click="sidePublish"
      >
        發布
      </button>
      <base-dialog :show="showDialog" title="選擇創作領域" @close="handleDialog">
        <div class="flex flex-col justify-center">
          <div class="flex flex-row flex-wrap pb-6 gap-x-4 justify-center">
            <div
              v-for="field in userData.creatorFields"
              :key="field"
              class="inline-flex size-18 bg-gray-lightest rounded-lg justify-center items-center text-xs text-gray-darker"
            >
              {{ creatorField(field) }}
            </div>
          </div>
          <div class="border-b border-gray-lighter my-2 px-3"></div>
          <div class="py-3 px-4 text-sm text-gray-darker">新增創作領域</div>
        </div>
      </base-dialog>
      <div class="divide-y devide-gray-lighter">
        <ul class="text-gray text-sm">
          <li class="py-3 hover:text-black"><a :href="clustersUrl">首頁</a></li>
          <li class="py-3 hover:text-black"><a :href="clustersUrl + '/explore'">全站探索</a></li>
          <li v-if="userData.creatorFields?.length > 0" class="py-3 hover:text-black">
            <a :href="`${clustersUrl}/profile/${userData.id}/works`">我的創作者頁面</a>
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
          <li v-if="userData.creatorFields?.length > 0" class="py-3 hover:text-black">
            <a :href="clustersUrl + '/admin/receivables'">金流管理</a>
          </li>
        </ul>
        <ul v-if="userData.creatorFields?.length === 0" class="text-gray text-sm">
          <li class="py-3 hover:text-black">成為創作者</li>
        </ul>
        <ul class="text-gray text-sm">
          <li class="py-3 hover:text-black"><a :href="clustersUrl">返回</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import creatorField from '@/utils/creatorFieldTranslate'

const clustersUrl = ref(import.meta.env.VITE_CLUSTERS_URL)

const props = defineProps({
  show: {
    type: Boolean,
    required: true
  },
  userData: {
    type: Object,
    required: false
  },
  avatarUrl: {
    type: String,
    required: false
  }
})

const showDialog = ref(false)
const handleDialog = () => {
  showDialog.value = false
}
const sidePublish = () => {
  showDialog.value = true
}
</script>
