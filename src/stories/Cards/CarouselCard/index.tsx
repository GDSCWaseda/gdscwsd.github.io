import './CarouselCard.css'

import { CarouselCardProps } from '~/types'

export const CarouselCard: React.FC<{ props: CarouselCardProps }> = ({
  props
}) => {
  const isOld = props.old ? 'old' : ''
  return (
    <div className={`carousel-card ${isOld}`}>
      <img alt="" src={props.image} />
      <div className="carousel-card__container">
        <div className="carousel-card__title">{props.title}</div>
        <div className="carousel-card__subtitle">{props.subtitle}</div>
      </div>
    </div>
  )
}

export default CarouselCard
