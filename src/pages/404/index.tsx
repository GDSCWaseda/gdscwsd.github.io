import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Button from 'react-bootstrap/Button'

export const ErrorPage: NextPage<{ text?: string }> = ({ text }) => {
  const router = useRouter()

  const message = (text: string) => {
    switch (text) {
      case 'dev':
        return 'This page is under development'
      default:
        return "This page doesn't exist"
    }
  }

  console.log(router.pathname)

  return (
    <div className="error">
      <div className="error__container">
        <h1 className="error__title">
          We're sorry, but there seems to be a problem
        </h1>
        <h2 className="error__detail">{text && message(text)}</h2>
        <Button className="error__button">
          <Link href="/">Go back to Home</Link>
        </Button>
      </div>
    </div>
  )
}

export default ErrorPage
