import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL || 'http://localhost:8000/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getProducts() {
    return apiClient.get('/products')
  },
  getProduct(id) {
    return apiClient.get(`/products/${id}`)
  },
  registerUser(userData) {
    return apiClient.post('/users/register', userData)
  },
  loginUser(credentials) {
    return apiClient.post('/users/login', credentials)
  }
}