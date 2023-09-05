import { defineStore } from 'pinia'
import { reactive } from 'vue'

interface GenericObject {
  [key: string]: any
}

export const useAPIStore = defineStore('api', () => {
  const apiData = reactive<GenericObject>({})

  const storeAPIData = (key: string, response: any): void => {
    apiData[key] = response
  }
  
  return {
    apiData,
    storeAPIData
  }
})
