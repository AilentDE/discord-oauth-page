<template>
  <div
    class="fixed top-12 bottom-0 right-0 z-30 bg-white shadow-sm w-60 py-4 text-sm xl:hidden"
    v-show="show"
  >
    <div class="container">
      <div class="flex justify-between">
        <div class="py-2 font-medium text-left">通知停用中</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    required: true
  }
})
</script>
