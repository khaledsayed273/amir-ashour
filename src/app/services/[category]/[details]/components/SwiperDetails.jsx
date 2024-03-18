"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import { EffectCoverflow, Navigation } from 'swiper/modules';
function SwiperDetails({ data }) {

    const [activeIndex, setActiveIndex] = useState(0)

    const handleChange = (e) => {
        setActiveIndex(e.activeIndex)
    }

    return (
        <>
            <div className="container mx-auto text-white md:px-5">
                <div className="relative w-full h-[450px] sm:h-[400px] lg:h-[500px] xl:h-[600px] my-8 xl:mt-2  overflow-hidden rounded-xl border border-amber-500">
                    <Image priority src={data[activeIndex].image} fill alt='image' />
                    <div className='absolute flex  left-1/2  bottom-0  bg-white text-center text-amber-600 py-3 px-10 font-semibold text-lg md:text-3xl rounded-t-xl -translate-x-1/2 '>
                        {data[activeIndex].name}
                    </div>
                </div>
                <p className='text-center text-sm md:text-xl font-normal'>{data[activeIndex].about}</p>
            </div>

            <Swiper
                grabCursor={true}
                onSlideChange={handleChange}
                effect={'coverflow'}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 50,
                    depth: 500,
                    modifier: 1,
                    slideShadows: true,
                }}
                navigation={true}
                modules={[EffectCoverflow, Navigation]}
                className="mySwiperServices"
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id} id={item.id} className='relative'>
                        <Image priority sizes='(min-width:992px) , 100vw' fill src={item.image} alt={item.name} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </>
    )
}

export default SwiperDetails
