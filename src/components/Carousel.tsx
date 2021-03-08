import { Children, FC, ReactNode, useState } from 'react'
import { TOptions } from 'keen-slider'
import { useKeenSlider } from 'keen-slider/react'
import Icon from './Icon'

import "keen-slider/keen-slider.min.css"


interface ArrowsType {
  show: boolean
  nextArrow?: FC
  prevArrow?: FC
}

interface DotsType {
  show: boolean
}

interface CarouselProps {
  children: ReactNode
  dots?: DotsType
  arrows?: ArrowsType
  options?: TOptions
  slideHeightClass?: string
}

const defaultDots: DotsType = {
  show: false
}

const defaultArrows: ArrowsType = {
  show: false,
  nextArrow: () => <Icon name="arrow-right-slim" />,
  prevArrow: () => <Icon name="arrow-left-slim" />
}

export default function Carousel ({
  children,
  dots = defaultDots,
  arrows = defaultArrows,
  slideHeightClass = '',
  options
}: CarouselProps
) {
  const { nextArrow: NextArrow, prevArrow: PrevArrow } = { ...defaultArrows, ...arrows }
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    mounted (slide) {
      setLoaded(true)
    },
    slideChanged (slide) {
      if (dots.show) {
        setCurrentSlide(slide.details().relativeSlide)
      }
    },
    ...options
  })

  const childrenLength = Children.toArray(children).length
  const slideLenght = currentSlide + 1

  return (
    <div className="relative w-full">
      <div ref={sliderRef} className={'keen-slider ' + slideHeightClass}>
        {Children.map(children, (child, index) => (
          <div
            key={index}
            className="keen-slider__slide"
            style={{ width: `calc(100% / ${options.slidesPerView as number || 1} - ${options.spacing / 2})` }}
          >
            {loaded && child}
          </div>
        ))}
      </div>

      {slider && arrows.show && (
        <>
          {currentSlide > 0 && (
            <button
              className="hidden lg:block absolute top-2/4 xl:transform xl:-translate-y-2/4 left-5 p-1 focus:outline-none"
              onClick={() => slider.prev()}
            >
              <PrevArrow />
            </button>
          )}
          {slideLenght < childrenLength && (
            <button
              className="hidden lg:block absolute top-2/4 xl:transform xl:-translate-y-2/4 right-5 p-1 focus:outline-none"
              onClick={() => slider.next()}
            >
              <NextArrow />
            </button>
          )}
        </>
      )}

      {slider && dots.show && (
        <div className="flex absolute space-x-4 dots">
          {Array.from(Array(slider?.details().size).keys()).map(index => (
            <button
              key={index}
              onClick={() => slider.moveToSlideRelative(index)}
              className={'focus:outline-none rounded-full w-2.5 h-2.5' + (currentSlide === index ? ' bg-base-white' : ' border-2 border-base-white')}
            />
          ))}
        </div>
      )}
    </div>
  )
}
