import axios from 'axios'

export const BASE_URL = 'http://localhost:8081'

export const API = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    'Content-Type': 'application/json'
  }
})

export class HttpClient {
  static async get<T>(url: string, params?: unknown): Promise<T> {
    const response = await API.get<T>(url, { params })
    return response.data
  }

  static async post<T>(url: string, data: unknown, options?: any): Promise<T> {
    const response = await API.post<T>(url, data, options)
    return response.data
  }

  static async put<T>(url: string, data: unknown): Promise<T> {
    const response = await API.put<T>(url, data)
    return response.data
  }

  static async delete<T>(url: string): Promise<T> {
    const response = await API.delete<T>(url)
    return response.data
  }
}
