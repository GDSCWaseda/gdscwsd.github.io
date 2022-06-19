import 'bootstrap/dist/css/bootstrap.min.css'
import './NavigationBar.css'

import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Nav, Button, Navbar } from 'react-bootstrap'

import logo from 'assets/svg/logo.svg'

export const NavigationBar = (): JSX.Element => {
  return (
    <div className="header">
      <Navbar bg="light" expand="lg" className="fixed-top">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">
              <img alt="" src={logo} className="logo align-center" />
              <span>GDSC Waseda</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item>
                <Link to="/">Home</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/about">About</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/teams">Teams</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/events">Events</Link>
              </Nav.Item>
              <Nav.Item>
                <Button variant="outline-dark" className="button">
                  <Link to="/forms">Join Us</Link>
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar
