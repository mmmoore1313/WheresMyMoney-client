import React, { Fragment } from 'react'
import { Nav, Navbar, Dropdown, DropdownButton } from 'react-bootstrap'

const authenticatedOptions = (
  <Fragment>
    <DropdownButton id='userMenu' title='User Options'>
      <Dropdown.Item href="#change-password">Change Password</Dropdown.Item>
      <Dropdown.Item href="#sign-out">Sign Out</Dropdown.Item>
    </DropdownButton>
    <DropdownButton id='accountsMenu' title='Account Options'>
      <Dropdown.Item href="#create-account">Add Account</Dropdown.Item>
      <Dropdown.Item href="#accounts">View All Accounts</Dropdown.Item>
    </DropdownButton>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#/">Home</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg="primary" variant="dark" expand="md">
    <Navbar.Brand href="#">
      WheresMyMoney
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
