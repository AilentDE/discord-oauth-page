<template>
  <div
    class="fixed top-12 bottom-0 left-0 z-30 bg-white shadow-sm w-54 py-4 xl:hidden"
    v-show="show"
  >
    <div class="animate-pulse flex items-center space-x-1 px-3 py-2">
      <div class="size-10 rounded-full bg-gray-600 shrink-0"></div>
      <div class="font-bold line-clamp-1">User Name</div>
    </div>
    <div class="py-2 px-4">
      <button
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
              class="inline-flex size-18 bg-gray-lightest rounded-lg justify-center items-center text-xs text-gray-darker"
            >
              聲音創作
            </div>
            <div
              class="inline-flex size-18 bg-gray-lightest rounded-lg justify-center items-center text-xs text-gray-darker"
            >
              插畫
            </div>
            <div
              class="inline-flex size-18 bg-gray-lightest rounded-lg justify-center items-center text-xs text-gray-darker"
            >
              COSPLAY
            </div>
          </div>
          <div class="border-b border-gray-lighter my-2 px-3"></div>
          <div class="py-3 px-4 text-sm text-gray-darker">新增創作領域</div>
        </div>
      </base-dialog>
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
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  show: {
    type: Boolean,
    required: true
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
