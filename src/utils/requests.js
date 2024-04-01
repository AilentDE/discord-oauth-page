import { getUser } from '@/utils/indexddb'
import axios from 'axios'

const baseUrl = import.meta.env.VITE_API_BASE_URL + '/discordClusters'

const axiosInstance = async () => {
  const response = await axios.get(baseUrl + '/csrfToken')
  const csrfToken = response.data.csrfToken

  const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
      'X-CSRF-TOKEN': csrfToken
    }
  })
  const accessToken = await getUser('accessToken')
  if (accessToken != undefined) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
  }

  return axiosInstance
}

export default axiosInstance
