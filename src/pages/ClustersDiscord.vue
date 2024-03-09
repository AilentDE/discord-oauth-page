<template>
  <div class="bg-gray-100 mb-auto mt-12 xl:mt-16">
    <div class="container flex flex-col pt-8 md:pt-12 pb-18 md:pb-23 items-center justify-center">
      <base-card>
        <h1 class="text-xl md:text-3xl font-bold text-center mb-8">Discord</h1>
        <div class="flex flex-col space-y-4">
          <h2 class="text-lg md:text-2xl font-bold text-center line-clamp-1">
            Hi! {{ authStore.discordUser.global_name }}
          </h2>
          <img
            v-if="authStore.avatarUrl"
            :src="authStore.avatarUrl"
            alt="avatar"
            class="size-20 md:size-40 mx-auto rounded-full border-2 md:border-4 shrink-0"
            :class="authStore.avatarBorderColor"
          />
          <div
            v-else
            class="animate-pulse size-20 md:size-40 mx-auto rounded-full border-2 md:border-4 shrink-0 bg-gray-600"
            :class="authStore.avatarBorderColor"
          ></div>
        </div>
      </base-card>
      <TierRole></TierRole>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import TierRole from '@/components/TierRole.vue'
import { changeMetaTags } from '@/utils/seo'
changeMetaTags({ title: 'Discord身分組管理' })

const authStore = useAuthStore()
</script>
