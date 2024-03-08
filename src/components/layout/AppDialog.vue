<template>
  <transition name="dialog">
    <dialog
      open
      v-if="showDialog"
      class="w-full flex justify-between items-center px-4 xl:px-8 py-1 min-h-10 bg-red-400 bg-opacity-90"
    >
      <p class="font-extrabold text-black-800">content</p>
      <IconClose class="cursor-pointer fill-black" @click="closeDialog"></IconClose>
    </dialog>
  </transition>
</template>

<script setup>
import { ref } from 'vue'
import IconClose from '../icons/IconClose.vue'

const showDialog = ref(true)
const closeDialog = () => {
  showDialog.value = false
}
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
