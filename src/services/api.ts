import axios from 'axios'
import Cookie from 'js-cookie'
import { env } from '@/utils'

export const api = (apiUrl: 'saas' | 'batch' = 'saas') => {
  const url = {
    saas: env('NEXT_PUBLIC_API_SAAS_URL'),
    batch: '',
  }
  const axiosss = axios.create({
    baseURL: url[apiUrl],
  })

  if (Cookie.get('token')) {
    axiosss.defaults.headers.common.Authorization = `Bearer ${Cookie.get('token')}`
  }

  axiosss.interceptors.response.use(
    (r) => r,
    (error) => {
      if (error.response?.status === 401) {
        Cookie.remove('token')
      }
      return Promise.reject(error)
    }
  )

  return axiosss
}
