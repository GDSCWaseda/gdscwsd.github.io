import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Button from 'react-bootstrap/Button'

import styles from './404.module.scss'

export const ErrorPage: NextPage = () => {
  const router = useRouter()

  const message = (text: string) => {
    switch (text) {
      case 'error':
        return "This page doesn't exist"
      case 'dev':
        return 'This page is under development'
      default:
        return text
    }
  }

  console.log(router.pathname)

  return (
    <div className={styles.error}>
      <div className={styles.error__container}>
        <h1 className={styles.error__title}>
          We're sorry, but there seems to be a problem
        </h1>
        <h2 className={styles.error__detail}>{"This page doesn't exist"}</h2>
        <Button className={styles.error__button}>
          <Link href="/">Go back to Home</Link>
        </Button>
      </div>
    </div>
  )
}

export default ErrorPage
