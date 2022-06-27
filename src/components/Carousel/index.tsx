import { useRef } from 'react'

import { CarouselCard } from 'components/Cards'
import { CarouselCardProps } from '~/types'

export const Carousel: React.FC<{ props: Array<CarouselCardProps> }> = ({
  props
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const center = ref.current && ref.current.offsetWidth > 1000 ? '' : 'center'

  return (
    <div className={`carousel ${center}`}>
      <div className="carousel__container" ref={ref}>
        {props.map((card, index) => (
          <CarouselCard key={index} props={card} />
        ))}
      </div>
    </div>
  )
}

export default Carousel
