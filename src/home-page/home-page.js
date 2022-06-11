import './home-page.css'

import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'assets/svg/HomePage.svg'
//import { Nav } from 'react-bootstrap'
import React from 'react'
import Row from 'react-bootstrap/Row'

export const HomePage = () => {
  return (
    <div>
       <div className='test'>HomePage</div>
       <img src={ Image }/>

       <Container>
        <Row lg={2} className="py-5">
          <Col className="px-4 py-5">
            <h1 className="sub-text">Change <br/>the World</h1>
            <Button href="#form" className='seconde rounded-pill' variant="outline-dark" size="lg">
                Join Us
            </Button>

          </Col>
          <Col className="d-flex">
            <img className="mx-auto mid-img float-lg-start" src={Image} alt="" />
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default HomePage