/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */
import './MediaCard.css'

import { MediaCardProps } from '~/types/index'
import React from 'react'

export const MediaCard: React.FC<{
  children?: React.ReactNode
  props: MediaCardProps
}> = ({ children, props }) => {
  const Image =
    props.image !== undefined ? require(`assets/img/${props.image}`) : null

  return (
    <div className={`media-card ${props.size}`}>
      {props.image !== undefined ? (
        <div className={`media-card__image-container ${props.size}`}>
          <img className={`media-card__image ${props.size}`} src={Image} />
        </div>
      ) : (
        <div className={`media-card__image-container ${props.size} none`} />
      )}
      <div className="media-card__detail-container">
        {props.title !== undefined && (
          <div className="media-card__title">{props.title}</div>
        )}
        <div className="media-card__other">
          {children !== undefined && children}
        </div>
      </div>
    </div>
  )
}

export default MediaCard
