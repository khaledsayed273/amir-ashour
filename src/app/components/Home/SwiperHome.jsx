"use client"
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import Loading from '../Loading';
function SwiperHome() {
    const [latestProjects, setLatestProjects] = useState(false)

    const getLatestProjects = async () => {
        try {
            const res = await axios.get(`https://dashboard.amir-ashour.com/api/v1/projects/latest/project`)
            return setLatestProjects(res.data)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getLatestProjects()
    }, [])

    return (
        <div>

            <div data-aos="fade-up" data-aos-duration="1000" className='flex justify-between items-center mt-7'>
                <svg className='w-[60px] sm:w-[100px] lg:w-[171px] ' viewBox="0 0 271 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M269 47.1727C244.46 16.1275 176.977 -29.8874 103.359 34.4146C29.7408 98.7167 -32.2212 56.1035 -54 26.7591" stroke="white" strokeWidth="3.41894" />
                </svg>

                <h1 className='text-center  text-white text-xl sm:text-3xl xl:text-4xl font-bold xl:font-medium uppercase'>recent projects</h1>
                <svg className='w-[60px] sm:w-[100px] lg:w-[200px]  ' viewBox="0 0 326 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 47.1727C26.5396 16.1275 94.0234 -29.8874 167.641 34.4146C241.259 98.7167 303.221 56.1035 325 26.7591" stroke="white" strokeWidth="3.41894" />
                </svg>

            </div>

            {latestProjects ? (

                <Swiper
                    initialSlide={1}
                    data-aos="fade-up" data-aos-duration="1000"
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

                    {latestProjects.data.map((item) => (
                        <SwiperSlide key={item.id}  >
                            <Link className='relative w-full h-full block' href={`/project/${item.slug}`}>
                                <Image aria-label={item.name} priority sizes='(min-width:992px) , 100vw' fill src={item.image} alt={item.name} />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <Loading />
            )}

        </div>
    )
}

export default SwiperHome
