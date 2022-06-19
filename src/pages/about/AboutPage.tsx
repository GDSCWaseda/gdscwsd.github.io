import './AboutPage.css'

import React from 'react'
import { HeaderCardProps } from '~/types/index'

import HeaderCard from 'components/Cards/HeaderCard/HeaderCard'

export const AboutPage: React.FC = () => {
  const card: HeaderCardProps = {
    teamName: 'About Us',
    explanation: 'About Page Explanation'
  }

  return (
    <div>
      <HeaderCard props={card} />
    </div>
  )
}

export default AboutPage
