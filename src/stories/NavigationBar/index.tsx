import 'bootstrap/dist/css/bootstrap.min.css'
import './NavigationBar.css'

import Link from 'next/link'
import { Container, Nav, Button, Navbar } from 'react-bootstrap'

import logo from 'assets/svg/logo.svg'

export const NavigationBar = (): JSX.Element => {
  return (
    <div className="header">
      <Navbar expand="sm" className="header__container">
        <Container fluid>
          <Link href="/">
            <Navbar.Brand>
              <img alt="" src={logo} className="logo align-center" />
              <span>GDSC Waseda</span>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item>
                <Link href="/">Home</Link>
              </Nav.Item>
              <Nav.Item>
                <Link href="/about">About</Link>
              </Nav.Item>
              <Nav.Item>
                <Link href="/teams">Teams</Link>
              </Nav.Item>
              <Nav.Item>
                <Link href="/events">Events</Link>
              </Nav.Item>
              <Nav.Item>
                <Button variant="outline-dark" disabled className="button">
                  <Link href="/forms">Join Us</Link>
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
