import Image from 'next/image'

import { CarouselCardProps } from '~/types'

export const CarouselCard: React.FC<{ props: CarouselCardProps }> = ({
  props
}) => {
  const isOld = props.old ? 'old' : ''
  return (
    <div className={`carousel-card ${isOld}`}>
      <Image
        src={`/events/${props.image}`}
        width="200px"
        height="200px"
        layout="fixed"
        alt="image"
      />
      <div className="carousel-card__container">
        <div className="carousel-card__date">{props.title}</div>
        <div className="carousel-card__title">{props.subtitle}</div>
      </div>
    </div>
  )
}

export default CarouselCard
