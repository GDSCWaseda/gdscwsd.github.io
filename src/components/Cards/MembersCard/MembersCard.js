import './MembersCard.css'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from '../placeholder.jpeg'
import { Link } from 'react-router-dom'
import React from 'react'
import Row from 'react-bootstrap/Row'

export const MembersCard = ({ props }) => {
  return (
    <div>
      <h1 className="title">Members</h1>
      <h2 className="sub-title">TeamName Lead</h2>
      <Container fluid="md" className="leader justify-content-center">
        <Link to="members">
          <Card className="card-frame col-md-auto ">
            <Card.Img id="card-img" variant="top" src={Image} />
            <Card.Body>
              <Card.Title id="title">{props.leader.name} </Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </Container>

      <Container fluid="md" className="members justify-content-center">
        {' '}
        {/* 'MembersCard'16枚分を1つのオブジェクトとしてグループ化 */}
        <Row xs={2} md={4} className="g-4">
          {props.member.map((member) => (
            <Col>
              <Link to="members">
                <Card className="card-frame mx-auto">
                  <Card.Img id="card-img" variant="top" src={Image} />
                  <Card.Body>
                    <Card.Title id="title">{member.name}</Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default MembersCard
