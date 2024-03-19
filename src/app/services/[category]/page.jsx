"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useParams } from 'next/navigation'
import Loading from '@/app/components/Loading'

function Page() {

    const { category } = useParams()
    const [service, setService] = useState(null)
    const [projects, setProjects] = useState(null)
    const [limit, setLimit] = useState(8)
    const [showLoading, setShowLoading] = useState(false)

    const getOneService = async () => {
        try {
            const res = await axios.get(`https://amir.mixtesting.online/api/v1/services/${category}`)
            return setService(res.data)
        } catch (e) {
            console.log(e);
        }
    }

    const getProjects = async (newLimit) => {
        try {
            const res = await axios.get(`https://amir.mixtesting.online/api/v1/projects?limit=${newLimit ? newLimit : limit}&service_id=1`)
            return setProjects(res)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getOneService()
        getProjects()

    }, [])

    useEffect(() => {
        if (projects?.status) {
            setShowLoading(false)
        }

    }, [projects])

    const handleLimit = () => {
        let prevLimit = limit + 8
        setLimit(prevLimit)
        getProjects(prevLimit)
        setShowLoading(true)
    }


    return (
        <main className='p-2 md:p-3 mt-2 md:mt-5 min-h-screen'>
            {service?.status ? (

                <div className="container mx-auto text-white md:px-5">
                    <div data-aos="fade-up" data-aos-duration="1000" className="relative  sm:w-full mx-auto">
                        <h1 className='absolute top-6 left-8 md:top-8 md:left-12 xl:top-7 xl:left-14 text-xl md:text-3xl xl:text-[60px] uppercase font-semibold xl:font-medium'>{service.data.name}</h1>
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
                        <Image priority sizes='(max-width:992px), 100vw' src={service.data.image} fill alt='image' />
                        <div className='absolute flex  left-0 top-0 bottom-0 right-0 bg-black/70'>
                            <div className='flex flex-col  justify-end p-5 xl:p-10'>

                                <p className='md:text-xl ms-6'>{service.data.description}</p>
                            </div>
                        </div>
                    </div>


                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-10 lg:gap-10 mb-10 mt-20">
                        {projects?.status ? (
                            projects.data.data.data.map((item) => (
                                <Link data-aos="fade-up" data-aos-duration="1000" key={item.id} href={`/project/${item.slug}`}>
                                    <div className="relative w-full h-[300px] xl:h-[350px] hover:scale-90 transition-all duration-500  overflow-hidden rounded-xl border border-orange-400">
                                        <Image sizes='(max-width:992px) , 100vw' src={item.image} fill alt={`${item.name}`} />
                                    </div>
                                    <h1 className='mt-3 text-center capitalize text-xl lg:text-xl'>{item.name}</h1>
                                </Link>
                            ))
                        ) : (
                            <Loading />
                        )}


                    </div>

                    <div className='flex flex-col justify-center items-center my-10'>
                        {showLoading && (
                            <div className='animate-spin flex justify-center items-center h-full mt-10'>
                                <div className='w-14 h-14 bg-transparent border-8 border-t-yellow-700 border-r-yellow-700 border-l-transparent border-b-yellow-700  rounded-full'>
                                </div>
                            </div>
                        )}
                        {limit <= projects?.data.data.meta.total && (
                            <button onClick={handleLimit} className='inline-block mt-16 bg-yellow-800 capitalize px-12 py-1.5 rounded-full'>more</button>

                        )}
                    </div>

                </div>

            ) : (
                <Loading />
            )}


        </main>
    )
}

export default Page
