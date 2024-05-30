"use client"
import React, { useState } from 'react'
import bg from "../../../public/images/backgroundImage.jpeg"
import Image from 'next/image'
import Link from 'next/link'

function End() {
    const [email, setEmail] = useState("")

    const handleSend = () => {

    }

    return (
        <div className="container mx-auto p-3 mt-10 ">
            <div className='text-white relative h-[300px] md:h-[450px] overflow-hidden rounded-2xl mb-10'>
                <Image style={{objectFit: "cover"}} priority src={bg} fill alt='bg' />
                <div className='absolute z-40 left-0 top-0 bottom-0 right-0 flex flex-col justify-center items-center'>
                    <svg className='hover:rotate-[360deg] transition-all duration-500 w-[55px] md:w-[75px]' viewBox="0 0 75 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M67.6686 34.8065V50.9999C67.6686 53.1888 66.7858 55.1735 65.3641 56.6062C63.9424 58.0389 61.9729 58.9285 59.8008 58.9285H12.1686C9.99648 58.9285 8.02691 58.0389 6.6052 56.6062C5.18351 55.1735 4.30078 53.1888 4.30078 50.9999V20.9999C4.30078 18.8015 5.19126 16.8089 6.62387 15.3748C8.04412 13.9532 10.006 13.0713 12.1686 13.0713H46.1C45.6144 14.2925 45.2676 15.5849 45.0794 16.9284H12.1686C11.8282 16.9284 11.4979 16.9707 11.1825 17.0503L35.2784 38.7869L35.28 38.7884C35.6822 39.147 36.2866 39.1472 36.6888 38.7888L36.691 38.7869L47.8223 28.74C48.5482 29.8046 49.3934 30.7802 50.3383 31.6473L47.6562 34.068L63.7119 52.0268C63.7962 51.6989 63.841 51.3548 63.841 50.9999V35.835C65.1744 35.6453 66.4568 35.2959 67.6686 34.8065ZM44.805 36.6415L61.0924 54.8593C60.687 54.997 60.2529 55.0713 59.8008 55.0713H12.1686C11.7637 55.0713 11.373 55.0117 11.0046 54.9003L28.1967 37.5755L32.7304 41.6652L32.7355 41.6697C34.5885 43.3295 37.3809 43.3295 39.2339 41.6697L39.2393 41.6649L44.805 36.6415ZM25.3406 34.9989L8.29811 52.1728C8.18761 51.8016 8.12837 51.4079 8.12837 50.9999V20.9999C8.12837 20.534 8.20561 20.0868 8.34822 19.6703L25.3406 34.9989Z" fill="white" />
                        <path d="M61.5021 30.2141C67.4915 30.2141 72.3469 25.3212 72.3469 19.2855C72.3469 13.2498 67.4915 8.35693 61.5021 8.35693C55.5126 8.35693 50.6572 13.2498 50.6572 19.2855C50.6572 25.3212 55.5126 30.2141 61.5021 30.2141Z" fill="#D9852C" stroke="white" strokeWidth="3" />
                    </svg>
                    <h1 data-aos="fade-up" data-aos-duration="1000" className='mt-5 mb-2 md:text-3xl font-bold md:font-semibold'>Say something cool !</h1>
                    <h2 data-aos="fade-up" data-aos-duration="1000" className='text-center text-sm md:text-xl font-normal px-2'>Stay in the loop with updates from our team and community. </h2>
                    <Link className='mt-5 bg-white py-1.5 px-7 text-black rounded-full shadow-lg shadow-white/40 hover:opacity-75 capitalize' href={"/contact"}>contact us</Link>
                </div>
            </div>
        </div>
    )
}

export default End
