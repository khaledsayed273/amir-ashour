import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import API from '@/api/API'

async function getService() {
    try {
        const res = await API.get(`/services`)
        return res
    } catch (e) {
        console.log(e);
    }
}

export const revalidate = +process.env.time;

async function page() {

    const { data: { data, status } } = await getService()

    return (
        <main className='p-2 md:p-3 mt-10'>
            <div className="container mx-auto text-white md:px-5">
                <div data-aos="fade-up" data-aos-duration="1000" className="grid md:grid-cols-2 gap-x-2 gap-y-10 md:gap-10 mb-5">
                    {status && (
                        data?.map((item, index) => (
                            <Link data-aos="fade-up" data-aos-duration="1000" key={item.slug} href={`/services/${item.slug}`} className={`hover:scale-90 transition-all duration-500 ${index + 1 === data.length && data.length % 2 !== 0 ? "md:col-span-2" : ""}`}>

                                <div className='relative rounded-2xl overflow-hidden h-[300px] sm:h-[350px] lg:h-[450px]'>
                                    <div className='absolute w-full h-full left-0 top-0 z-40 bg-black/40'>
                                    </div>
                                    <Image priority sizes='(max-width:992px),100vw' fill src={item.image} alt={item.name} />
                                </div>
                                <h1 className='text-center mt-5 text-xl xl:text-4xl font-bold md:font-medium uppercase'>{`${item.name}`}</h1>

                            </Link>
                        ))
                    )}


                </div>
            </div>
        </main>
    )
}

export default page
