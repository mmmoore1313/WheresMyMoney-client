import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { accountCreate } from '../../api/accounts.js'
import { Container, Form, Button } from 'react-bootstrap'

class CreateAccount extends Component {
  // const [formData, setFormData] = useState({
  //   account: {
  //     name: '',
  //     type: '',
  //     amount: null
  //   },
  //   accountId: null
  // })
  //
  // function setForm (key, value) {
  //   setFormData({ ...formData, [key]: value })
  // }
  constructor (props) {
    super(props)
    this.state = {
      account: {
        name: '',
        type: '',
        amount: null
      },
      accountId: null
    }
  }
  // const { name, type, amount } = formData

  handleSubmit = event => {
    event.preventDefault()
    // const { msgAlert, user, setAccount } = props

    const { user, msgAlert } = this.props
    const { account } = this.state

    accountCreate(account, user)
      .then(res => {
        this.setState({ accountId: res.data.account.id })
        return res
      })
      .then(res => msgAlert({
        heading: `${res.data.account.name} Created`,
        message: `There is $${res.data.account.amount} in  ${res.data.account.name}`,
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Could Not Create Account',
          message: 'Account could not be opened due to: ' + error.message,
          variant: 'danger'
        })
      })
  }

  handleChange = event => {
    event.persist()

    this.setState(state => {
      return {
        account: { ...state.account, [event.target.name]: event.target.value }
      }
    })
  }
  render () {
    const { name, type, amount, accountId } = this.state

    if (accountId) {
      return <Redirect to={`/accounts/${accountId}/`} />
    }

    return (
      <Container className='justify-content-center'>
        <Form onSubmit={this.handleSubmit}>
          <h2>Make an Account</h2>
          <Form.Group>
            <Form.Label>Account Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="name"
              value={name}
              placeholder="Enter Account name"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Account Type</Form.Label>
            <Form.Control
              required
              name="type"
              value={type}
              type="text"
              placeholder="Choose Account Type"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Starting Value</Form.Label>
            <Form.Control
              required
              name="amount"
              value={amount}
              type="num"
              placeholder="Account Starting Amount"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
          >
          Submit
          </Button>
        </Form>
      </Container>
    )
  }
}

export default CreateAccount
