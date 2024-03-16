<template>
  <transition name="dialog">
    <dialog
      open
      v-if="dialogStore.showMsg"
      class="w-full flex justify-between items-center px-4 xl:px-8 py-1 min-h-10"
      :class="dialogStore.msg.style"
    >
      <p class="font-extrabold text-black-800">{{ dialogStore.msg.content }}</p>
      <IconClose class="cursor-pointer fill-black" @click="dialogStore.closeDialog"></IconClose>
    </dialog>
  </transition>
</template>

<script setup>
import IconClose from '../icons/IconClose.vue'

import { useDialogStore } from '@/stores/dialog'

const dialogStore = useDialogStore()
</script>

<style scoped>
.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.dialog-enter-active {
  transition: all 0.2s ease-out;
}
.dialog-leave-active {
  transition: all 0.2s ease-in;
}

.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: translateY(0px);
}
</style>
