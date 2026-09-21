import axios from 'axios'

const apiClient = axios.create({
  baseURL: '/api',
  timeout: 15000,
})

apiClient.interceptors.response.use(
  (res) => res.data,
  (err) => Promise.reject(err),
)

export default apiClient
