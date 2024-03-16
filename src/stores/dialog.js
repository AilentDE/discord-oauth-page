import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

export const useDialogStore = defineStore('dialog', () => {
  const msg = reactive({
    style: 'bg-blue-400 bg-opacity-50',
    content: ''
  })
  const showMsg = ref(false)
  const setMsg = (msgContent, msgStyle) => {
    msg.style = msgStyle
    msg.content = msgContent
    showMsg.value = true
    setTimeout(() => {
      showMsg.value = false
    }, 2000)
  }
  const closeDialog = () => {
    showMsg.value = false
  }

  return {
    msg,
    showMsg,
    setMsg,
    closeDialog
  }
})
