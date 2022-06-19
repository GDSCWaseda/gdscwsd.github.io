import './HomePage.css'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from './homepageTop.png'
import React from 'react'
import Row from 'react-bootstrap/Row'
import MainCard from 'components/Cards/MainCard/MainCard'
import MembersCard from '~/components/Cards/MembersCard/MembersCard'

// interface member {
//   firstName: string
//   lastName?: string
//   photo_link?: string = placeholder.jpg
// }

// interface leader {extend member}
export const HomePage: React.FC = () => {
    const card: { team: string } = {
        team: 'HomePage'
    }
    const buttonStyles: React.CSSProperties = {
        backgroundColor: '#00bcd4',
        borderRadius: '5px',
        border: 'none',
        color: 'white',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    }

    return (
        <div>
            <Container>
                <Row lg={2} className="py-5">
                    <Col className="px-4 py-5">
                        <h1 className="sub-text">Change the World</h1>
                        <p className="join-us"> Join us </p>
                    </Col>
                    <Col className="d-flex">
                        <img className="mx-auto mid-img float-lg-end" src={Image} alt="" />
                    </Col>

                </Row>
            </Container>

        </div>
    )
}

export default HomePage     