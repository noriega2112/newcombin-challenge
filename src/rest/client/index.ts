import { IMember } from '../../interfaces/IMember'
import { IAuthUser, ILoginResponse } from '../../interfaces/IUser'
import { API_ENDPOINTS } from './api-endpoints'
import { HttpClient } from './http-client'

class Client {
  identity = {
    login: (creds: IAuthUser) =>
      HttpClient.post<ILoginResponse>(`${API_ENDPOINTS.identity.login}`, creds)
  }
  member = {
    getAll: () => HttpClient.get<IMember[]>(`${API_ENDPOINTS.member.main}`),
    create: (creds: IMember) =>
      HttpClient.post<IMember>(`${API_ENDPOINTS.member.main}`, creds)
  }
}

export default new Client()
