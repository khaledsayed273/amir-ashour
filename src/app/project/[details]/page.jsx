import React from 'react'
import API from '@/api/API'
import Loading from '@/app/components/Loading'
import Image from 'next/image'

async function getProjectDetails(details) {
    try {
        const res = await API.get(`/projects/${details}`)
        return res.data
    } catch (e) {
        return e.response.data;
    }
}

export const revalidate = +process.env.time;

async function page({ params: { details } }) {

    let defualtStatus = false
    const data = await getProjectDetails(details)
    if (data) {
        defualtStatus = true
    }

    return (
        <main className='p-2 md:p-3 mt-2 md:mt-3 min-h-screen'>

            <div data-aos="fade-up" data-aos-duration="1000" className="container mx-auto text-white md:px-5">
                <div className="relative w-full h-[450px] sm:h-[400px] lg:h-[500px] xl:h-[600px] my-8 xl:mt-2  overflow-hidden rounded-xl border border-amber-500">
                    <Image priority src={data.data.image} fill alt='image' />
                    <div className='absolute flex justify-center left-0 md:left-1/2 right-0 md:right-0  bottom-0  bg-white text-center text-amber-600 py-3 px-10 font-semibold text-sm md:text-xl rounded-t-xl md:-translate-x-1/2 '>
                        {data.data.name}
                    </div>
                </div>
                <p className='text-center text-sm md:text-xl font-normal'>{data.description}</p>
            </div>
            {defualtStatus ? (
                data.status ? (
                    <div className='container mx-auto md:px-5'>
                        {data.data.images.map((item, index) => (
                            <Image key={index} layout="responsive" width={500} height={200} alt={index} src={item.path} />
                        ))}
                    </div>
                ) : (
                    <div className='h-[80vh] text-red-600 capitalize font-bold md:text-xl w-full flex justify-center items-center'>
                        {data.message}
                    </div>
                )
            ) : (
                <Loading />
            )}
        </main>
    )
}

export default page
