import './MainCard.css'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from '../placeholder-300×225.jpeg'
import LogoLeft from './svg/logo-left.svg'
import LogoRight from './svg/logo-right.svg'
import React from 'react'
import Row from 'react-bootstrap/Row'

export const MainCard = () => {
    return (
        <div>
            <Card className="text-white">
                <Card.Img src={ Image } className="main-img"/>
                <Card.ImgOverlay className='overlay-component'>
                    <Card.Title className='card-title'>GDSC Waseda</Card.Title>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col md='auto'>
                                <img src={ LogoLeft } className='logo-left' alt='' />
                            </Col>
                            <Col md='auto'>
                                <Card.Text className='team-name'>
                                    Frontend Team
                                </Card.Text>
                            </Col>
                            <Col md='auto'>
                                <img src={ LogoRight } className='logo-right' alt='' />
                            </Col>
                        </Row>
                    </Container>
                    <p>
                        "We must hold our organizations accountable where they control <br/>
                        the doors by demanding clarity and tranparency around <br/>
                        succession planning." - Ruth Porat, CFO at Alptha
                    </p>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default MainCard
