'use client';


import { Swiper, SwiperSlide } from 'swiper/react';

type CarouselProps = {
  className?: string
}

import 'swiper/css';

export default function Carousel({ className = '' }: CarouselProps) {


  return (

      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        className=""
      >
        <SwiperSlide>

        </SwiperSlide>
      </Swiper>

  )
}
