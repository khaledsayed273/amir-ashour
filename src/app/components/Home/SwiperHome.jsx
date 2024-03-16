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
import Link from 'next/link';
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

            <div className='flex justify-between items-center mt-7'>
                <svg className='w-[60px] sm:w-[100px] lg:w-[171px] ' viewBox="0 0 271 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M269 47.1727C244.46 16.1275 176.977 -29.8874 103.359 34.4146C29.7408 98.7167 -32.2212 56.1035 -54 26.7591" stroke="white" strokeWidth="3.41894" />
                </svg>

                <h1 className='text-center  text-white text-xl sm:text-3xl xl:text-4xl font-bold xl:font-medium uppercase'>recent projects</h1>
                <svg className='w-[60px] sm:w-[100px] lg:w-[200px]  ' viewBox="0 0 326 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 47.1727C26.5396 16.1275 94.0234 -29.8874 167.641 34.4146C241.259 98.7167 303.221 56.1035 325 26.7591" stroke="white" strokeWidth="3.41894" />
                </svg>

            </div>
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


            <div className='flex justify-center items-center my-7'>
                <Link href={"/"}>
                    <svg className='w-[220px] sm:w-[300px] md:w-[350px]' viewBox="0 0 576 181" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="104.5" cy="101.5" r="73.5" fill="url(#paint0_radial_122_445)" />
                        <circle cx="81.5" cy="81.5" r="80.5" stroke="#D69D66" strokeWidth="2" />
                        <path d="M106.32 149.56C102.587 149.56 99.2267 148.92 96.24 147.64C93.2533 146.307 90.9067 144.44 89.2 142.04C87.4933 139.64 86.64 136.84 86.64 133.64H96.4C96.6133 136.04 97.5467 138.013 99.2 139.56C100.907 141.107 103.28 141.88 106.32 141.88C109.467 141.88 111.92 141.133 113.68 139.64C115.44 138.093 116.32 136.12 116.32 133.72C116.32 131.853 115.76 130.333 114.64 129.16C113.573 127.987 112.213 127.08 110.56 126.44C108.96 125.8 106.72 125.107 103.84 124.36C100.213 123.4 97.2533 122.44 94.96 121.48C92.72 120.467 90.8 118.92 89.2 116.84C87.6 114.76 86.8 111.987 86.8 108.52C86.8 105.32 87.6 102.52 89.2 100.12C90.8 97.72 93.04 95.88 95.92 94.6C98.8 93.32 102.133 92.68 105.92 92.68C111.307 92.68 115.707 94.04 119.12 96.76C122.587 99.4267 124.507 103.107 124.88 107.8H114.8C114.64 105.773 113.68 104.04 111.92 102.6C110.16 101.16 107.84 100.44 104.96 100.44C102.347 100.44 100.213 101.107 98.56 102.44C96.9067 103.773 96.08 105.693 96.08 108.2C96.08 109.907 96.5867 111.32 97.6 112.44C98.6667 113.507 100 114.36 101.6 115C103.2 115.64 105.387 116.333 108.16 117.08C111.84 118.093 114.827 119.107 117.12 120.12C119.467 121.133 121.44 122.707 123.04 124.84C124.693 126.92 125.52 129.72 125.52 133.24C125.52 136.067 124.747 138.733 123.2 141.24C121.707 143.747 119.493 145.773 116.56 147.32C113.68 148.813 110.267 149.56 106.32 149.56ZM180.681 93.4V149H171.561V124.68H145.401V149H136.281V93.4H145.401V117.24H171.561V93.4H180.681ZM218.048 149.56C212.874 149.56 208.101 148.36 203.728 145.96C199.408 143.507 195.968 140.12 193.408 135.8C190.901 131.427 189.648 126.52 189.648 121.08C189.648 115.64 190.901 110.76 193.408 106.44C195.968 102.12 199.408 98.76 203.728 96.36C208.101 93.9067 212.874 92.68 218.048 92.68C223.274 92.68 228.048 93.9067 232.368 96.36C236.741 98.76 240.181 102.12 242.688 106.44C245.194 110.76 246.448 115.64 246.448 121.08C246.448 126.52 245.194 131.427 242.688 135.8C240.181 140.12 236.741 143.507 232.368 145.96C228.048 148.36 223.274 149.56 218.048 149.56ZM218.048 141.64C221.728 141.64 225.008 140.813 227.888 139.16C230.768 137.453 233.008 135.053 234.608 131.96C236.261 128.813 237.088 125.187 237.088 121.08C237.088 116.973 236.261 113.373 234.608 110.28C233.008 107.187 230.768 104.813 227.888 103.16C225.008 101.507 221.728 100.68 218.048 100.68C214.368 100.68 211.088 101.507 208.208 103.16C205.328 104.813 203.061 107.187 201.408 110.28C199.808 113.373 199.008 116.973 199.008 121.08C199.008 125.187 199.808 128.813 201.408 131.96C203.061 135.053 205.328 137.453 208.208 139.16C211.088 140.813 214.368 141.64 218.048 141.64ZM327.822 93.4L311.342 149H301.022L289.342 106.92L276.942 149L266.702 149.08L250.942 93.4H260.622L272.142 138.68L284.622 93.4H294.862L306.462 138.44L318.062 93.4H327.822ZM414.685 93.4V149H405.565V110.92L388.605 149H382.285L365.245 110.92V149H356.125V93.4H365.965L385.485 137L404.925 93.4H414.685ZM452.032 149.56C446.859 149.56 442.085 148.36 437.712 145.96C433.392 143.507 429.952 140.12 427.392 135.8C424.885 131.427 423.632 126.52 423.632 121.08C423.632 115.64 424.885 110.76 427.392 106.44C429.952 102.12 433.392 98.76 437.712 96.36C442.085 93.9067 446.859 92.68 452.032 92.68C457.259 92.68 462.032 93.9067 466.352 96.36C470.725 98.76 474.165 102.12 476.672 106.44C479.179 110.76 480.432 115.64 480.432 121.08C480.432 126.52 479.179 131.427 476.672 135.8C474.165 140.12 470.725 143.507 466.352 145.96C462.032 148.36 457.259 149.56 452.032 149.56ZM452.032 141.64C455.712 141.64 458.992 140.813 461.872 139.16C464.752 137.453 466.992 135.053 468.592 131.96C470.245 128.813 471.072 125.187 471.072 121.08C471.072 116.973 470.245 113.373 468.592 110.28C466.992 107.187 464.752 104.813 461.872 103.16C458.992 101.507 455.712 100.68 452.032 100.68C448.352 100.68 445.072 101.507 442.192 103.16C439.312 104.813 437.045 107.187 435.392 110.28C433.792 113.373 432.992 116.973 432.992 121.08C432.992 125.187 433.792 128.813 435.392 131.96C437.045 135.053 439.312 137.453 442.192 139.16C445.072 140.813 448.352 141.64 452.032 141.64ZM518.286 149L505.486 126.76H498.526V149H489.406V93.4H508.606C512.873 93.4 516.473 94.1467 519.406 95.64C522.393 97.1333 524.606 99.1333 526.046 101.64C527.54 104.147 528.286 106.947 528.286 110.04C528.286 113.667 527.22 116.973 525.086 119.96C523.006 122.893 519.78 124.893 515.406 125.96L529.166 149H518.286ZM498.526 119.48H508.606C512.02 119.48 514.58 118.627 516.286 116.92C518.046 115.213 518.926 112.92 518.926 110.04C518.926 107.16 518.073 104.92 516.366 103.32C514.66 101.667 512.073 100.84 508.606 100.84H498.526V119.48ZM549.073 100.76V117.08H568.273V124.52H549.073V141.56H570.673V149H539.953V93.32H570.673V100.76H549.073Z" fill="white" />
                        <defs>
                            <radialGradient id="paint0_radial_122_445" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(104.5 101.5) rotate(90) scale(73.5)">
                                <stop stopColor="#D69D66" />
                                <stop offset="1" stopColor="#D69D66" stopOpacity="0.66" />
                            </radialGradient>
                        </defs>
                    </svg>
                </Link>
            </div>


        </div>
    )
}

export default SwiperHome
