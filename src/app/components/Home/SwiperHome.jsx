"use client"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import img1 from "../../../../public/images/img1slider.jpeg"
import img2 from "../../../../public/images/img2slider.jpeg"
import img3 from "../../../../public/images/img3slider.jpeg"

import { EffectCoverflow, Navigation } from 'swiper/modules';
import Image from 'next/image';
function SwiperHome() {


    const data = [
        {
            id: 1,
            about: "During a train ride, a moment of inspiration struck Vasily. He wished for a convenient study tool on his phone to help him prepare for the LSAT. However, such an app didn&apos;t exist at the time. Determined to overcome this hurdle, Vasily took matters into his own hands and developed one of the earliest and most comprehensive LSAT apps on the market. The app quickly gained popularity, becoming the #1 paid LSAT app for over a year.",
            img: img2,
            name: "Aya alaa"
        },
        {
            id: 2,
            about: "During a train ride, a moment of inspiration struck  didn&apos;t exist at the time. Determined to overcome this hurdle, Vasily took matters into his own hands and developed one of the earliest and most comprehensive LSAT apps on the market. The app quickly gained popularity, becoming the #1 paid LSAT app for over a year.",
            img: img1,
            name: "Mohamed abdElmaksoud"

        },
        {
            id: 3,
            about: "During  ride, a moment of inspiration struck  didn&apos;t exist at the time. Determined to overcome this hurdle, Vasily took matters into his own hands and developed one of the earliest and most comprehensive LSAT apps on the market. The app quickly gained popularity, becoming the #1 paid LSAT app for over a year.",
            img: img3,
            name: "khaled sayed"
        },

    ]


    return (
        <div>

            <h1 className='text-center mt-7 text-white text-xl sm:text-3xl xl:text-4xl font-bold xl:font-medium uppercase'>recent projects</h1>

            <Swiper
                grabCursor={true}
                
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
                className="mySwiperHome"
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id} id={item.id} className='relative'>
                        <Image priority sizes='(min-width:992px) , 100vw' fill src={item.img} alt={item.img} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default SwiperHome
