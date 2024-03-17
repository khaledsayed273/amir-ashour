"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function HeadService({ data }) {

    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (data.length > activeIndex + 1) {
                setActiveIndex(prevIndex => prevIndex + 1);
            } else {
                setActiveIndex(0)
            }

        }, 5000);

        return () => clearTimeout(timeout);
    }, [activeIndex, data.length]);
    

    return (
        <>
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] my-8 xl:my-12 overflow-hidden rounded-xl border border-amber-500">
                <Image className='transition-all duration-500 ' src={data[activeIndex].image} fill alt='image' />
                <div className='absolute flex  left-0 top-0 bottom-0 right-0 bg-black/85'>
                    <div className='flex flex-col  justify-end p-5 xl:p-10'>
                        <div className='flex items-center mb-5'>
                            <span className='h-4 w-4 rounded-full bg-white me-2'></span>
                            <h1 className='text-amber-200 md:text-xl'>{data[activeIndex].head}</h1>
                        </div>
                        <p className='md:text-xl ms-6'>{data[activeIndex].about}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeadService
