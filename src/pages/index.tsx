import type { NextPage } from 'next'

import CommonMeta from 'components/CommonMeta'
import styles from 'styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <CommonMeta />
      <div className={styles.container}>HomePage</div>
    </>
  )
}

export default Home
