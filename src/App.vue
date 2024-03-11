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
  const clustersUserData = localStorage.clustersUser
  const discordUserData = localStorage.discordUser
  if (clustersUserData && discordUserData) {
    authStore.setClustersUser(JSON.parse(clustersUserData))
    authStore.setDiscordUser(JSON.parse(discordUserData))
  } else {
    console.log('This user have no userData.')
  }
}
loginCheck()
</script>
