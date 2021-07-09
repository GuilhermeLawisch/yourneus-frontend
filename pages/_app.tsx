import type { AppProps } from 'next/app'
import GlobalStyles from '../src/styles/global';
import { AuthContextProvider } from '../src/context/AuthContext'
import { ToggleContextProvider } from '../src/context/ToggleContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToggleContextProvider>
        <AuthContextProvider>
          <Component {...pageProps} />
          <GlobalStyles />
        </AuthContextProvider>
      </ToggleContextProvider>
    </>
  )
}
export default MyApp;