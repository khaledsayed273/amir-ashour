"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import img1 from "../../../../public/images/services/1.jpeg"
import img2 from "../../../../public/images/services/2.png"
import img3 from "../../../../public/images/services/3.jpeg"
import img4 from "../../../../public/images/services/4.png"
import img5 from "../../../../public/images/services/5.jpeg"
import Link from 'next/link'

function Page({ params: { category } }) {

    const data = [
        {
            id: 1,
            image: img1,
            title: "books cover",
            head: "History of The Great King",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum elementum phauy amet."
        },
        {
            id: 2,
            image: img2,
            title: "logos",
            head: "History of The Great King",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum elementum phauy amet."
        },
        {
            id: 3,
            image: img3,
            title: "posters",
            head: "History of The Great King",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum elementum phauy amet."
        },
        {
            id: 4,
            image: img4,
            title: "social media",
            head: "History of The Great King",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum elementum phauy amet."
        },
        {
            id: 5,
            image: img5,
            title: "typography",
            head: "History of The Great King",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum elementum phauy amet."
        }
    ]

    const [limit , setLimit] = useState(8)

    const handleLimit = () => {
        setLimit(prev => prev + 8)
    }
    
    console.log(limit);

    return (
        <main className='p-2 md:p-3 mt-2 md:mt-5'>
            <div className="container mx-auto text-white md:px-5">
                <div data-aos="fade-up" data-aos-duration="1000" className="relative  sm:w-full mx-auto">
                    <h1 className='absolute top-6 left-8 md:top-8 md:left-12 xl:top-7 xl:left-14 text-xl md:text-3xl xl:text-[60px] uppercase font-semibold xl:font-medium'>books cover</h1>
                    <svg className='w-[270px] md:w-[400px] xl:w-[450px]' viewBox="0 0 722 175" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="104.5" cy="101.5" r="73.5" fill="url(#paint0_radial_122_765)" />
                        <circle cx="81.5" cy="81.5" r="80.5" stroke="#D69D66" strokeWidth="2" />
                        <defs>
                            <radialGradient id="paint0_radial_122_765" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(104.5 101.5) rotate(90) scale(73.5)">
                                <stop stopColor="#D69D66" />
                                <stop offset="1" stopColor="#D69D66" stopOpacity="0.66" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" className="relative w-full h-[450px] sm:h-[400px] lg:h-[500px] xl:h-[600px] my-8 xl:my-12 overflow-hidden rounded-xl border border-amber-500">
                    <Image placeholder='blur' priority sizes='(max-width:992px), 100vw' src={data[0].image} fill alt='image' />
                    <div className='absolute flex  left-0 top-0 bottom-0 right-0 bg-black/70'>
                        <div className='flex flex-col  justify-end p-5 xl:p-10'>
                            <div className='flex items-center mb-5'>
                                <span className='h-4 w-4 rounded-full bg-white me-2'></span>
                                <h1 className='text-amber-200 md:text-xl'>{data[0].head}</h1>
                            </div>
                            <p className='md:text-xl ms-6'>{data[0].about}</p>
                        </div>
                    </div>
                </div>


                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-10 lg:gap-10 mb-10 mt-20">
                    {data?.map((item) => (
                        <Link data-aos="fade-up" data-aos-duration="1000" className='hover:scale-90 transition-all duration-500' key={item.id} href={`/services/${category}/${item.id}`}>
                            <div className="relative w-full h-[300px] xl:h-[350px] overflow-hidden rounded-xl border border-orange-400">
                                <Image priority sizes='(max-width:992px) , 100vw' src={item.image} fill alt={`${item.title}`} />
                            </div>
                            <h1 className='mt-3 text-center capitalize text-xl lg:text-xl'>{item.title}</h1>
                        </Link>
                    ))}
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" className='flex justify-center items-center my-10  '>
                    <button onClick={handleLimit} className='inline-block bg-yellow-800 capitalize px-12 py-1.5 rounded-full'>more</button>
                </div>

            </div>
        </main>
    )
}

export default Page
