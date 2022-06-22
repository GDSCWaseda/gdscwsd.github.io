/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */

import './ImageIcon.css'

import React from 'react'

import { ImageIconProps } from '~/types/index'

export const ImageIcon: React.FC<{
  children?: React.ReactNode
  props: ImageIconProps
}> = ({ children, props }) => {
  const Image =
    props.image !== undefined ? require(`assets/img/${props.image}`) : null

  return (
    <div className={`image-icon ${props.size}`}>
      <div className={`image-icon__image-container ${props.size}`}>
        {props.image !== undefined ? (
          <img
            className={`image-icon__image ${props.size} ${props.color}`}
            src={Image}
          />
        ) : (
          <div className={`image-icon__image ${props.size} ${props.color}`} />
        )}
      </div>
      <div className="image-icon__detail-container">
        {props.title !== undefined && (
          <div className="image-icon__title">{props.title}</div>
        )}
        <div className="image-icon__other">{children}</div>
      </div>
    </div>
  )
}

export default ImageIcon
