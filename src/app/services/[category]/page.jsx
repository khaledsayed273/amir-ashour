import Image from 'next/image'
import React from 'react'
import img1 from "../../../../public/images/services/1.jpeg"
import img2 from "../../../../public/images/services/2.png"
import img3 from "../../../../public/images/services/3.jpeg"
import img4 from "../../../../public/images/services/4.png"
import img5 from "../../../../public/images/services/5.jpeg"
import img6 from "../../../../public/images/services/6.jpeg"
import Link from 'next/link'
import HeadService from './components/HeadService'

function page({params : {category}}) {

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

    return (
        <main className='p-2 md:p-3 mt-2 md:mt-5'>
            <div className="container mx-auto text-white md:px-5">
                <div className="relative  sm:w-full mx-auto">
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
                <HeadService data={data} />
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-10 lg:gap-10 mb-10 mt-20">
                    {data?.map((item) => (
                        <Link className='hover:scale-90 transition-all duration-500' key={item.id} href={`/services/${category}/${item.id}`}>
                            <div className="relative w-full h-[300px] xl:h-[350px] overflow-hidden rounded-xl border border-orange-400">
                                <Image priority sizes='(min-width:992px) , 100vw' src={item.image} fill alt={item.title} />
                            </div>
                            <h1 className='mt-3 text-center capitalize text-xl lg:text-xl'>{item.title}</h1>
                        </Link>
                    ))}
                </div>

            </div>
        </main>
    )
}

export default page
