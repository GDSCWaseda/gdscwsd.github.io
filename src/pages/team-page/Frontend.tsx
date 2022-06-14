import '../TeamPage.css'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import MainCard from '../../components/Cards/MainCard/MainCard'
import Image from '../../assets/img/placeholder.jpeg'
import MembersCard from '../../components/Cards/MembersCard/MembersCard'
import React from 'react'
import Row from 'react-bootstrap/Row'

export const FrontendTeamPage = (): JSX.Element => {
  const card = {
    team: 'FrontendTeamPage'
  }

  const members = {
    teamName: 'Frontend Team',
    leader: { name: 'FirstName LastName' },
    member: [
      { name: 'FirstName LastName' },
      { name: 'FirstName LastName' },
      { name: 'FirstName LastName' },
      { name: 'FirstName LastName' },
      { name: 'FirstName LastName' },
      { name: 'FirstName LastName' },
      { name: 'FirstName LastName' },
      { name: 'FirstName LastName' },
      { name: 'FirstName LastName' },
      { name: 'FirstName LastName' },
      { name: 'FirstName LastName' },
      { name: 'FirstName LastName' },
      { name: 'FirstName LastName' },
      { name: 'FirstName LastName' },
      { name: 'FirstName LastName' },
      { name: 'FirstName LastName' }
    ]
  }
  return (
    <div>
      <MainCard props={card} />
      <Container>
        <Row lg={2} className="py-5">
          <Col className="d-flex">
            <img className="mx-auto mid-img float-lg-end" src={Image} alt="" />
          </Col>
          <Col className="px-4 py-5">
            <h1 className="sub-text">Who are we ?</h1>
            <p className="subscribe">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="items">
              <li id="item">Benefit of Feature</li>
              <li id="item">Benefit of Feature</li>
              <li id="item">Benefit of Feature</li>
            </ul>
          </Col>
        </Row>
      </Container>

      <MembersCard props={members} />
    </div>
  )
}

export default FrontendTeamPage
