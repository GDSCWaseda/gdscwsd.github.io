import 'bootstrap/dist/css/bootstrap.min.css'

import Image from 'next/image'
import Link from 'next/link'
import { Container, Nav, Button, Navbar } from 'react-bootstrap'

import styles from './NavigationBar.module.scss'

import logo from 'assets/svg/logo.svg'

export const NavigationBar = (): JSX.Element => {
  return (
    <div className={styles.header}>
      <Navbar expand="sm" className={styles.header__container}>
        <Container fluid>
          <Navbar.Brand>
            <Link href="/">
              <div className={styles.logo}>
                <Image alt="" src={logo} layout="intrinsic" />
                <span>GDSC Waseda</span>
              </div>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className={styles.navbarCollapse}
          >
            <Nav className="ms-auto">
              <Nav.Item className={styles.navItem}>
                <Link href="/">Home</Link>
              </Nav.Item>
              <Nav.Item className={styles.navItem}>
                <Link href="/about">About</Link>
              </Nav.Item>
              <Nav.Item className={styles.navItem}>
                <Link href="/teams">Teams</Link>
              </Nav.Item>
              <Nav.Item className={styles.navItem}>
                <Link href="/events">Events</Link>
              </Nav.Item>
              <Nav.Item className={styles.navItem}>
                <Button
                  variant="outline-dark"
                  disabled
                  className={styles.button}
                >
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
