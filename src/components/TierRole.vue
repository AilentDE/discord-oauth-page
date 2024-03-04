<template>
    <base-card>
      <h2 class="px-16 mb-8 text-lg md:text-2xl font-bold text-center line-clamp-1">
        {你現在選擇的伺服器名稱你現在選擇的伺服器名稱你現在選擇的伺服器名稱}
      </h2>
      <div class="overflow-x-auto border border-l-gray-lighter rounded-xl mb-4">
        <div
          class="flex flex-wrap items-center justify-between text-gray text-base font-bold bg-primary-light min-h-9 min-w-fit p-2"
        >
          <div class="pl-3 shrink-0 w-72 line-clamp-1">方案名稱</div>
          <div class="pl-3 shrink-0 w-20 line-clamp-1">$價格</div>
          <div class="pl-3 shrink-0 w-40 line-clamp-1">Discord身分組</div>
        </div>
        <div
          class="flex flex-wrap items-center justify-between text-sm min-h-16 min-w-fit p-2"
          v-for="tier in tiers"
          :key="tier.id"
        >
          <div class="pl-3 shrink-0 w-72 line-clamp-1" :class="tierType(tier.isAddon)">
            {{ tier.title }}
          </div>
          <div class="pl-3 shrink-0 w-20 line-clamp-1">{{ tier.price }}</div>
          <div class="pl-3 shrink-0 w-40 line-clamp-1">
            <select
              v-model="selected[tier.id]"
              class="border border-primary rounded-lg bg-primary-lighter"
            >
              <option v-for="role in roles" :value="role.id" :key="role.id">
                {{ role.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="w-full flex items-center justify-center">
        <div
          class="w-full flex flex-col-reverse md:flex-row md:space-x-12 items-center justify-center"
        >
          <button
            class="w-full md:w-1/3 bg-white border-primary my-2 px-4 py-2 text-sm text-primary justify-center items-center rounded-full border hover:bg-gray-lighter duration-300"
            @click="cancel"
          >
            取消
          </button>
          <button
            class="w-full md:w-1/3 bg-primary border-primary my-2 px-4 py-2 text-sm text-white justify-center items-center rounded-full border hover:bg-primary-dark hover:border-primary-dark duration-300"
            type="button"
          >
            確定
          </button>
        </div>
      </div>
    </base-card>
</template>

<script setup>
const props = defineProps({
    data = {
        type: Object,
        required: true
    }
})
</script>