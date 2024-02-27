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
            :src="authStore.avatarUrl"
            alt="avatar"
            class="size-20 md:size-40 mx-auto rounded-full border-2 md:border-4 shrink-0"
            :class="avatarBorderColor"
          />
        </div>
      </base-card>
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
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { reactive, computed } from 'vue'
import { changeMetaTags } from '@/utils/seo'
changeMetaTags({ title: 'Discord身分組管理' })

const authStore = useAuthStore()
const avatarBorderColor = computed(() => `border-[${authStore.discordUser.banner_color}]`)

const tiers = reactive([
  {
    id: '0C974ED5-1094-4A68-8216-520ECE4480E4',
    creatorId: 'BA74F721-FE8A-4EAA-B596-356CA9A9C97B',
    isListed: true,
    isRestricted: false,
    creatorUserId: 'BA74F721-FE8A-4EAA-B596-356CA9A9C97B',
    title: '免費方案',
    imageAssetId: null,
    price: 0,
    description: '關注',
    limit: null,
    joinCount: 2,
    isAddon: false,
    createdAt: '2023-03-24T05:44:42Z',
    updatedAt: '2023-03-24T05:44:42Z',
    destroyedAt: null,
    isAvailable: true,
    isJoined: false,
    joinedAt: null,
    renewAt: null,
    expiredAt: null
  },
  {
    id: '96A28423-3E27-4762-B70F-F8883238F199',
    creatorId: 'BA74F721-FE8A-4EAA-B596-356CA9A9C97B',
    isListed: true,
    isRestricted: false,
    creatorUserId: 'BA74F721-FE8A-4EAA-B596-356CA9A9C97B',
    title: '5元',
    imageAssetId: '6A8FB993-34A5-4559-8C24-DD667EC9B152',
    price: 5,
    description: 'AAA\n555',
    limit: 5,
    joinCount: 0,
    isAddon: false,
    createdAt: '2023-08-09T10:06:07Z',
    updatedAt: '2023-11-30T07:32:33Z',
    destroyedAt: null,
    isAvailable: true,
    isJoined: false,
    joinedAt: null,
    renewAt: null,
    expiredAt: null
  },
  {
    id: 'B77E5A94-FBA3-4804-917B-0E16D580E2B1',
    creatorId: 'BA74F721-FE8A-4EAA-B596-356CA9A9C97B',
    isListed: false,
    isRestricted: false,
    creatorUserId: 'BA74F721-FE8A-4EAA-B596-356CA9A9C97B',
    title: 'AAA',
    imageAssetId: null,
    price: 10,
    description: 'AAA\n777',
    limit: 1,
    joinCount: 0,
    isAddon: false,
    createdAt: '2023-08-09T10:08:47Z',
    updatedAt: '2023-08-09T10:08:47Z',
    destroyedAt: null,
    isAvailable: false,
    isJoined: false,
    joinedAt: null,
    renewAt: null,
    expiredAt: null
  },
  {
    id: 'B5D2C3D9-E13A-4D37-8C78-986AA365DEB7',
    creatorId: 'BA74F721-FE8A-4EAA-B596-356CA9A9C97B',
    isListed: true,
    isRestricted: false,
    creatorUserId: 'BA74F721-FE8A-4EAA-B596-356CA9A9C97B',
    title: '標準3',
    imageAssetId: null,
    price: 100,
    description: '',
    limit: null,
    joinCount: 0,
    isAddon: false,
    createdAt: '2023-03-25T08:50:11Z',
    updatedAt: '2023-03-25T08:50:11Z',
    destroyedAt: null,
    isAvailable: true,
    isJoined: false,
    joinedAt: null,
    renewAt: null,
    expiredAt: null
  },
  {
    id: '31E5FFB3-877B-4EA9-B1B3-269736AFEDCB',
    creatorId: 'BA74F721-FE8A-4EAA-B596-356CA9A9C97B',
    isListed: false,
    isRestricted: false,
    creatorUserId: 'BA74F721-FE8A-4EAA-B596-356CA9A9C97B',
    title: '管理端追加方案，改',
    imageAssetId: '505DFA92-509D-4EFF-BB13-E721FE8A9EB1',
    price: 105,
    description: '管理新增105方案，改',
    limit: 5,
    joinCount: 0,
    isAddon: false,
    createdAt: '2023-11-07T03:41:29Z',
    updatedAt: '2023-11-07T06:19:38Z',
    destroyedAt: null,
    isAvailable: false,
    isJoined: false,
    joinedAt: null,
    renewAt: null,
    expiredAt: null
  },
  {
    id: '2B045AEB-513B-4597-97EA-32CC5D609D95',
    creatorId: 'BA74F721-FE8A-4EAA-B596-356CA9A9C97B',
    isListed: false,
    isRestricted: false,
    creatorUserId: 'BA74F721-FE8A-4EAA-B596-356CA9A9C97B',
    title: '一般105',
    imageAssetId: '99EA1D79-EA3C-4AED-B193-3A5052790397',
    price: 110,
    description: '管理新增105方案',
    limit: null,
    joinCount: 0,
    isAddon: false,
    createdAt: '2023-07-19T12:14:06Z',
    updatedAt: '2023-07-19T12:22:33Z',
    destroyedAt: null,
    isAvailable: false,
    isJoined: false,
    joinedAt: null,
    renewAt: null,
    expiredAt: null
  },
  {
    id: '52563A95-F5E8-4981-BC02-2E67947AA8F7',
    creatorId: 'BA74F721-FE8A-4EAA-B596-356CA9A9C97B',
    isListed: true,
    isRestricted: false,
    creatorUserId: 'BA74F721-FE8A-4EAA-B596-356CA9A9C97B',
    title: '測試字數',
    imageAssetId: null,
    price: 514,
    description:
      '測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試',
    limit: null,
    joinCount: 0,
    isAddon: false,
    createdAt: '2023-04-07T06:21:46Z',
    updatedAt: '2023-04-07T06:21:46Z',
    destroyedAt: null,
    isAvailable: true,
    isJoined: false,
    joinedAt: null,
    renewAt: null,
    expiredAt: null
  },
  {
    id: '07BD5C92-6070-4AF6-A68E-3C0B2D215C31',
    creatorId: 'BA74F721-FE8A-4EAA-B596-356CA9A9C97B',
    isListed: false,
    isRestricted: false,
    creatorUserId: 'BA74F721-FE8A-4EAA-B596-356CA9A9C97B',
    title: '追加一個miwa方案520',
    imageAssetId: 'A75006A3-79B5-4136-807F-C3AA07A86EEE',
    price: 520,
    description: 'for MiWa',
    limit: null,
    joinCount: 0,
    isAddon: false,
    createdAt: '2023-07-18T13:00:41Z',
    updatedAt: '2023-07-18T13:00:41Z',
    destroyedAt: null,
    isAvailable: false,
    isJoined: false,
    joinedAt: null,
    renewAt: null,
    expiredAt: null
  },
  {
    id: 'B446DB4C-2C04-41DE-865E-B75F30E1F16F',
    creatorId: 'BA74F721-FE8A-4EAA-B596-356CA9A9C97B',
    isListed: true,
    isRestricted: false,
    creatorUserId: 'BA74F721-FE8A-4EAA-B596-356CA9A9C97B',
    title: '時差方案',
    imageAssetId: null,
    price: 888,
    description: '測試文章權限',
    limit: 5,
    joinCount: 0,
    isAddon: false,
    createdAt: '2023-06-21T06:42:09Z',
    updatedAt: '2023-06-21T06:42:09Z',
    destroyedAt: null,
    isAvailable: true,
    isJoined: false,
    joinedAt: null,
    renewAt: null,
    expiredAt: null
  },
  {
    id: '0928C1D7-A9C0-4873-8414-64250A99A44D',
    creatorId: 'BA74F721-FE8A-4EAA-B596-356CA9A9C97B',
    isListed: true,
    isRestricted: false,
    creatorUserId: 'BA74F721-FE8A-4EAA-B596-356CA9A9C97B',
    title: '高級標準方案',
    imageAssetId: null,
    price: 999,
    description: '貴爛',
    limit: null,
    joinCount: 0,
    isAddon: false,
    createdAt: '2023-03-25T10:17:57Z',
    updatedAt: '2023-03-25T10:17:57Z',
    destroyedAt: null,
    isAvailable: true,
    isJoined: false,
    joinedAt: null,
    renewAt: null,
    expiredAt: null
  },
  {
    id: '84B62585-73BB-4CCD-BE1A-40889FCFD46D',
    creatorId: 'BA74F721-FE8A-4EAA-B596-356CA9A9C97B',
    isListed: true,
    isRestricted: false,
    creatorUserId: 'BA74F721-FE8A-4EAA-B596-356CA9A9C97B',
    title: '0919方案',
    imageAssetId: null,
    price: 9191919,
    description: '也貴得太誇張',
    limit: 1,
    joinCount: 0,
    isAddon: false,
    createdAt: '2023-09-19T08:29:12Z',
    updatedAt: '2023-09-19T08:29:12Z',
    destroyedAt: null,
    isAvailable: true,
    isJoined: false,
    joinedAt: null,
    renewAt: null,
    expiredAt: null
  },
  {
    id: '048D62D4-10B3-4496-B902-D8EA681DC96A',
    creatorId: 'BA74F721-FE8A-4EAA-B596-356CA9A9C97B',
    isListed: true,
    isRestricted: false,
    creatorUserId: 'BA74F721-FE8A-4EAA-B596-356CA9A9C97B',
    title: 'AAA',
    imageAssetId: null,
    price: 5,
    description: 'AAA\n777',
    limit: 1,
    joinCount: 0,
    isAddon: true,
    createdAt: '2023-08-09T10:07:54Z',
    updatedAt: '2023-08-09T10:07:54Z',
    destroyedAt: null,
    isAvailable: true,
    isJoined: false,
    joinedAt: null,
    renewAt: null,
    expiredAt: null
  },
  {
    id: '8FB47462-F485-4896-89F9-50734CB6BC0B',
    creatorId: 'BA74F721-FE8A-4EAA-B596-356CA9A9C97B',
    isListed: true,
    isRestricted: false,
    creatorUserId: 'BA74F721-FE8A-4EAA-B596-356CA9A9C97B',
    title: '!10元',
    imageAssetId: '75987C6A-795E-47B5-9905-A67880649CB3',
    price: 10,
    description: '擋下來',
    limit: null,
    joinCount: 0,
    isAddon: true,
    createdAt: '2023-08-10T12:12:27Z',
    updatedAt: '2023-10-21T03:54:22Z',
    destroyedAt: null,
    isAvailable: true,
    isJoined: false,
    joinedAt: null,
    renewAt: null,
    expiredAt: null
  },
  {
    id: '763BF591-43D0-4E23-AC5E-B86940CA7213',
    creatorId: 'BA74F721-FE8A-4EAA-B596-356CA9A9C97B',
    isListed: true,
    isRestricted: false,
    creatorUserId: 'BA74F721-FE8A-4EAA-B596-356CA9A9C97B',
    title: '進階1',
    imageAssetId: null,
    price: 30,
    description: '',
    limit: null,
    joinCount: 0,
    isAddon: true,
    createdAt: '2023-03-25T08:51:12Z',
    updatedAt: '2023-07-06T12:25:51Z',
    destroyedAt: null,
    isAvailable: true,
    isJoined: false,
    joinedAt: null,
    renewAt: null,
    expiredAt: null
  },
  {
    id: 'E80BF523-6A1E-4BCD-B1DC-EA8F3316B6D5',
    creatorId: 'BA74F721-FE8A-4EAA-B596-356CA9A9C97B',
    isListed: true,
    isRestricted: false,
    creatorUserId: 'BA74F721-FE8A-4EAA-B596-356CA9A9C97B',
    title: '一般100',
    imageAssetId: '99EA1D79-EA3C-4AED-B193-3A5052790397',
    price: 100,
    description: '管理新增100方案',
    limit: null,
    joinCount: 0,
    isAddon: true,
    createdAt: '2023-07-19T12:13:19Z',
    updatedAt: '2023-07-19T12:13:19Z',
    destroyedAt: null,
    isAvailable: true,
    isJoined: false,
    joinedAt: null,
    renewAt: null,
    expiredAt: null
  },
  {
    id: '3C021283-C553-4AA7-A239-E100EDE2114F',
    creatorId: 'BA74F721-FE8A-4EAA-B596-356CA9A9C97B',
    isListed: true,
    isRestricted: false,
    creatorUserId: 'BA74F721-FE8A-4EAA-B596-356CA9A9C97B',
    title: '進階02',
    imageAssetId: 'A9806346-1D5D-44C2-BC87-21E25DEB3CA6',
    price: 800,
    description: '很貴很貴',
    limit: 3,
    joinCount: 0,
    isAddon: true,
    createdAt: '2023-03-31T06:10:46Z',
    updatedAt: '2023-06-29T09:05:54Z',
    destroyedAt: null,
    isAvailable: true,
    isJoined: false,
    joinedAt: null,
    renewAt: null,
    expiredAt: null
  },
  {
    id: '2D0569B2-2392-444E-B07E-CAEC8C537FF5',
    creatorId: 'BA74F721-FE8A-4EAA-B596-356CA9A9C97B',
    isListed: false,
    isRestricted: false,
    creatorUserId: 'BA74F721-FE8A-4EAA-B596-356CA9A9C97B',
    title: '追加方案',
    imageAssetId: '35EDD269-0640-492E-9124-CD9DD4DA9C42',
    price: 5500,
    description: '賺爛',
    limit: 9,
    joinCount: 0,
    isAddon: true,
    createdAt: '2023-06-29T09:05:31Z',
    updatedAt: '2023-08-09T10:02:44Z',
    destroyedAt: null,
    isAvailable: false,
    isJoined: false,
    joinedAt: null,
    renewAt: null,
    expiredAt: null
  }
])
const tierType = (isAddon) => {
  const baseStyle = 'before:px-1 before:py-0.5 before:mr-1 before:rounded before:mr-0.5 '
  if (isAddon) {
    return baseStyle + "before:content-['進階'] before:text-[#ff7E07] before:bg-[#f5f0e8]"
  } else {
    return baseStyle + "before:content-['標準'] before:text-[#4caf50] before:bg-[#e8f5e9]"
  }
}
const roles = reactive([
  {
    id: '1163271859895271524',
    name: '',
    description: null,
    permissions: 104320577,
    permissions_new: '559623605571137',
    position: 0,
    color: 0,
    hoist: false,
    managed: false,
    mentionable: false,
    icon: null,
    unicode_emoji: null,
    flags: 0
  },
  {
    id: '1163272029940756510',
    name: '推し',
    description: null,
    permissions: 8192,
    permissions_new: '8192',
    position: 1,
    color: 0,
    hoist: false,
    managed: false,
    mentionable: false,
    icon: null,
    unicode_emoji: null,
    flags: 0
  },
  {
    id: '1178963201426202648',
    name: 'Ko-fi Bot',
    description: null,
    permissions: 268435457,
    permissions_new: '268435457',
    position: 2,
    color: 0,
    hoist: false,
    managed: true,
    mentionable: false,
    icon: null,
    unicode_emoji: null,
    tags: { bot_id: '836232765942923305' },
    flags: 0
  },
  {
    id: '1211534517530005536',
    name: '小可精靈',
    description: null,
    permissions: 8,
    permissions_new: '8',
    position: 1,
    color: 0,
    hoist: false,
    managed: true,
    mentionable: false,
    icon: null,
    unicode_emoji: null,
    tags: { bot_id: '1196368768411115530' },
    flags: 0
  }
])
const selected = reactive({})
const cancel = () => {
  location.href = 'https://google.com'
}
</script>
