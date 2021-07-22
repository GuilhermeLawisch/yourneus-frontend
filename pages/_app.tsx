import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import GlobalStyles from '../src/styles/global';
import { ToggleContextProvider } from '../src/context/ToggleContext'
import { AuthContextProvider } from '../src/context/AuthContext'
import { NewsContextProvider } from '../src/context/NewsContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToggleContextProvider>
        <AuthContextProvider>
          <NewsContextProvider>
            <Component {...pageProps} />
            <Toaster 
              position="top-center"
              reverseOrder={false}
            />
            <GlobalStyles />
          </NewsContextProvider>
        </AuthContextProvider>
      </ToggleContextProvider>
    </>
  )
}
export default MyApp;