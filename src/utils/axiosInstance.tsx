import axios from 'axios'
const SERVER_URL = 'http://158.247.192.7:8080/api/v1'

export const getJWTHeader = (token: string) => {
  return {
    Authorization: token,
  }
}

export const axiosInstance = axios.create({ baseURL: `${SERVER_URL}/` })
