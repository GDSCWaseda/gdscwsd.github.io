import type { NextPage } from 'next'

import CommonMeta from 'components/CommonMeta'
import { ErrorPage } from 'pages/404'

const Teams: NextPage = () => {
  return (
    <>
      <CommonMeta title="Team" />
      <ErrorPage text="dev" />
    </>
  )
}

export default Teams
