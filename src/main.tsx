import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { ToastBar, Toaster, toast } from 'react-hot-toast'

import store from './store'
import { defaultPosition } from './shared/alertService'
const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
        <Toaster
          containerStyle={{
            zIndex: '9999 !important'
          }}
          position={defaultPosition}
          toastOptions={{
            className: 'react-hot-toast',
            style: { zIndex: '9999 !important' },
            duration: 2000
          }}
          gutter={8}
        >
          {(t) => (
            <ToastBar toast={t}>
              {({ icon, message }) => (
                <>
                  {icon}
                  {message}
                  {t.type !== 'loading' && (
                    <button onClick={() => toast.dismiss(t.id)}>x</button>
                  )}
                </>
              )}
            </ToastBar>
          )}
        </Toaster>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
