import 'bootstrap/dist/css/bootstrap.min.css'
import './NavigationBar.css'

import { Container, Nav } from 'react-bootstrap'

import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import React from 'react'
import logo from './logo.svg'

export const NavigationBar = () => {

    return (
        <div classNmae="header">
            <Navbar bg="light" expand="lg" className="fixed-top">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img alt="" src={ logo }  className="logo align-center"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className="text-link">Home</Nav.Link>
                        <Nav.Link href="#link" className="text-link">About</Nav.Link>
                        <Nav.Link href="#team" className="text-link">Team</Nav.Link>
                        <Nav.Link href="#events" className="text-link">Events</Nav.Link>
                        <Button variant="outline-dark" className="btn-link rounded-pill">
                            <Nav.Link href="#form" className="btn-text-link">Join Us</Nav.Link>
                        </Button>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar