import axios from 'axios'

const baseUrl = 'http://localhost:8000/discordClusters'

const axiosInstance = async () => {
  const response = await axios.get(baseUrl + '/csrfToken/')
  const csrfToken = response.data.csrfToken

  const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
      'X-CSRF-TOKEN': csrfToken
    }
  })

  return axiosInstance
}

export default axiosInstance
