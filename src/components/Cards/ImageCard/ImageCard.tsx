/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */
import './ImageCard.css'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import { ImageCardProps } from '~/types/index'
import React from 'react'

export const ImageCard: React.FC<{ children: React.ReactNode, props: ImageCardProps }> = ({ children, props }) => {
  const Image = require(`assets/img/${props.image}`)
  const Direction = props.imagePosition === "left" ? "row" : "row-reverse"

  return (
    <Box>
      <Container>
        <Grid
          container
          spacing={2}
          direction={Direction}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item sm="auto">
            <img src={Image} />
          </Grid>
          <Grid item sm="auto">
            <Box sx={{ width: 400, border: 0 }}>
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
                    variant="body2"
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
      </Container>
    </Box>
  )
}

export default ImageCard
