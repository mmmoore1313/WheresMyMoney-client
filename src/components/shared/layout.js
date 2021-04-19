import React, { Fragment } from 'react'
import Header from './Header'
import Footer from './footer.js'
// import BPane from './buttonPane.js'
import { Card, Container } from 'react-bootstrap'

const Layout = (props, { user }) => (
  <Fragment>
    <Header user={ user } />
    <Container>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          {props.children}
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
    </Container>
    <Footer />
  </Fragment>
)

export default Layout
