import React, { Fragment } from 'react'
// import { withRouter } from 'react-router-dom'
import { Row, Col, Button, Nav, Container } from 'react-bootstrap'
// import Layout from '../shared/layout'
// import AccountIndex from '../routes/accountIndex.js'

const authenticatedChoices = (
  <Fragment>
    <Row className='justify-content-center'>
      <Col>
        <Nav.Link href="#create-account">
          <Button>
            Create Account
          </Button>
        </Nav.Link>
      </Col>
    </Row>
    <Row className='justify-content-center'>
      <Col>
        <Nav.Link href="#accounts">
          <Button>
            Accounts
          </Button>
        </Nav.Link>
      </Col>
    </Row>
  </Fragment>
)
const unauthenticatedChoices = (
  <Fragment>
    <Row className='justify-content-center'>
      <Col>
        <Nav.Link href="#sign-up">
          <Button>
            SignUp
          </Button>
        </Nav.Link>
      </Col>
    </Row>
    <Row className='justify-content-center'>
      <Col>
        <Nav.Link href="#sign-in">
          <Button>
            SignIn
          </Button>
        </Nav.Link>
      </Col>
    </Row>
  </Fragment>
)

const authenticatedTitle = (
  <Fragment>
    <Row className='justify-content-center'><h2>Welcome Back!</h2></Row>
  </Fragment>
)

const unauthenticatedTitle = (
  <Fragment>
    <Row className='justify-content-center'><h2>Welcome!</h2></Row>
    <Row className='justify-content-center text-center'>
      <p>
        Welcome to WheresMy Money! The personal finace tracking App!
      </p>
    </Row>
  </Fragment>
)

const Home = ({ user }) => (
  <Container fluid className='justify-content-center'>
    { user ? authenticatedTitle : unauthenticatedTitle}
    <Row className='justify-content-center'>
      { user ? authenticatedChoices : unauthenticatedChoices }
    </Row>
  </Container>
)

export default Home
