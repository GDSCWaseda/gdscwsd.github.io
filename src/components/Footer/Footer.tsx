import './Footer.css'

import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import logo from '../../assets/svg/logo.svg'
import Google from '../../assets/svg/google.svg'
import Instagram from '../../assets/svg/instagram.svg'
import LinkedIn from '../../assets/svg/linked-in.svg'

export const Footer = () => {
  return (
    <footer>
      <Container className="logo-pos">
        <div className="d-flex justify-content-center">
          <img className="footer-logo" src={logo} alt="" />
        </div>
      </Container>

      <Container>
        <div className="d-flex justify-content-center">
          <Link to="members" className="tag">
            {' '}
            {/* Define the linked page */}
            About
          </Link>
          <Link to="members" className="tag">
            {' '}
            {/* Define the linked page */}
            Teams
          </Link>
          <Link to="members" className="tag">
            {' '}
            {/* Define the linked page */}
            Events
          </Link>
        </div>
      </Container>

      <hr />

      <Container className="icon-pos">
        <div className="d-flex justify-content-center">
          <Link to="members" className="icon-tag">
            {' '}
            {/* Define the linked page */}
            <img src={Google} alt="" />
          </Link>
          <Link to="members" className="icon-tag">
            {' '}
            {/* Define the linked page */}
            <img src={Instagram} alt="" />
          </Link>
          <Link to="members" className="icon-tag">
            {' '}
            {/* Define the linked page */}
            <img src={LinkedIn} alt="" />
          </Link>
        </div>
      </Container>

      <div className="copy-right text-center p-3">All Rights Reserved by GDSC Waseda</div>
    </footer>
  )
}

export default Footer
