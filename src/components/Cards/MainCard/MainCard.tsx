import './MainCard.css'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import LogoLeft from 'assets/svg/logo-left.svg'
import LogoRight from 'assets/svg/logo-right.svg'
import React from 'react'
import Row from 'react-bootstrap/Row'
import { MainCardProps } from '~/types/index'

export const MainCard: React.FC<{ props: MainCardProps }> = ({ props }) => {
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
              <Card.Text className="team-name">{props.teamName}</Card.Text>
            </Col>
            <Col xs="auto">
              <img src={LogoRight} className="logo-right" alt="" />
            </Col>
          </Row>
        </Container>
        <p>{props.explanation}</p>
      </Card>
    </div>
  )
}

export default MainCard
