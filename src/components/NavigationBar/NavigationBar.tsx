import 'bootstrap/dist/css/bootstrap.min.css'
import './NavigationBar.css'

import { Container, Nav } from 'react-bootstrap'

import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import React from 'react'
import logo from 'assets/svg/logo.svg'

export const NavigationBar = () => {
  return (
    <div classNmae="header">
      <Navbar bg="light" expand="lg" className="fixed-top">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img alt="" src={logo} className="logo align-center" />
            <span>GDSC Waseda</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#team">Team</Nav.Link>
              <Nav.Link href="#events">Events</Nav.Link>
              <Button variant="outline-dark" className="join-btn">
                <Nav.Link href="#form">Join Us</Nav.Link>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar
