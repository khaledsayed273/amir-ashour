"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import img1 from "../../../public/images/services/1.jpeg"
import img2 from "../../../public/images/services/2.png"
import img3 from "../../../public/images/services/3.jpeg"
import img4 from "../../../public/images/services/4.png"
import img5 from "../../../public/images/services/5.jpeg"

function page() {

    const data = [
        {
            id: 1,
            image: img1,
            title: "books cover"
        },
        {
            id: 2,
            image: img2,
            title: "logos"
        },
        {
            id: 3,
            image: img3,
            title: "posters"
        },
        {
            id: 4,
            image: img4,
            title: "social media"
        },
        {
            id: 5,
            image: img5,
            title: "typography"
        }
    ]

    return (
        <main className='p-2 md:p-3 mt-10'>
            <div className="container mx-auto text-white md:px-5">
                <div className="grid md:grid-cols-2 gap-x-2 gap-y-10 md:gap-10 mb-5">
                    {data.map((item , index) => (
                        <Link key={item.id} href={`/services/${item.id}`} className={`hover:scale-90 transition-all duration-500 ${index+1 === data.length && data.length % 2 !== 0  ? "md:col-span-2" : "" }`}>
                        
                            <div className='relative rounded-2xl overflow-hidden h-[300px] sm:h-[350px] lg:h-[450px]'>
                            <div className='absolute w-full h-full left-0 top-0 bg-black/40'>

                            </div>
                                <Image  src={item.image} className='w-full h-full top-0' alt={item.title} priority />
                            </div>
                            <h1 className='text-center mt-5 text-xl xl:text-4xl font-bold md:font-medium uppercase'>{item.title}</h1>

                        </Link>
                    ))}

                </div>
            </div>
        </main>
    )
}

export default page
