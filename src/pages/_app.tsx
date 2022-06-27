import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import { Footer } from 'components/Footer'
import { NavigationBar } from 'components/NavigationBar'
import { googleTagManagerId } from '~/api/gtm'

import 'styles/globals.scss'

/*import GoogleTagManager, {
  GoogleTagManagerId
} from 'components/GoogleAnalytics'*/

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <>
      {/*<GoogleTagManager
        googleTagManagerId={googleTagManagerId as GoogleTagManagerId}
  /> */}
      <NavigationBar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
