import './AboutPage.css'

import React from 'react'
import { Link } from 'react-router-dom'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import ImageCard from 'components/Cards/ImageCard/ImageCard'
import HeaderCard from 'components/Cards/HeaderCard/HeaderCard'
import { HeaderCardProps, ImageCardProps } from '~/types/index'


export const AboutPage: React.FC = () => {
  const card: HeaderCardProps = {
    teamName: 'About Us',
    explanation: 'About Page Explanation'
  }

  const imageCard: ImageCardProps = {
    title: 'Google Developer Student Clubs',
    content:
      'Google Developer Student Clubs are university-based community groups supported by Google Developers intending to empower student developers and strengthen their leadership skills\nHere at GDSC Waseda, by collaborating with Google, we will organize many exciting events such as speaker sessions, hackathons, introductory hands-on workshops, study sessions, and so on',
    image: 'group-highfive.png',
    imagePosition: 'left',
  }

  return (
    <div>
      <HeaderCard props={card} />
      <ImageCard props={imageCard}>
        <Stack spacing={2} direction="row" padding={2}>
          <Button variant="outlined">
            <Link to='/teams'>Teams</Link>
          </Button>
          {/* TODO: remove disabled when Event Page is released */}
          <Button variant="outlined" disabled>
            <Link to='/events'>Events</Link>
          </Button>
        </Stack>
      </ImageCard>
    </div>
  )
}

export default AboutPage
