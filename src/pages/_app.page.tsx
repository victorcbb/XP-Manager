import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import { SessionProvider } from 'next-auth/react'
import 'react-toastify/dist/ReactToastify.css'

import { GlobalStyle } from '../styles/global'
import { defaultTheme } from '../styles/theme'
import { CharacterProvider } from '../context/CharacterContext'

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
        <CharacterProvider>
          <Component {...pageProps} />
        </CharacterProvider>
      </ThemeProvider>
    </SessionProvider>
  )
}