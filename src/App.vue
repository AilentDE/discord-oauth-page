<template>
  <AppHeader />
  <AppDialog class="sticky top-14 xl:top-17 z-40" />
  <router-view />
</template>

<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './components/layout/AppHeader.vue'
import AppDialog from './components/layout/AppDialog.vue'
</script>
