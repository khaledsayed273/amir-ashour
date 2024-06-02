import Image from 'next/image'
import React from 'react'
import End from '../components/End'
import API from '@/api/API'
import Loading from '../components/Loading'

export const metadata = {
    title: 'Awards',
    keywords: 'Awards , Amir ashour',
    description: "amir ashour Awards"
}

async function getAwards() {
    try {
        const res = await API.get(`/awards`)
        return res.data
    } catch (e) {
        return e.response.data;
    }
}

export const revalidate = +process.env.time;


async function page() {

    const awards = await getAwards()

    return (
            <div className="container px-2 mx-auto text-white md:px-5">
                {awards?.status ? (
                    <>
                        <div className="grid md:grid-cols-2 gap-5 md:gap-10 gap-y-10 my-16">
                            {awards.data.map((item) => (
                                <div data-aos="fade-up" data-aos-duration="1000" key={item.id} >
                                    <div className="relative h-[600px] xl:h-[900px] w-full overflow-hidden rounded-2xl">
                                        <Image style={{objectFit: "fill"}} priority sizes='(max-width:992px), 100vw' fill src={item.image} alt={item.name} />
                                    </div>
                                    <h1 className='text-center mt-3 capitalize text-2xl'>{item.name}</h1>
                                    <p className='text-center mt-3 text-sm md:text-base px-2 xl:px-10'>{item.description} </p>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <Loading />
                )}
                <End />
            </div>
    )
}

export default page
