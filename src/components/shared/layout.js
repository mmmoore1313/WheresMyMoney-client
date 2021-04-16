import React, { Fragment } from 'react'
import Header from './Header'
// import Footer from './footer'
// import BPane from './buttonPane.js'
import { Card, Container } from 'react-bootstrap'

const Layout = (props) => (
  <Fragment>
    <Header />
    <Container>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          {props.children}
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
    </Container>
    {/* <Footer /> */}
  </Fragment>
)

export default Layout
