import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Spinner, Table, Row, Col, Button, Nav, Container } from 'react-bootstrap'
import { accountIndex } from '../../api/accounts.js'

class AccountIndex extends Component {
  constructor (props) {
    super(props)

    this.state = {
      accounts: null
    }
  }

  componentDidMount () {
    const { msgAlert, user } = this.props

    accountIndex(user)
      .then(res => this.setState({ accounts: res.data.accounts }))
      .then(() => msgAlert({
        heading: 'Your accounts, boss',
        message: 'All accounts listed. Click on one to view it in greater detail.',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed to Load Accounts!',
          message: 'Your accounts may still be here, but checkout: ' + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    const { accounts } = this.state
    if (!accounts) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }
    const accountsJsx = accounts.map(account => (
      <tr key={account.id}>
        <td>{account.id}</td>
        <td>
          <Link to={`/accounts/${account.id}/`} key={account.id}>
            {account.name}
          </Link>
        </td>
        <td>
          ${account.amount}
        </td>
        {/* <td>
          <Nav.Link href=''>
            <Button>
              Income
            </Button>
          </Nav.Link>
          <Nav.Link href=''>
            <Button>
              Expense
            </Button>
          </Nav.Link>
        </td> */}
      </tr>
    ))

    return (
      <Container>
        <Row className='justify-content-center'>
          <Col><Nav.Link href="#/">
            <Button>
              Home
            </Button>
          </Nav.Link></Col>
          <Col><h3>Accounts</h3></Col>
          <Col><Nav.Link href="#create-account">
            <Button>
              Add Account
            </Button>
          </Nav.Link></Col>
        </Row>
        <Row className='justify-content-center'>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Account ID</th>
                <th>Account Name</th>
                <th>Balance</th>
                {/* <th>Options</th> */}
              </tr>
            </thead>
            <tbody>
              {accountsJsx}
            </tbody>
          </Table>
        </Row>
      </Container>
    )
  }
}

export default AccountIndex
