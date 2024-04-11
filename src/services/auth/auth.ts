import { api } from '@/services'
import { IAuthRoutes } from './auth.types'

const signOut = () => {}

export const authService: IAuthRoutes = {
  me: async (payload) => {
    const response = await api().post('/auth/signin', payload)
    return response.data
  },
  signIn: async (token) => {
    const response = await api().get('/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  },
  signOut,
}
