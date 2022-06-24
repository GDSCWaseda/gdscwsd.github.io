import './AboutPage.module.css'

import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'

import Stack from '@mui/material/Stack'
import Button from 'react-bootstrap/Button'

import { ImageCard, HeaderCard } from 'components/Cards/index'
import CommonMeta from 'components/CommonMeta'
import { HeaderCardProps, ImageCardProps } from '~/types/index'

export const AboutPage: NextPage = () => {
  const card: HeaderCardProps = {
    headTitle: '',
    title: 'About Us',
    content: "Waseda University's chapter of the Google Developer Student Club"
  }

  const imageCard: ImageCardProps = {
    title: 'Google Developer Student Clubs',
    content:
      'Google Developer Student Clubs are university-based community groups supported by Google Developers intending href empower student developers and strengthen their leadership skills\nHere at GDSC Waseda, by collaborating with Google, we will organize many exciting events such as speaker sessions, hackathons, introductory hands-on workshops, study sessions, and so on',
    image: 'group-highfive.png',
    imagePosition: 'right'
  }

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-AboutPage' })
  }, [])

  return (
    <div className="about-page">
      <CommonMeta title="About" description="This is About page." />
      <HeaderCard props={card} />
      <ImageCard props={imageCard}>
        <Stack spacing={2} direction="row" padding={2}>
          <Button variant="outline-dark" className="about-page__button">
            <Link href="/teams">Teams</Link>
          </Button>
          {/* TODO: remove disabled when Event Page is released */}
          <Button
            variant="outline-dark"
            className="about-page__button"
            disabled
          >
            <Link href="/events">Events</Link>
          </Button>
        </Stack>
      </ImageCard>
    </div>
  )
}

export default AboutPage
