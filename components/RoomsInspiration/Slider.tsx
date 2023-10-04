'use client'

import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Slide } from './RoomsInspiration';

import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

export default function Slider() {

    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
          return '<span class="!bg-green-dark-500 ' + className + '"></span>';
        },
      };

    return (
        <div className='w-full   overflow-hidden'>
            <Swiper
                slidesPerView={1}
                className='h-[500px] lg:h-[670px]'
                pagination={pagination}
                modules={[Pagination]}
                
                breakpoints={{
                    800: {
                        slidesPerView: 2,
                        spaceBetween: 20
                      },
                      
                      1240: {
                        slidesPerView: 3,
                        spaceBetween: 40
                      },

                      2560: {
                        slidesPerView: 4,
                        spaceBetween: 40
                      },

                }}
            >
                {
                    [1, 2, 3, 4, 5, 6 , 7, 8, 9].map((item) => (
                        <SwiperSlide key={item}>
                            <Slide src='/images/room1.jpg' />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            </div>
    )
}
