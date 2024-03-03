<template>
  <teleport to="body">
    <transition name="fade">
      <dialog open v-if="show">
        <div class="fixed inset-0 bg-black bg-opacity-50 pt-10 z-50">
          <div class="container flex justify-center items-center">
            <div class="relative w-full md:w-[40rem] px-4 py-6 md:p-8 bg-white rounded-xl">
              <div class="mx-6 mb-8 text-xl md:text-2xl text-center font-medium">{{ title }}</div>
              <IconClose
                class="cursor-pointer absolute right-4 top-6 md:right-8 md:top-8"
                @click="emits('close')"
              />
              <slot></slot>
            </div>
          </div>
        </div>
      </dialog>
    </transition>
  </teleport>
</template>

<script setup>
import IconClose from '@/components/icons/IconClose.vue'
const props = defineProps({
  show: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    required: false
  }
})
const emits = defineEmits(['close'])
</script>

<!-- <style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.fade-enter-active {
  transition: all 0.2s ease-out;
}
.fade-leave-active {
  transition: all 0.2s ease-in;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style> -->
