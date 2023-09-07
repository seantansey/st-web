import { type Error, request } from './request.ts'
import { useUIStore } from '@/stores/ui'
const store = useUIStore()

export interface Message {
  name: string
  email: string
  subject: string
  message: string
}

interface Success {
  success: boolean
}

const ERRORS = {
  INVALID: 'Message must contain all fields',
  GENERIC: 'Message not delivered. Please try again'
}

export const validateMessage = ({ name, email, subject, message }: Message) => !!(name && email && subject && message)
  
export const postMessage = async (body: Message): Promise<Success | Error> => {
  const isValid = validateMessage(body)
  if (!isValid) {
    store.addToast({
      key: crypto.randomUUID(),
      type: 'error',
      message: ERRORS.INVALID
    })
    return { error: ERRORS.INVALID }
  }
  return request(`${import.meta.env.VITE_NODE_API}/messages`, {
    method: 'POST',
    headers: {
      'x-api-key': import.meta.env.VITE_NODE_API_KEY,
      'x-app-id': import.meta.env.VITE_NODE_API_APP_ID
    },
    body
  })
    .then(response => {
      store.addToast({
        key: crypto.randomUUID(),
        type: 'success',
        message: 'Message sent successfully!'
      })
      return response as Success
    })
    .catch((error) => {
      store.addToast({
        key: crypto.randomUUID(),
        type: 'error',
        message: ERRORS.GENERIC
      })
      return { error } as Error
    })
}
