<template>
  <AppHeader />
  <AppDialog class="sticky top-14 xl:top-17 z-40" />
  <router-view />
</template>

<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './components/layout/AppHeader.vue'
import AppDialog from './components/layout/AppDialog.vue'
import { useAuthStore } from './stores/auth'

const authStore = useAuthStore()

const loginCheck = () => {
  const clustersUserData = localStorage.getItem('clustersUserData')
  const discordUserData = localStorage.getItem('discordUserData')

  if (clustersUserData && discordUserData) {
    authStore.setClustersUser(clustersUserData)
    authStore.setDiscordUser(discordUserData)
  } else {
    console.log('This user have no userData.')
  }
}
loginCheck()
</script>
