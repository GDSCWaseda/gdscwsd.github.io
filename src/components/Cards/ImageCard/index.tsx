import Image from 'next/image'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { ImageCardProps } from '~/types/index'

export const ImageCard: React.FC<{
  children?: React.ReactNode
  props: ImageCardProps
}> = ({ children, props }) => {
  const imageProps = (
    <Image
      className="imageCard__image"
      src={require(`assets/img/${props.image}`)}
      layout="intrinsic"
      alt="image-card"
    />
  )

  const textProps = (
    <Box padding={2} sx={{ maxWidth: 430, border: 0 }}>
      <Container>
        <Typography gutterBottom variant="h5" component="div" align="center">
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
          <div className="imageCard__others">{children}</div>
        )}
      </Container>
    </Box>
  )

  const propsRight = props.imagePosition === 'left' ? textProps : imageProps
  const propsLeft = props.imagePosition === 'left' ? imageProps : textProps

  return (
    <Box padding={3} className="image-card">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={`image - card__layout--${props.imagePosition} `}
      >
        <Grid item sm="auto">
          {propsLeft}
        </Grid>
        <Grid item sm="auto">
          {propsRight}
        </Grid>
      </Grid>
    </Box>
  )
}

export default ImageCard
