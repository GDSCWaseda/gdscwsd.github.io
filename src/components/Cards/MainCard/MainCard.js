import './MainCard.css'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import LogoLeft from './svg/logo-left.svg'
import LogoRight from './svg/logo-right.svg'
import React from 'react'
import Row from 'react-bootstrap/Row'

export const MainCard = ({ props }) => {
  return (
    <div id="main-card">
      <Card className="main-card">
        <Card.Title className="card-title">GDSC Waseda</Card.Title>
        <Container>
          <Row className="justify-content-center">
            <Col xs="auto">
              <img src={LogoLeft} className="logo-left" alt="" />
            </Col>
            <Col xs="auto">
              <Card.Text className="team-name">{props.team}</Card.Text>
            </Col>
            <Col xs="auto">
              <img src={LogoRight} className="logo-right" alt="" />
            </Col>
          </Row>
        </Container>
        <p>
          "We must hold our organizations accountable where they control <br />
          the doors by demanding clarity and tranparency around <br />
          succession planning." - Ruth Porat, CFO at Alptha
        </p>
      </Card>
    </div>
  )
}

export default MainCard
