import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

interface Toast {
  key: string,
  type: string
  message: string
}

export const useUIStore = defineStore('ui', () => {
  const menuOpen = ref<boolean>(false)
  const navbarVisible = ref<boolean>(false)
  const toasts = reactive<Toast[]>([])

  const closeMenu = (): void => {
    menuOpen.value = false
  }
  const openMenu = (): void => {
    menuOpen.value = true
  }

  const showNavbar = (): void => {
    navbarVisible.value = true
  }
  const hideNavbar = (): void => {
    navbarVisible.value = false
  }

  const addToast = (toast: Toast): void => {
    toasts.push(toast)
    setTimeout(() => removeToast(toast), 5000)
  }
  const removeToast = (toast: Toast): void => {
    const index = toasts.findIndex(({ key }) => key === toast.key)
    toasts.splice(index, 1)
  }

  return {
    menuOpen,
    closeMenu,
    openMenu,
    navbarVisible,
    showNavbar,
    hideNavbar,
    toasts,
    addToast,
    removeToast
  }
})
