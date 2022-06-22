import 'bootstrap/dist/css/bootstrap.min.css'
import 'components/NavigationBar/NavigationBar.css'

import React from 'react'
import { Link, MemoryRouter } from 'react-router-dom'

import { Container, Nav, Button, Navbar } from 'react-bootstrap'

import logo from 'assets/svg/logo.svg'
import { ComponentStory, ComponentMeta } from '@storybook/react'

const NavigationBar = (): JSX.Element => {
  return (
    <div className="header">
      <Navbar expand="sm" className="header__container">
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
                <Button variant="outline-dark" disabled className="button">
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

const Template: ComponentStory<typeof NavigationBar> = _1 => <NavigationBar />

export const Default = Template.bind({})
Default.args = {}

export default {
  title: 'Global Components/Navigation Bar',
  component: NavigationBar,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
} as ComponentMeta<typeof NavigationBar>
