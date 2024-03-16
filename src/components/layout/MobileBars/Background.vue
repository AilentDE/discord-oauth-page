<template>
  <div
    class="fixed inset-0 z-20 bg-black bg-opacity-50 xl:bg-transparent"
    v-show="show"
    @click.prevent="toggleSubBar(null)"
  ></div>
</template>

<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    required: true
  },
  toggleSubBar: {
    type: Function,
    required: true
  }
})
</script>
