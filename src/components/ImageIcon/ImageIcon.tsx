import './ImageIcon.css'

import Image from 'next/image'

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
          <Image
            className={`image-icon__image ${props.size} ${props.color}`}
            src={Image}
            alt="image-icon"
          />
        ) : (
          <div className={`image-icon__image ${props.size} ${props.color}`} />
        )}
      </div>
      <div className="image-icon__detail-container">
        {props.title !== undefined && (
          <div className="image-icon__title">{props.title}</div>
        )}
        <div className="image-icon__other">
          {children !== undefined && children}
        </div>
      </div>
    </div>
  )
}

export default ImageIcon
