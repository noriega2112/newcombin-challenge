import { useForm } from 'react-hook-form'
import { useInsertMember } from '../../../rest/member'
import { IMember } from '../../../interfaces/IMember'
import InputMask from 'react-input-mask'

const defaultValues: IMember = {
  firstName: '',
  lastName: '',
  address: '',
  ssn: ''
}

const regexSSN = /^\d{3}-\d{2}-\d{4}$/

export const MemberForm = () => {
  const memberMutation = useInsertMember()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues,
    mode: 'onBlur'
  })

  const onSubmit = async (data: IMember) => {
    await memberMutation.mutateAsync({ values: data, reset })
  }
  return (
    <div className="p-20 border shadow-xl border-gray-50 rounded-xl">
      <section>
        <div className="flex justify-center"></div>
        <p className="pb-3 text-2xl">NewCombin Members list challenge</p>
        <form
          className="space-y-6"
          noValidate
          autoComplete="off"
          // onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              First Name
            </label>
            <div className="mt-2">
              <input
                id="firstName"
                type="text"
                autoComplete="name"
                required
                disabled={memberMutation.isLoading}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register('firstName', {
                  required: 'First Name is required',
                  minLength: {
                    value: 3,
                    message: 'First Name must be at least 3 characters'
                  }
                })}
              />
              {errors.firstName && (
                <p className="text-xs italic text-red-500">
                  {errors.firstName.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Last Name
            </label>
            <div className="mt-2">
              <input
                id="lastName"
                type="text"
                autoComplete="name"
                required
                disabled={memberMutation.isLoading}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register('lastName', {
                  required: 'Last Name is required',
                  minLength: {
                    value: 3,
                    message: 'Last Name must be at least 3 characters'
                  }
                })}
              />
              {errors.lastName && (
                <p className="text-xs italic text-red-500">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Address
            </label>
            <div className="mt-2">
              <input
                id="address"
                type="text"
                autoComplete="name"
                required
                disabled={memberMutation.isLoading}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register('address', {
                  required: 'Address is required'
                })}
              />
              {errors.address && (
                <p className="text-xs italic text-red-500">
                  {errors.address.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              SSN
            </label>
            <div className="mt-2">
              <InputMask
                mask="999-99-9999"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 border-0"
                {...register('ssn', {
                  required: 'SSN is required',
                  pattern: {
                    value: regexSSN,
                    message: 'Invalid SSN'
                  }
                })}
              ></InputMask>
              {errors.ssn && (
                <p className="text-xs italic text-red-500">
                  {errors.ssn.message}
                </p>
              )}
            </div>
          </div>
        </form>

        <div className="flex flex-row mt-4">
          <button
            onClick={(e) => {
              e.preventDefault()
              reset()
            }}
            disabled={memberMutation.isLoading}
            className="flex mr-2 w-full justify-center rounded-md border-indigo-500 bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-200 outline-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-100"
          >
            Reset
          </button>
          <button
            onClick={handleSubmit(onSubmit)}
            disabled={memberMutation.isLoading}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </section>
    </div>
  )
}
