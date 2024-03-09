import axios from 'axios'

const baseUrl = 'http://localhost:8000/discordClusters'

const axiosInstance = async () => {
  const response = await axios.get(baseUrl + '/csrfToken/', { withCredentials: true })
  const csrfToken = response.data.csrf_token

  const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
      'X-CSRF-TOKEN': csrfToken
    },
    withCredentials: true
  })

  return axiosInstance
}

export default axiosInstance
