import type { NextPage } from 'next'

import CommonMeta from 'components/CommonMeta'
import { ErrorPage } from 'pages/404'

const Home: NextPage = () => {
  return (
    <>
      <CommonMeta title="Home" />
      <ErrorPage text="dev" />
    </>
  )
}

export default Home
