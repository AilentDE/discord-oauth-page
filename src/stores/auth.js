import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const clustersUser = reactive({})
  const discordUser = reactive({})

  const setClustersUser = (clustersUserData) => {
    Object.assign(clustersUser, clustersUserData)
    console.log('成功設定clusters使用者')
  }
  const clustersAvatarUrl = computed(() => {
    if (clustersUser.id && clustersUser.avatarAssetId) {
      const avatarHost = import.meta.env.VITE_API_BASE_URL
      return `${avatarHost}/aws/presignedUrl/file/${clustersUser.id}/${clustersUser.avatarAssetId}`
    } else if (clustersUser.id) {
      return '@/assets/default-avatar.jpg'
    } else {
      return null
    }
  })

  const setDiscordUser = (discordUserData) => {
    Object.assign(discordUser, discordUserData)
    console.log('成功設定discord使用者')
  }
  const discordAvatarUrl = computed(() => {
    if (discordUser.id && discordUser.avatar) {
      return `https://cdn.discordapp.com/avatars/${discordUser.id}/${discordUser.avatar}.png`
    } else {
      return false
    }
  })
  const discordAvatarBorderColor = computed(() => {
    if (discordUser.banner_color) {
      return `border-[${discordUser.banner_color}]`
    } else {
      return 'border-gray-600'
    }
  })

  return {
    setClustersUser,
    clustersUser,
    clustersAvatarUrl,
    setDiscordUser,
    discordUser,
    discordAvatarUrl,
    discordAvatarBorderColor
  }
})
