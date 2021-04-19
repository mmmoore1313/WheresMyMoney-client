import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

import { signIn } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Layout from '../shared/layout'

const SignIn = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  function setForm (key, value) {
    setFormData({ ...formData, [key]: value })
  }

  // handleChange = event => this.setState({
  //   [event.target.name]: event.target.value
  // })

  const { email, password } = formData

  const onSignIn = event => {
    event.preventDefault()
    const { email, password } = formData
    const { msgAlert, history, setUser } = props

    signIn({ email, password })
      .then(res => setUser(res.data.user))
      .then(() => msgAlert({
        heading: 'Sign In Success',
        message: messages.signInSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        setFormData({
          email: '',
          password: ''
        })
        msgAlert({
          heading: 'Sign In Failed with error: ' + error.message,
          message: messages.signInFailure,
          variant: 'danger'
        })
      })
  }

  return (
    <Layout>
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>Sign In</h3>
          <Form onSubmit={ onSignIn }>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                value={email}
                placeholder="Enter email"
                onChange={event => setForm('email', event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                name="password"
                value={password}
                type="password"
                placeholder="Password"
                onChange={event => setForm('password', event.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </Layout>
  )
}

export default withRouter(SignIn)
