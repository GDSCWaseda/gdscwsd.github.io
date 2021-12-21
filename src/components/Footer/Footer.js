import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Google from './svg/google.svg'
import Instagram from './svg/instagram.svg'
import { Link } from 'react-router-dom'
import LinkedIn from './svg/linked-in.svg'
import React from 'react'
import Row from 'react-bootstrap/Row'
import logo from './svg/logo.svg'

export const Footer = () => {
    return (
        <div>
            <Container className='logo-pos'>
                <Col md={{ span: 6, offset: 6 }}>
                    <img className='footer-logo' src={ logo } alt=''/>
                </Col>
                </Container>

                <Container>
                    <Row className="justify-content-center">
                        <Col id='tag' md="auto">
                            <Link to='members'> {/* Define the linked page */}
                                About
                            </Link>
                        </Col>
                        <Col id='tag' md="auto">
                            <Link to='members'> {/* Define the linked page */}
                                Teams
                            </Link>
                        </Col>
                        <Col id='tag' md="auto">
                            <Link to='members'> {/* Define the linked page */}
                                Events
                            </Link>
                        </Col>
                    </Row>
                </Container>

                <hr/>

                <Container className='icon-pos'>
                    <Row className="justify-content-center">
                        <Col id='icon-tag' md="auto">
                            <Link to='members'> {/* Define the linked page */}
                                <img src={ Google } alt=''/>
                            </Link>
                        </Col>
                        <Col id='icon-tag' md="auto">
                            <Link to='members'> {/* Define the linked page */}
                                <img src={ Instagram } alt=''/>
                            </Link>
                        </Col>
                        <Col id='icon-tag' md="auto">
                            <Link to='members'> {/* Define the linked page */}
                            <img src={ LinkedIn } alt=''/>
                            </Link>
                        </Col>
                    </Row>
                </Container>

                <div class="copy-right text-center p-3">
                    All Rights Reserved by GDSC Waseda
                </div>  
        </div>
    )
}

export default Footer
