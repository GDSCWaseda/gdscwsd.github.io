/* eslint-disable no-useless-escape */
import './FeedbackForm.css'

import React, { useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

export const FeedbackForm: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [messageError, setMessageError] = useState('')

  const emailRegex = /\S+@\S+\.\S+/

  const canSubmit =
    name !== '' &&
    email !== '' &&
    message !== '' &&
    messageError === '' &&
    emailError === '' &&
    nameError === ''
  const checkName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    e.target.value === '' ? setNameError('Please Enter Name') : setNameError('')
  }
  const checkEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)

    e.target.value === '' || !emailRegex.test(email)
      ? setEmailError('Please Enter Proper Email')
      : setEmailError('')
  }
  const checkMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
    e.target.value === ''
      ? setMessageError('Empty Feedbacks')
      : setEmailError('')
  }

  const onSubmit = () => {
    // TODO: Send to Email
    const formData: {
      name: string
      email: string
      message: string
    } = {
      name,
      email,
      message
    }
    console.log(formData)
  }

  return (
    <div className="feedback-form">
      <div className="feedback-form__title">FeedBack Form</div>
      <div className="feedback-form__description">FeedBack Description</div>
      <form className="feedback-form__container">
        <div className="feedback-form__items">
          <div className="feedback-form__item-name">Name</div>
          <TextField
            required
            error={nameError !== ''}
            fullWidth
            label="Nickname"
            value={name}
            onChange={checkName}
            helperText={nameError}
            className="feedback-form__item-input"
          />
        </div>
        <div className="feedback-form__items">
          <div className="feedback-form__item-name">Reply Method</div>
          <TextField
            required
            error={emailError !== ''}
            fullWidth
            label="Email"
            value={email}
            onChange={checkEmail}
            type="email"
            helperText={emailError}
            className="feedback-form__item-input"
          />
        </div>
        <div className="feedback-form__items">
          <div className="feedback-form__item-name">Feedbacks</div>
          <TextField
            required
            error={messageError !== ''}
            fullWidth
            multiline
            rows={20}
            label="Write Feedback Here"
            value={message}
            onChange={checkMessage}
            helperText={messageError}
            className="feedback-form__item-input"
          />{' '}
        </div>
      </form>
      <Box textAlign="end">
        <Button
          variant="outlined"
          onClick={onSubmit}
          disabled={!canSubmit}
          color={canSubmit ? 'success' : 'error'}
        >
          Send
        </Button>
      </Box>
    </div>
  )
}

export default FeedbackForm
