import React, { useState } from 'react'
import './Form.scss'

const FORM_ENDPOINT =
  'https://public.herotofu.com/v1/bcac8350-3a93-11ee-aa48-0d756f031946' // TODO - update to the correct endpoint

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()

    const inputs = e.target.elements
    const data = {}

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok')
        }

        setSubmitted(true)
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit()
      })
  }

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    )
  }

  return (
    <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method='POST'>
      <div className='formContainer'>
        <div>
          <input
            type='text'
            placeholder='Your name'
            name='name'
            className='inputField'
            required
          />
        </div>
        <div>
          <input
            type='email'
            placeholder='Email'
            name='email'
            className='inputField'
            required
          />
        </div>
        <div>
          <textarea
            placeholder='Your message'
            name='message'
            required
            className='textField'
          />
        </div>
        <div>
          <button type='submit'> Send a message </button>
        </div>
      </div>
    </form>
  )
}

export default ContactForm
