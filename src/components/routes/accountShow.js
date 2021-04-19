import React, { Component, Fragment } from 'react'
import Spinner from 'react-bootstrap/Spinner'
// import withRouter to use the match router prop
import { withRouter, Redirect, Link } from 'react-router-dom'
import { Button, Row, Col, Container } from 'react-bootstrap'
import { accountShow, accountDelete } from '../../api/accounts'

class AccountShow extends Component {
  constructor (props) {
    super(props)

    this.state = {
      account: {
        name: '',
        type: '',
        amount: null
      },
      deleted: false
    }
  }
  componentDidMount () {
    const { match, msgAlert, user } = this.props
    // const { account } = this.state

    accountShow(match.params.id, user)
      .then(res => this.setState({ account: res.data.account }))
      .then(() => msgAlert({
        heading: 'Well take a look at this lonely account',
        message: `Here is the money in ${this.state.account.name}.`,
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: `Cannot view ${this.state.account.name}`,
          message: `Cannot pull up information for ${this.state.account.name}. Checkout error: ` + error.message,
          variant: 'danger'
        })
      })
  }
  handleDelete = event => {
    const { user, msgAlert, match } = this.props
    const { account } = this.state
    accountDelete(match.params.id, user)
      .then(() => this.setState({ deleted: true }))
      .then(res => msgAlert({
        heading: `${account.name} deleted`,
        message: `You will not be able to manage ${account.name} again`,
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: `Failed to Delete ${account.name}`,
          message: `Could not delete ${account.name} with error: ` + error.message,
          variant: 'danger'
        })
      })
  }
  render () {
    const { account, deleted } = this.state
    const { name, amount, id } = account
    if (!account) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }
    if (deleted) {
      return <Redirect to="/accounts/" />
    }
    // const depositJsx = account.deposits.map(deposit => (
    //   <tr key={deposit.deposit}>
    //     <td>Deposits</td>
    //     <td>${deposit.recent}</td>
    //     <td>${deposit.month}</td>
    //     <td>${deposit.year}</td>
    //   </tr>
    // ))
    //
    // const expenseJsx = account.expenses.map(expense => (
    //   <tr key={expense.expense}>
    //     <td>Expenses</td>
    //     <td>${expense.recent}</td>
    //     <td>${expense.month}</td>
    //     <td>${expense.year}</td>
    //   </tr>
    // ))

    return (
      <Fragment>
        <Container className='justify-content-center'>
          <h3>{name}</h3>
          <Row>
            <Col><h4>Current Balance: ${amount}</h4></Col>
            <Col><h4>accountID: {id}</h4></Col>
          </Row>
          {/* <Table striped bordered hover>
            <thead>
              <tr>
                <th></th>
                <th>Last Transaction</th>
                <th>Monthly Total</th>
                <th>YTD</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Deposits</td>
                <td>This will show most recent deposit</td>
                <td>This will show the total deposits this month</td>
                <td>This will show YTD deposits</td>
              </tr>
              <tr>
                <td>Expenses</td>
                <td>This will show most recent expenses</td>
                <td>This will show the total expenses this month</td>
                <td>This will show YTD expenses</td>
              </tr>
            </tbody>
          </Table> */}
          <Row>
            <Col><Button onClick={this.handleDelete}>Delete account</Button></Col>
            <Col>
              <Link to={`/accounts/${id}/edit`}>
                <Button renderas='button'>
                  Edit {name} Basics
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}
export default withRouter(AccountShow)
