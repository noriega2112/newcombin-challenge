import { useMutation } from '@tanstack/react-query'
import { IAuthUser } from '../interfaces/IUser'
import client from './client'
import { errorAlert, successAlert } from '../shared/alertService'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../hooks/useAppSelector'
import { setTokenData } from '../store/auth/authSlice'

export const useLogin = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const mutation = useMutation(
    (values: IAuthUser) => {
      return client.identity.login(values)
    },
    {
      onError: (error: any) => {
        if (error.response) {
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        }
        errorAlert(error?.response?.data?.message ?? 'An error has ocurred')
      },
      onSuccess: (data) => {
        if (data) {
          dispatch(setTokenData(data))
          successAlert('Login successful')
          navigate('/')
        }
      }
    }
  )
  return {
    mutate: mutation.mutate,
    mutateAsync: mutation.mutateAsync,
    isLoading: mutation.isLoading,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error
  }
}
