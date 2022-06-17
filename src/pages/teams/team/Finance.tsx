import '../TeamsPage.css'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import MainCard from 'components/Cards/MainCard/MainCard'
import Image from 'assets/img/placeholder.jpeg'
import MembersCard from 'components/Cards/MembersCard/MembersCard'
import React from 'react'
import Row from 'react-bootstrap/Row'
import { MainCardProps, MembersCardProps } from '~/types/components'

export const FinanceTeamPage = () => {
  const card: MainCardProps = {
    teamName: 'FinanceTeamPage',
    explanation:
      '"We must hold our organizations accountable where they control the doors by demanding clarity and tranparency around succession planning." - Ruth Porat, CFO at Alptha'
  }

  const teamMembers: MembersCardProps = {
    teamName: 'Finance Team',
    leader: {
      firstName: 'FirstName',
      lastName: 'LastName',
      photo_link: ''
    },
    member: [
      {
        firstName: 'FirstName',
        lastName: 'LastName',
        photo_link: ''
      },
      {
        firstName: 'FirstName',
        lastName: 'LastName',
        photo_link: ''
      },
      {
        firstName: 'FirstName',
        lastName: 'LastName',
        photo_link: ''
      },
      {
        firstName: 'FirstName',
        lastName: 'LastName',
        photo_link: ''
      },
      {
        firstName: 'FirstName',
        lastName: 'LastName',
        photo_link: ''
      },
      {
        firstName: 'FirstName',
        lastName: 'LastName',
        photo_link: ''
      },
      {
        firstName: 'FirstName',
        lastName: 'LastName',
        photo_link: ''
      },
      {
        firstName: 'FirstName',
        lastName: 'LastName',
        photo_link: ''
      },
      {
        firstName: 'FirstName',
        lastName: 'LastName',
        photo_link: ''
      },
      {
        firstName: 'FirstName',
        lastName: 'LastName',
        photo_link: ''
      },
      {
        firstName: 'FirstName',
        lastName: 'LastName',
        photo_link: ''
      },
      {
        firstName: 'FirstName',
        lastName: 'LastName',
        photo_link: ''
      },
      {
        firstName: 'FirstName',
        lastName: 'LastName',
        photo_link: ''
      },
      {
        firstName: 'FirstName',
        lastName: 'LastName',
        photo_link: ''
      },
      {
        firstName: 'FirstName',
        lastName: 'LastName',
        photo_link: ''
      }
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

      <MembersCard props={teamMembers} />
    </div>
  )
}

export default FinanceTeamPage
