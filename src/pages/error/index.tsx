import './ErrorPage.css'

import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button'

import { ErrorPageProps } from '~/types/index'

export const ErrorPage: React.FC<{ props: ErrorPageProps }> = ({ props }) => {
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

  return (
    <div className="error">
      <div className="error__container">
        <h1 className="error__title">
          We're sorry, but there seems to be a problem
        </h1>
        <h2 className="error__detail">{message(props.detail.toString())}</h2>
        <Button className="error__button">
          <Link to="/">Go back to Home</Link>
        </Button>
      </div>
    </div>
  )
}

export default ErrorPage
