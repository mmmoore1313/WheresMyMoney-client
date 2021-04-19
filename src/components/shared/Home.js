import React, { Fragment } from 'react'
// import { withRouter } from 'react-router-dom'
import { Row, Col, Button, Nav } from 'react-bootstrap'
// import Layout from '../shared/layout'
// import AccountIndex from '../../routes/accountIndex.js'

const authenticatedChoices = (
  <Fragment>
    <div>
      <Row>
        <Col>
          <Nav.Link href="#sign-out">
            <Button>
              Sign-out
            </Button>
          </Nav.Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <Nav.Link href="#change-password">
            <Button>
              Change Password
            </Button>
          </Nav.Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <Nav.Link href="#create-account">
            <Button>
              Create Account
            </Button>
          </Nav.Link>
          <Nav.Link href="#accounts">
            <Button>
              Accounts
            </Button>
          </Nav.Link>
        </Col>
      </Row>
    </div>
    {/* <AccountIndex /> */}
  </Fragment>
)
const unauthenticatedChoices = (
  <Fragment>
    <Row>
      <Col>
        <Nav.Link href="#sign-up">
          <Button>
            SignUp
          </Button>
        </Nav.Link>
      </Col>
    </Row>
    <Row>
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
// const alwaysOptions

const Home = ({ user }) => (
  <Fragment>
    <h1>Hello!</h1>
    { user ? authenticatedChoices : unauthenticatedChoices }
  </Fragment>
)

export default Home
