import './TeamPage.css'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Footer from '../components/Footer/Footer'
import Image from './placeholder-300×225.jpeg'
import Layout from '../components/Layout/Layout'
import MembersCard from '../components/Cards/MembersCard/MembersCard'
import React from 'react'
import Row from 'react-bootstrap/Row'

export const TeamPage = () => {

    return (
        <div>
            <Layout />
            <Container>
                <Row>
                    <Col md={{ span:2, offset: 1 }}><img className='mid-img' src={ Image } alt=''/></Col>
                    <Col  md={{ offset: 2 }}>
                        <h1 className='sub-text'>Who are we ?</h1>
                        <p className='subscribe'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <ul className='items'>
                            <li id='item'>Benefit of Feature</li>
                            <li id='item'>Benefit of Feature</li>
                            <li id='item'>Benefit of Feature</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
                
            <MembersCard/>

            <footer>
                <Footer />
            </footer>

        </div>
    )
}
