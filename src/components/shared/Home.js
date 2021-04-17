import React from 'react'
// import { withRouter } from 'react-router-dom'
import { Row, Col, Button, Nav } from 'react-bootstrap'
import Layout from '../shared/layout'
// const authenticatedOptions
// const unauthenticatedOptions
// const alwaysOptions

const Home = ({ user }) => {
  return (
    <Layout>
      <h1>Hello!</h1>
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
    </Layout>
  )
}

export default Home
