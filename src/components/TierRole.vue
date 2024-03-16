<template>
  <base-card>
    <div v-if="showGuild">
      <h2 class="px-16 mb-8 text-lg md:text-2xl font-bold text-center line-clamp-1">
        你已完成Discord帳號綁定
      </h2>
      <div class="w-full flex items-center justify-center">
        <div
          class="w-full flex flex-col-reverse md:flex-row md:space-x-12 items-center justify-center"
        >
          <button
            class="w-full md:w-1/3 bg-white border-primary my-2 px-4 py-2 text-sm text-primary justify-center items-center rounded-full border hover:bg-gray-lighter duration-300"
            @click="cancel"
          >
            返回Clusters
          </button>
          <a
            v-if="isCreator && tierRoleData.redirectURL"
            class="w-full md:w-1/3 bg-primary border-primary my-2 px-4 py-2 text-sm text-white justify-center items-center rounded-full border hover:bg-primary-dark hover:border-primary-dark duration-300 text-center"
            :href="tierRoleData.redirectURL"
          >
            綁定我的伺服器
          </a>
        </div>
      </div>
    </div>
    <div v-else>
      <h2
        v-if="tierRoleData.guild?.name"
        class="px-16 mb-8 text-lg md:text-2xl font-bold text-center line-clamp-1"
      >
        {{ tierRoleData.guild.name }}
      </h2>
      <h2 v-else class="px-16 mb-8 text-lg md:text-2xl font-bold text-center line-clamp-1">
        <div class="flex items-center justify-center">
          正在載入伺服器資訊... <IconSpinner class="animate-spin size-5 m-2"></IconSpinner>
        </div>
      </h2>
      <div class="overflow-x-auto border border-l-gray-lighter rounded-xl mb-4">
        <div
          class="flex flex-wrap items-center justify-between text-gray text-base font-bold bg-primary-light min-h-9 min-w-fit p-2"
        >
          <div class="pl-3 shrink-0 w-72 line-clamp-1">方案名稱</div>
          <div class="pl-3 shrink-0 w-20 line-clamp-1">$價格</div>
          <div class="pl-3 shrink-0 w-40 line-clamp-1">Discord身分組</div>
        </div>
        <div
          class="flex flex-wrap items-center justify-between text-sm min-h-16 min-w-fit p-2"
          v-for="tier in tierRoleData.tiers"
          :key="tier.tierID"
        >
          <div class="pl-3 shrink-0 w-72 line-clamp-1" :class="tierType(tier.isAddon)">
            {{ tier.tierName }}
          </div>
          <div class="pl-3 shrink-0 w-20 line-clamp-1">{{ tier.price }}</div>
          <div class="pl-3 shrink-0 w-40 line-clamp-1">
            <select
              v-model="selected[tier.tierID]"
              class="border border-primary rounded-lg bg-primary-lighter"
            >
              <option v-for="role in tierRoleData.guild.roles" :value="role.id" :key="role.id">
                {{ role.name == '@everyone' ? '' : role.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div v-if="tierRoleData.guild?.name" class="w-full flex items-center justify-center">
        <div
          class="w-full flex flex-col-reverse md:flex-row md:space-x-12 items-center justify-center"
        >
          <button
            class="w-full md:w-1/3 bg-white border-primary my-2 px-4 py-2 text-sm text-primary justify-center items-center rounded-full border hover:bg-gray-lighter duration-300"
            @click="cancel"
          >
            返回Clusters
          </button>
          <button
            class="w-full md:w-1/3 bg-primary border-primary my-2 px-4 py-2 text-sm text-white justify-center items-center rounded-full border hover:bg-primary-dark hover:border-primary-dark duration-300"
            type="button"
            @click="updateTierRole"
          >
            確定
          </button>
        </div>
      </div>
    </div>
  </base-card>
</template>

<script setup>
import IconSpinner from './icons/IconSpinner.vue'

import axiosInstance from '@/utils/requests'
import { computed, reactive, watch } from 'vue'
import { useDialogStore } from '@/stores/dialog'

const dialogStore = useDialogStore()

const props = defineProps({
  tierRoleData: {
    type: Object,
    required: true
  },
  isCreator: {
    type: Boolean,
    required: true
  }
})

const tierType = (isAddon) => {
  const baseStyle = 'before:px-1 before:py-0.5 before:mr-1 before:rounded before:mr-0.5 '
  if (isAddon) {
    return baseStyle + "before:content-['進階'] before:text-[#ff7E07] before:bg-[#f5f0e8]"
  } else {
    return baseStyle + "before:content-['標準'] before:text-[#4caf50] before:bg-[#e8f5e9]"
  }
}

const showGuild = computed(() => {
  if (props.tierRoleData.guild && Object.keys(props.tierRoleData.guild).length === 0) {
    return true
  } else {
    return false
  }
})

const selected = reactive({})
watch(props.tierRoleData, (newVal) => {
  Object.assign(selected, newVal.tierRole)
})
const cancel = () => {
  location.href = 'https://clusters.tw'
}
const updateTierRole = async (event) => {
  event.target.disabled = true

  const baseRole = props.tierRoleData.guild.roles.filter((role) => role.name == '@everyone')
  let asArray = Object.entries(selected)
  let filtered = asArray.filter(([key, value]) => value != baseRole[0].id)
  let filteredSelected = Object.fromEntries(filtered)

  const apiClient = await axiosInstance()
  try {
    const response = await apiClient.put('/discord/tierRole', filteredSelected)
    dialogStore.setMsg(response.data.message, 'bg-green-400 bg-opacity-50')
  } catch (error) {
    dialogStore.setMsg(error.response?.data?.detail || 'error', 'bg-red-400 bg-opacity-90')
  }
  event.target.disabled = false
}
</script>
