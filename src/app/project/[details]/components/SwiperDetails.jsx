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
            <div data-aos="fade-up" data-aos-duration="1000" className="container mx-auto text-white md:px-5">
                <div className="relative w-full h-[450px] sm:h-[400px] lg:h-[500px] xl:h-[600px] my-8 xl:mt-2  overflow-hidden rounded-xl border border-amber-500">
                    <Image priority src={data.images[activeIndex].path} fill alt='image' />
                    <div className='absolute flex  left-1/2  bottom-0  bg-white text-center text-amber-600 py-3 px-10 font-semibold text-lg md:text-3xl rounded-t-xl -translate-x-1/2 '>
                        {data.name}
                    </div>
                </div>
                <p className='text-center text-sm md:text-xl font-normal'>{data.description}</p>
            </div>

            <Swiper
                initialSlide={1}

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
                {data.images.map((item, index) => (
                    <SwiperSlide key={index} className='relative'>
                        <Image priority sizes='(min-width:992px) , 100vw' fill src={item.path} alt={`${data.name}/${index}`} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </>
    )
}

export default SwiperDetails
