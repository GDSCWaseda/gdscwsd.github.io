import './CarouselCard.css'

import { CarouselCardProps } from '~/types'

export const CarouselCard: React.FC<{ props: CarouselCardProps }> = ({
  props
}) => {
  const isOld = props.old ? 'old' : ''
  return (
    <div className={`carousel-card ${isOld}`}>
      <img src={`events/${props.image}`} />
      <div className="carousel-card__container">
        <div className="carousel-card__date">{props.date}</div>
        <div className="carousel-card__title">{props.title}</div>
      </div>
    </div>
  )
}

export default CarouselCard
