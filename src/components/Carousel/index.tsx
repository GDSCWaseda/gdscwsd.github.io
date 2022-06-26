import './Carousel.css'
import { useRef } from 'react'

import { CarouselCard } from './CarouselCard'

import { CarouselCardProps } from '~/types'

export const Carousel: React.FC<{ props: Array<CarouselCardProps> }> = ({
  props
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const scroll = (scrollOffset: number) => {
    if (ref.current) ref.current.scrollLeft += scrollOffset
  }
  const center = ref.current && ref.current.offsetWidth > 1000 ? '' : 'center'

  return (
    <div className={`carousel ${center}`}>
      {ref.current && ref.current.offsetWidth > 1000 && (
        <div className="button">
          <button
            onClick={() => {
              scroll(-40)
            }}
          >
            Arrow Left
          </button>
        </div>
      )}
      <div className="carousel__container" ref={ref}>
        {props.map((card, index) => (
          <CarouselCard key={index} props={card} />
        ))}
      </div>
      {ref.current && ref.current.offsetWidth > 1000 && (
        <div className="button">
          <button
            onClick={() => {
              scroll(40)
            }}
          >
            Arrow Right
          </button>
        </div>
      )}
    </div>
  )
}

export default Carousel
