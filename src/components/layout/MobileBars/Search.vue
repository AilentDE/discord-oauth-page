<template>
  <div class="container pb-2 -pt-1 xl:hidden" v-show="show">
    <div class="flex px-3 py-2 bg-gray-100 rounded">
      <button @click="search">
        <IconSearch class="mr-2 fill-[#BDBDBD] hover:fill-gray-500" />
      </button>
      <input
        type="text"
        class="w-full text-xs bg-transparent focus:outline-none"
        placeholder="請輸入關鍵字"
        @keydown.enter="search"
        :value="searchKeyWord"
        @input="updateSearchKey"
      />
    </div>
  </div>
</template>

<script setup>
import IconSearch from '@/components/icons/IconSearch.vue'
const props = defineProps({
  show: {
    type: Boolean,
    required: true
  },
  search: {
    type: Function,
    required: true
  },
  searchKeyWord: {
    type: String,
    required: false
  }
})
const emit = defineEmits(['updateKeyWord'])
const updateSearchKey = (event) => {
  emit('updateKeyWord', event.target.value)
}
</script>
