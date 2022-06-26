import './AboutPage.css'

import { Link } from 'react-router-dom'

import Stack from '@mui/material/Stack'
import { API_URL } from 'api/google-sheets'
import { ImageCard, HeaderCard } from 'components/Cards'
import { Carousel } from 'components/Carousel'
import { Meta } from 'components/Meta'
import Button from 'react-bootstrap/Button'

import { MetaType } from '~/types'
import {
  HeaderCardProps,
  ImageCardProps,
  CarouselCardProps
} from '~/types/index'

export const AboutPage: React.FC = () => {
  const card: HeaderCardProps = {
    headTitle: '',
    title: 'About Us',
    content: "Waseda University's chapter of the Google Developer Student Club"
  }

  const imageCard: ImageCardProps = {
    title: 'Google Developer Student Clubs',
    content:
      'Google Developer Student Clubs are university-based community groups supported by Google Developers intending to empower student developers and strengthen their leadership skills\nHere at GDSC Waseda, by collaborating with Google, we will organize many exciting events such as speaker sessions, hackathons, introductory hands-on workshops, study sessions, and so on',
    image: 'group-highfive.png',
    imagePosition: 'left'
  }

  const carouselCards: Array<CarouselCardProps> = [
    {
      image: 'workshop.png',
      title: 'Hands-on Workshop',
      date: 'JUN 22, 2022',
      old: true
    },
    {
      image: 'demoday.png',
      title: 'Demo Day',
      date: 'JUL 17, 2022',
      old: false
    },
    {
      image: 'tech-talk-1.png',
      title: 'Speaker Session / Tech Talk',
      date: 'APR 21, 2022',
      old: true
    }
  ]

  const meta: MetaType = {
    title: 'About',
    description:
      "About Us | Waseda University's chapter of the Google Developer Student Club",
    page: 'about',
    image: 'logo.svg'
  }

  return (
    <>
      <Meta props={meta} />
      <div className="about-page">
        <HeaderCard props={card} />
        <ImageCard props={imageCard}>
          <Stack spacing={2} direction="row" padding={2}>
            <Button variant="outline-dark" className="about-page__button">
              <Link to="/teams">Teams</Link>
            </Button>
            {/* TODO: remove disabled when Event Page is released */}
            <Button
              variant="outline-dark"
              className="about-page__button"
              disabled
            >
              <Link to="/events">Events</Link>
            </Button>
          </Stack>
        </ImageCard>
        <div className="about-page__events">
          <div className="about-page__events__container">
            <div className="about-page__events__title">
              Build Good Things, Together
            </div>
            <div className="about-page__events__description">
              Innovation never ends. Join us as we explore topics from all
              fields.
            </div>
          </div>
          <div className="about-page__events__carousel">
            <Carousel props={carouselCards} />
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage
