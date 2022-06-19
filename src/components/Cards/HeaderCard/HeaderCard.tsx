import './HeaderCard.css'

import React from 'react'

import { Col, Row, Container, Card } from 'react-bootstrap'

import LogoLeft from 'assets/svg/logo-left.svg'
import LogoRight from 'assets/svg/logo-right.svg'

import { HeaderCardProps } from '~/types/index'

export const HeaderCard: React.FC<{ props: HeaderCardProps }> = ({ props }) => {
  return (
    <Card className="main-card">
      <Card.Title className="card-title">{props.headTitle}</Card.Title>
      <Container>
        <Row className="justify-content-center">
          <Col xs="auto">
            <img src={LogoLeft} className="logo-left" alt="" />
          </Col>
          <Col xs="auto">
            <Card.Text className="team-name">{props.title}</Card.Text>
          </Col>
          <Col xs="auto">
            <img src={LogoRight} className="logo-right" alt="" />
          </Col>
        </Row>
      </Container>
      {props.content.split('\n').map((text, key) => (
        <p key={key}>{text}</p>
      ))}
    </Card>
  )
}

export default HeaderCard
