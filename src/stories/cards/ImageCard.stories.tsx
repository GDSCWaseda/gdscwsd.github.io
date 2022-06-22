import { ComponentStory, ComponentMeta } from '@storybook/react'

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */
import 'components/Cards/ImageCard/ImageCard.css'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import React from 'react'

const ImageCard: React.FC<{
  children?: React.ReactNode
  image: string
  title: string
  imagePosition: 'left' | 'right'
  content: string
}> = ({ children, ...props }) => {
  const Image = require(`assets/img/${props.image}`)

  return (
    <Box padding={3} className="image-card">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={`image-card__layout--${props.imagePosition}`}
      >
        <Grid item sm="auto">
          <img className="image-card__image" src={Image} />
        </Grid>
        <Grid item sm="auto">
          <Box padding={2} sx={{ maxWidth: 430, border: 0 }}>
            <Container>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
              >
                {props.title}
              </Typography>
              {props.content !== undefined &&
                props.content.split('\n').map((text, key) => (
                  <Typography
                    gutterBottom
                    color="text.secondary"
                    align="left"
                    key={key}
                  >
                    {text}
                  </Typography>
                ))}
              {children !== undefined && (
                <div className="image-card__others">{children}</div>
              )}
            </Container>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

const Template: ComponentStory<typeof ImageCard> = ({ children, ...args }) => (
  <ImageCard {...args}>{children}</ImageCard>
)

export const DefaultCard = Template.bind({})
DefaultCard.args = {
  title: 'Google Developer Student Clubs',
  content:
    'Google Developer Student Clubs are university-based community groups supported by Google Developers intending to empower student developers and strengthen their leadership skills\nHere at GDSC Waseda, by collaborating with Google, we will organize many exciting events such as speaker sessions, hackathons, introductory hands-on workshops, study sessions, and so on',
  image: 'group-highfive.png',
  imagePosition: 'left',
  children: 'ADDITIONAL Components'
}

export default {
  title: 'Cards/ImageCard',
  component: ImageCard,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    image: { control: 'text' },
    children: { control: 'text' },
    imagePosition: {
      options: ['left', 'right'],
      control: { type: 'radio' }
    }
  }
} as ComponentMeta<typeof ImageCard>
