import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const clustersUser = reactive({
    id: 'E0D23E54-C7AD-4FFC-A306-D5EDA4176D4C',
    displayName: '不存在的印務',
    tel: null,
    email: 'print@moaideas.net',
    showNsfw: true,
    locale: null,
    avatarAssetId: '3E72D57A-0844-4A45-9A12-202679C9A0D1',
    creatorBannerAssetId: 'CA64FD18-8601-48F4-9CC5-D7FC252986AB',
    creatorFields: ['other'],
    dateOfBirth: '1993-01-19',
    createdAt: '2023-06-20T07:02:49Z',
    lastSignedInAt: '2024-02-19T08:33:49Z',
    socialMediaHandles: { facebook: '', youtube: '', twitter: '', instagram: '' },
    externalUrl: [],
    isGovIdVerified: 'rejected',
    platformFeePercent: 0,
    isRecommended: false,
    isDisable: false,
    balance: 100,
    lastUpdatedAt: 1708611895487
  })

  const discordUser = reactive({
    id: '200896760929976321',
    username: 'raccoon_majjiku',
    avatar: '0e902cd8a2ae2924518215b43107ed5b',
    discriminator: '0',
    public_flags: 0,
    premium_type: 2,
    flags: 0,
    banner: '422945ef65a1c3084884e30e71c34636',
    accent_color: 6821398,
    global_name: 'D.E.🍹アライグマべロス',
    avatar_decoration_data: {
      asset: 'a_9d2ff9685be0c668ef6990b0035fac17',
      sku_id: '1202070083816661043'
    },
    banner_color: '#681616',
    mfa_enabled: true,
    locale: 'zh-TW',
    email: 'cameronqoo@gmail.com',
    verified: true
  })
  const avatarUrl = computed(
    () => `https://cdn.discordapp.com/avatars/${discordUser.id}/${discordUser.avatar}.png`
  )

  return {
    clustersUser,
    discordUser,
    avatarUrl
  }
})
