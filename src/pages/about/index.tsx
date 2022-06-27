import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'

import Stack from '@mui/material/Stack'
import Button from 'react-bootstrap/Button'

import { ImageCard, HeaderCard } from 'components/Cards/index'
import { Carousel } from 'components/Carousel'
import CommonMeta from 'components/CommonMeta'
import {
  HeaderCardProps,
  ImageCardProps,
  CarouselCardProps
} from '~/types/index'

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
    imagePosition: 'left'
  }

  const carouselCards: Array<CarouselCardProps> = [
    {
      image: 'workshop.png',
      subtitle: 'Hands-on Workshop',
      title: 'JUN 22, 2022',
      old: true
    },
    {
      image: 'demoday.png',
      subtitle: 'Demo Day',
      title: 'JUL 17, 2022',
      old: false
    },
    {
      image: 'tech-talk-1.png',
      subtitle: 'Speaker Session / Tech Talk',
      title: 'APR 21, 2022',
      old: true
    }
  ]
  /*
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-AboutPage' })
  }, []) */

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
      <div className="about-page__events">
        <div className="about-page__events__container">
          <div className="about-page__events__title">
            Build Good Things, Together
          </div>
          <div className="about-page__events__description">
            Innovation never ends. Join us as we explore topics from all fields.
          </div>
        </div>
        <div className="about-page__events__carousel">
          <Carousel props={carouselCards} />
        </div>
      </div>
    </div>
  )
}

export default AboutPage
