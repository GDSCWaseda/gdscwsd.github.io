import './Footer.css'

import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import logo from '../../assets/svg/logo.svg'
import Google from '../../assets/svg/google.svg'
import Instagram from '../../assets/svg/instagram.svg'
import LinkedIn from '../../assets/svg/linked-in.svg'

export const Footer = (): JSX.Element => {
  return (
    <footer>
      <Container className="logo-pos">
        <div className="d-flex justify-content-center">
          <img className="footer-logo" src={logo} alt="" />
        </div>
      </Container>

      <Container>
        <div className="d-flex justify-content-center">
          <Link to="about" className="tag">
            {' '}
            {/* Define the linked page */}
            About
          </Link>
          <Link to="teams" className="tag">
            {' '}
            {/* Define the linked page */}
            Teams
          </Link>
          <Link to="events" className="tag">
            {' '}
            {/* Define the linked page */}
            Events
          </Link>
        </div>
      </Container>

      <hr />

      <Container className="icon-pos">
        <div className="d-flex justify-content-center">
          {/* to-do note: make sure to open in new tab */}
          <Link
            to="https://gdsc.community.dev/waseda-university/"
            className="icon-tag"
          >
            {' '}
            {/* The GDSC Waseda section in Google's DSC website */}
            <img
              src={Google}
              alt="The GDSC Waseda section in Google's DSC website"
            />
          </Link>
          <Link
            to="https://www.instagram.com/gdsc_waseda/"
            className="icon-tag"
          >
            {' '}
            {/* The link to GDSC Waseda Instagram account */}
            <img
              src={Instagram}
              alt="The link to GDSC Waseda Instagram account"
            />
          </Link>
          <Link
            to="https://www.linkedin.com/company/google-dsc-waseda-university"
            className="icon-tag"
          >
            {' '}
            {/* The link to GDSC Waseda LinkedIn account */}
            <img
              src={LinkedIn}
              alt="The link to GDSC Waseda LinkedIn account"
            />
          </Link>
        </div>
      </Container>

      <div className="copy-right text-center p-3">
        All Rights Reserved by GDSC Waseda
      </div>
    </footer>
  )
}

export default Footer
