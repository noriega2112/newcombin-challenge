export interface IAuthUser {
  username: string
  password: string
}

export interface ILoginResponse {
  iat: number
  exp: number
  token: string
}
