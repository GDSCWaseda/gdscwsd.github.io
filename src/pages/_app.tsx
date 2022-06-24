import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { Footer } from 'components/Footer/Footer'
import GoogleTagManager, {
  GoogleTagManagerId
} from 'components/GoogleAnalytics'
import { NavigationBar } from 'components/NavigationBar/NavigationBar'
import * as gtag from '~/api/gtg'
import { googleTagManagerId } from '~/api/gtm'

import 'styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <>
      <GoogleTagManager
        googleTagManagerId={googleTagManagerId as GoogleTagManagerId}
      />
      <NavigationBar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
