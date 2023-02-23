import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import { SessionProvider } from 'next-auth/react'
import 'react-toastify/dist/ReactToastify.css'
import { QueryClientProvider } from '@tanstack/react-query'

import { GlobalStyle } from '../styles/global'
import { defaultTheme } from '../styles/theme'
import { CharacterProvider } from '../context/CharacterContext'
import { queryClient } from '../lib/react-query'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={defaultTheme}>
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <CharacterProvider>
            <Component {...pageProps} />
          </CharacterProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </SessionProvider>
  )
}
