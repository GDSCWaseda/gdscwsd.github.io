import type { NextPage } from 'next'

import CommonMeta from 'components/CommonMeta'
import { ErrorPage } from 'pages/404'

const Events: NextPage = () => {
  return (
    <>
      <CommonMeta title="Events" />
      <ErrorPage text="dev" />
    </>
  )
}

export default Events
