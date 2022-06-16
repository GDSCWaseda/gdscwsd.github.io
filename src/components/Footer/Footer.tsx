import './Footer.css'

import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import logo from '../../assets/svg/logo.svg'
import Google from '../../assets/svg/google.svg'
import Instagram from '../../assets/svg/instagram.svg'
import LinkedIn from '../../assets/svg/linked-in.svg'

export const Footer = (): JSX.Element => {
  return (<React.Fragment>
    <footer className="footer">
      <Container className="container">
        <Container>
          <div className="">
            <Link to="Product" className="tag">
              {' '}
              {/* Define the linked page */}
              Product
            </Link>
            <Link to="teams" className="tag">
              {' '}
              {/* Define the linked page */}
              Features
            </Link>
            <Link to="events" className="tag">
              {' '}
              {/* Define the linked page */}
              Resources
            </Link>
          </div>
        </Container>
        <Container className="logo-pos">
          <div className="">
            <img className="footer-logo" src={logo} alt="" />
          </div>
        </Container>

        <Container>
          <div className="">
            <Link to="events" className="tag">
              {' '}
              {/* Define the linked page */}
              About
            </Link>
            <Link to="events" className="tag">
              {' '}
              {/* Define the linked page */}
              Blog
            </Link>
            <Link to="events" className="tag">
              {' '}
              {/* Define the linked page */}
              Support
            </Link>
          </div>
        </Container >
      </Container>

      <hr />
      <Container className="icon-pos">
        <div className="footer-logo">
          {/* to-do note: make sure to open in new tab . DONE */}
          <a
            rel="noopener noreferrer"
            href="https://gdsc.community.dev/waseda-university/"
            className="icon-tag"
            target="_blank"
          >
            {' '}
            {/* The GDSC Waseda section in Google's DSC website */}
            <img
              src={Google}
              alt="The GDSC Waseda section in Google's DSC website" />
          </a>
          <a
            rel="noopener noreferrer"
            href="https://www.instagram.com/gdsc_waseda/"
            className="icon-tag"
            target="_blank"
          >
            {' '}
            {/* The link to GDSC Waseda Instagram account */}
            <img
              src={Instagram}
              alt="The link to GDSC Waseda Instagram account" />
          </a>
          <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/google-dsc-waseda-university"
            className="icon-tag"
            target="_blank"
          >
            {' '}
            {/* The link to GDSC Waseda LinkedIn account */}
            <img
              src={LinkedIn}
              alt="The link to GDSC Waseda LinkedIn account" />
          </a>
        </div>
      </Container><div className="copy-right text-center p-3">
        All Rights Reserved by GDSC Waseda
      </div>
    </footer>
  </React.Fragment >
  )
}

export default Footer
