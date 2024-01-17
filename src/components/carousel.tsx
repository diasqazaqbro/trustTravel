import * as React from "react"
import style from './carousel.module.scss'
import image from '../../public/images/aksu.png'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function CarouselDemo() {
  return (
    <Carousel className={style.carousel}>
      <div className={style.button__prev}>
        <CarouselPrevious className={style.prev} />
      </div>
      <CarouselContent className={style.carousle__content}>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className={style.carousle__item}> 
            <div className="p-1">
              <Image alt="pepsi" src={image} width={310} height={186} className={style.img} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className={style.carousel__button}>
        <CarouselNext className={style.next} />
      </div>
    </Carousel>
  )
}