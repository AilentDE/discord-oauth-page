<template>
  <AppHeader />
  <AppDialog class="sticky top-14 xl:top-17 z-40" />
  <router-view />
</template>

<script setup>
import AppHeader from './components/layout/AppHeader.vue'
import AppDialog from './components/layout/AppDialog.vue'
import { useAuthStore } from './stores/auth'
import { getUser } from './utils/indexddb'

const authStore = useAuthStore()

const loginCheck = async () => {
  const clustersUserData = await getUser('clustersUser')
  const discordUserData = await getUser(  'discordUser')
  if (clustersUserData && discordUserData) {
    authStore.setClustersUser(clustersUserData)
    authStore.setDiscordUser(discordUserData)
  } else {
    console.log('This user have no userData.')
  }
}
loginCheck()
</script>
