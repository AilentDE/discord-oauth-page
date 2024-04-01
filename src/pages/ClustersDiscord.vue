<template>
  <div class="bg-gray-100 min-h-screen mb-auto mt-12 xl:mt-16">
    <div class="container flex flex-col pt-8 md:pt-12 pb-18 md:pb-23 items-center justify-center">
      <base-card>
        <h1 class="text-xl md:text-3xl font-bold text-center mb-8">Discord</h1>
        <div class="flex flex-col space-y-4">
          <h2 class="text-lg md:text-2xl font-bold text-center line-clamp-1">
            Hi! {{ authStore.discordUser.global_name }}
          </h2>
          <img
            v-if="authStore.discordAvatarUrl"
            :src="authStore.discordAvatarUrl"
            alt="avatar"
            class="size-20 md:size-40 mx-auto rounded-full border-2 md:border-4 shrink-0"
            :class="authStore.discordAvatarBorderColor"
          />
          <div
            v-else
            class="animate-pulse size-20 md:size-40 mx-auto rounded-full border-2 md:border-4 shrink-0 bg-gray-600"
            :class="authStore.discordAvatarBorderColor"
          ></div>
        </div>
      </base-card>
      <TierRole :tierRoleData="tierRoleData" :isCreator="isCreator"></TierRole>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, computed } from 'vue'
import TierRole from '@/components/TierRole.vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import axiosInstance from '@/utils/requests'
import { changeMetaTags } from '@/utils/seo'
import { setUser } from '@/utils/indexddb'
changeMetaTags({ title: 'Discord身分組管理' })

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()
const isCreator = computed(() => {
  if (authStore.clustersUser.creatorFields && authStore.clustersUser.creatorFields.length > 0) {
    return true
  } else {
    return false
  }
})

const tierRoleData = reactive({})

onMounted(async () => {
  await router.isReady()
  const apiClient = await axiosInstance()
  try {
    const response = await apiClient.post('/session/discord', route.query)
    await setUser('accessToken', response.data.accessToken)
    authStore.setDiscordUser(response.data.discordUser)
    await setUser('discordUser', response.data.discordUser)
  } catch (error) {
    console.log(error.response.data.message || '無效的授權')
  }
  try {
    const apiClient = await axiosInstance()
    const response = await apiClient.get('/discord/tierRole')
    Object.assign(tierRoleData, response.data)
  } catch (error) {
    console.log(error.response.data.message || '身分組設定更新失敗')
  }
})
</script>
