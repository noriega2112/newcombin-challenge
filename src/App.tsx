import { ReactElement } from 'react'
import { useAppDispatch, useAppSelector } from './hooks/useAppSelector'
import { resetTokenData } from './store/auth/authSlice'
import { API } from './rest/client/http-client'
import { useNavigate } from 'react-router-dom'
import { Members } from './pages/member/Members'

function App(): ReactElement {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const token = useAppSelector((root) => root.authSlice.token)

  function manageErrorConnection(err: any) {
    if (
      err?.response &&
      err?.response?.status >= 400 &&
      err?.response?.status <= 500
    ) {
      if (err?.response?.status === 401) {
        dispatch(resetTokenData())
        navigate('/login')
      }
      return Promise.reject(err)
    } else {
      return Promise.reject(err)
    }
  }

  ;(function () {
    if (token) {
      API.defaults.headers.common.Authorization = 'Bearer ' + token
    } else {
      API.defaults.headers.common.Authorization = ''
    }
    API.interceptors.response.use((response) => response, manageErrorConnection)
  })()

  return (
    <>
      <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            className="flex items-center justify-center p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">NewCombin</span>
                <img
                  className="h-8 w-auto"
                  src="https://newcombin.com/wp-content/themes/newcombin/assets/img/nav-logo-color.png"
                  alt="NewCombin"
                />
              </a>
            </div>
          </nav>
        </header>

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
              }}
            />
          </div>
          <Members />
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
              }}
            />
            M
          </div>
        </div>
      </div>
    </>
  )
}

export default App
