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
  if (localStorage.accessToken) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.accessToken}`
  }

  return axiosInstance
}

export default axiosInstance
