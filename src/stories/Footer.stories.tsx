import 'components/Footer/Footer.css'

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */

import React from 'react'
import { Link, MemoryRouter } from 'react-router-dom'

import logo from 'assets/svg/logo.svg'
import Google from 'assets/svg/google.svg'
import Instagram from 'assets/svg/instagram.svg'
import LinkedIn from 'assets/svg/linked-in.svg'

import { ComponentStory, ComponentMeta } from '@storybook/react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-container">
        <img className="footer__logo-main" src={logo} alt="" />
      </div>
      <div className="footer__path-container">
        <Link to="/about" className="footer__path-item">
          About
        </Link>
        <Link to="/teams" className="footer__path-item">
          Teams
        </Link>
        <Link to="/events" className="footer__path-item">
          Events
        </Link>
      </div>
      <hr />
      <div className="footer__logo-container">
        <a
          href="https://gdsc.community.dev/waseda-university/"
          target="_blank"
          className="footer__path-item"
          rel="noreferrer"
        >
          <img src={Google} />
        </a>
        <a
          href="https://www.instagram.com/gdsc_waseda/"
          className="footer__path-item"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Instagram} />
        </a>
        <a
          href="https://www.linkedin.com/company/google-dsc-waseda-university"
          className="footer__path-item"
          target="_blank"
          rel="noreferrer"
        >
          <img src={LinkedIn} />
        </a>
      </div>
      <div className="footer__reserved">All Rights Reserved by GDSC Waseda</div>
    </footer>
  )
}

const Template: ComponentStory<typeof Footer> = _1 => <Footer />

export const Default = Template.bind({})
Default.args = {}

export default {
  title: 'Global Components/Footer',
  component: Footer,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
} as ComponentMeta<typeof Footer>
