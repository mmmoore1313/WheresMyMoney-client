import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { accountUpdate, accountShow } from '../../api/accounts'
import { Form, Button, Spinner } from 'react-bootstrap'

class AccountUpdate extends Component {
  constructor () {
    super()
    this.state = {
      account: null,
      updated: false
    }
  }

  componentDidMount () {
    const { user, match, msgAlert } = this.props

    accountShow(match.params.id, user)
      .then(res => this.setState({ account: res.data.account }))
      .then(() => msgAlert({
        heading: 'It is late! I have run out of humor...',
        message: 'Your Account hath been changed ¯|(ツ)/¯',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Your account was... lost',
          message: 'We could not change your account ' + error.message,
          variant: 'danger'
        })
      })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { user, match, msgAlert } = this.props
    const { account } = this.state

    accountUpdate(match.params.id, account, user)
      .then(res => this.setState({ updated: true }))
      .then(() => {
        msgAlert({
          heading: 'Account changed!',
          message: 'You have changed something..',
          variant: 'success'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Hmmm',
          message: 'I cannot figure out what you are tring to change. Here is why:' + err.message,
          variant: 'danger'
        })
      })
  }

  handleChange = event => {
    this.setState({ account: { ...this.state.account, [event.target.name]: event.target.value } })
  }

  render () {
    const { account, updated } = this.state

    if (!account) {
      return (
        <Spinner animation='border' role='status'>
          <span className='sr-only'>
            Changing times...
          </span>
        </Spinner>
      )
    }

    if (updated) {
      return <Redirect to={`/accounts/${this.props.match.params.id}/`} />
    }

    return (
      <Form onSubmit={this.handleSubmit}>
        <h2>Edit Account Details</h2>
        <Form.Group>
          <Form.Label>Account Name</Form.Label>
          <Form.Control
            type='text'
            name='name'
            value={account.name}
            placeholder='What is this new account name?'
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Type</Form.Label>
          <Form.Control
            type='text'
            name='type'
            value={account.type}
            placeholder='What is the new account type?'
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Initial Balance</Form.Label>
          <Form.Control
            type='num'
            name='amount'
            value={account.amount}
            placeholder='What is the new account value?'
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button
          variant='primary'
          type='submit'
        >
          Submit
        </Button>
      </Form>
    )
  }
}

export default withRouter(AccountUpdate)
