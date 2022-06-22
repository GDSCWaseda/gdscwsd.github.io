/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */
import './ImageCard.css'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import { ImageCardProps } from '~/types/index'
import React from 'react'

export const ImageCard: React.FC<{
  children: React.ReactNode
  props: ImageCardProps
}> = ({ children, props }) => {
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
              {props.content.split('\n').map((text, key) => (
                <Typography
                  gutterBottom
                  color="text.secondary"
                  align="left"
                  key={key}
                >
                  {text}
                </Typography>
              ))}
              {children}
            </Container>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ImageCard
