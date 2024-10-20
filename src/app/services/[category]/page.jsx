/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useParams } from 'next/navigation'
import Popop from './components/Popop'
import { useRouter } from 'next/navigation'
import Loading from '../../components/Loading'

function Page() {
    const { category } = useParams()
    const [service, setService] = useState(null)
    const [projects, setProjects] = useState(null)
    const [limit, setLimit] = useState(16)
    const [showLoading, setShowLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(true)
    const [img, setImg] = useState("")
    const router = useRouter()

    const convertImage = (w, h) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#333" offset="20%" />
          <stop stop-color="#222" offset="50%" />
          <stop stop-color="#333" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#333" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>`;

    const toBase64 = (str) =>
        typeof window === 'undefined'
            ? Buffer.from(str).toString('base64')
            : window.btoa(str);

    function closeModal() {
        setIsOpen(false)
    }
    function openModal() {
        setIsOpen(true)
    }

    const getOneService = async () => {
        setShowLoading(true)
        try {
            const res = await axios.get(`https://dashboard.amir-ashour.com/api/v1/services/${category}`)
            setShowLoading(false)
            return setService(res.data)
        } catch (e) {
            router.push('/notFound')
        }

    }

    const getProjects = async (newLimit) => {
        setShowLoading(true)
        try {

            const res = await axios.get(`https://dashboard.amir-ashour.com/api/v1/projects?limit=${newLimit ? newLimit : limit}&service_id=${service?.data.id}`)
            return setProjects(res.data)
        } catch (e) {
            console.log(e);
        }
        setShowLoading(false)
    }

    useEffect(() => {
        getOneService()
    }, [])

    useEffect(() => {
        if (service?.status) {
            getProjects()

        }
    }, [service?.status])


    useEffect(() => {
        if (projects?.status) {
            setShowLoading(false)
        }

    }, [projects])

    const handleLimit = () => {
        setShowLoading(true)
        let prevLimit = limit + 16
        setLimit(prevLimit)
        getProjects(prevLimit)
    }

    const cardStyle = (item) => {
        return (
            <>
                <div className="relative w-full h-[400px] xl:h-[450px] overflow-hidden rounded-xl border border-gray-800">
                    <Image
                    
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(
                            convertImage(700, 475)
                        )}`}
                        sizes='(max-width: 768px) 100vw ,(min-width:992px) 100vw' style={{objectFit: "cover"}} src={item.image} fill alt={`${item.name}`} />
                </div>
                <div className='absolute top-0 bottom-0 left-0 right-0 rounded-xl bg-black/80 opacity-0 flex justify-center items-center  group-hover:lg:opacity-100 transition-all duration-500'>
                </div>
            </>
        )
    }

    const handleOpen = (item) => {
        openModal()
        setImg(item.image)
    }

    return (
        <div className='p-2 md:p-3'>
            {projects?.status ? (
                <div className="container mx-auto text-white md:px-5">
                    <div className="relative  sm:w-full mx-auto">
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
                    {
                        projects?.data.data.length > 0 ? (
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 gap-y-10 lg:gap-10 mb-10 mt-14">
                                {projects.data.data.map((item) => (
                                    category === "book-cover" || category === "typography" ? (
                                        <div key={item.id} >
                                            <div className='relative hover:lg:scale-105 transition-all duration-500 cursor-pointer group' onClick={() => handleOpen(item)}>
                                                {cardStyle(item)}
                                            </div>

                                        </div>
                                    ) : (
                                        <Link className='hover:lg:scale-105 transition-all duration-500 relative group' key={item.id} href={`/project/${item.slug}`}>
                                            {cardStyle(item)}
                                        </Link>
                                    )

                                ))}
                            </div>
                        ) : (
                            <h1 className='text-center flex justify-center items-center h-[40vh] text-grayColor font-bold capitalize text-xl '>sorry there is no data</h1>

                        )
                    }

                    {img && (
                        <Popop img={img} isOpen={isOpen} setIsOpen={setIsOpen} closeModal={closeModal} />
                    )}

                    <div className='flex flex-col justify-center items-center my-10'>
                        {showLoading && (
                            <div className='animate-spin flex justify-center items-center h-full mt-10'>
                                <div className='w-14 h-14 bg-transparent border-8 border-t-yellow-700 border-r-yellow-700 border-l-transparent border-b-yellow-700  rounded-full'>
                                </div>
                            </div>
                        )}
                        {limit < projects?.data.meta.total && (
                            <button onClick={handleLimit} className='inline-block mt-7 hover:opacity-70 bg-yellow-800 capitalize px-12 py-1.5 rounded-full'>more</button>
                        )}
                    </div>

                </div>

            ) : (
                <Loading />
            )}


        </div>
    )
}

export default Page
