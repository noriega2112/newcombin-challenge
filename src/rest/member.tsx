import { useMutation } from '@tanstack/react-query'
import client from './client'
import { errorAlert, successAlert } from '../shared/alertService'
import { IMember } from '../interfaces/IMember'
import { useAppDispatch } from '../hooks/useAppSelector'
import { addMember, setMembersList } from '../store/member/memberslice'

interface IMutate {
  values: IMember
  reset: () => void
}

export const useInsertMember = () => {
  const dispatch = useAppDispatch()

  const mutation = useMutation(
    ({ values }: IMutate) => {
      return client.member.create(values)
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
      onSuccess: (data, { reset }) => {
        if (data) {
          successAlert('Member Added')
          dispatch(addMember(data))
          reset()
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

export function useMembers() {
  const dispatch = useAppDispatch()

  const mutation = useMutation(
    () => {
      return client.member.getAll()
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
          dispatch(setMembersList(data))
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
