import React from 'react'
import amirAbout from "../../../public/images/amirAbout.png"
import Image from 'next/image'
import Link from 'next/link'
import End from '../components/End'

function page() {

    const left = () => (
        <div data-aos="fade-up" data-aos-duration="1000" className='flex flex-col justify-center md:mb-20 items-center sm:block  sm:ms-5 mt-16 sm:mt-7 md:mt-0 xl:ms-20  md:w-[500px] z-40'>
            <div className='flex justify-center items-center md:block '>
                <h1 className='text-3xl md:text-4xl font-semibold md:font-medium uppercase  sm:ms-0 md:ms-0'>  amir </h1>
                <h1 className='text-3xl md:text-4xl font-semibold md:font-medium uppercase ms-5 sm:ms-7 md:ms-16 my-1 md:my-0'>  ashour </h1>
            </div>
            <div className='me-7 sm:ms-0  md:mt-2 flex justify-center mb-10 items-center'>
                <svg width="32" height="30" viewBox="0 0 240 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="19" x2="190" y2="19" stroke="white" strokeWidth="7" />
                </svg>
                <h1 className='capitalize text-base md:text-2xl ms-0 text-nowrap'>Graphic designer</h1>
            </div>
            <div className='text-sm hidden  md:block'>
                Egyptian graphic designer
                10 years in the  field of advertising, branding and social media design,
                Book covers of some novels, covers, posters, and
                Other business

            </div>
        </div>
    )

    const right = () => (
        <div data-aos="fade-up" data-aos-duration="1000" className="relative 2xl:ms-60 w-full h-[400px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] lg:w-[500px] lg:h-[500px] xl:w-[650px] xl:h-[650px]  2xl:w-[670px] 2xl:h-[670px]">
            <div data-aos="fade-up" data-aos-duration="1000" className='w-full h-full relative border-[12px]  overflow-hidden rounded-full'>
                <Image priority sizes='100vw' className='w-[65%] h-[90%] top-28 m-auto absolute left-0 right-0  bottom-7 ' alt='amir-image-about' src={amirAbout} />
            </div>
        </div>
    )

    return (
        <main className='p-2 md:p-3 mt-10'>
            <div data-aos="fade-right" data-aos-duration="1000" className='absolute left-0  sm:block top-24 sm:top-40 xl:top-96'>
                <svg className='w-[70px] lg:w-[100px]' height="50" viewBox="0 0 170 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M325 47.1727C300.46 16.1275 232.977 -29.8874 159.359 34.4146C85.7408 98.7167 23.7788 56.1035 2 26.7591" stroke="white" strokeWidth="3.41894" />
                </svg>
                <svg className='w-[100px] lg:w-[150px]' height="50" viewBox="0 0 325 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 47.1727C26.5396 16.1275 94.0234 -29.8874 167.641 34.4146C241.259 98.7167 303.221 56.1035 325 26.7591" stroke="white" strokeWidth="3.41894" />
                </svg>
            </div>
            <div className="container mx-auto text-white md:px-5 ">
                <div className='relative flex flex-col-reverse lg:flex-row sm:items-center mt-10 md:mt-0'>

                    {left()}
                    {right()}


                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className='flex justify-center items-center mt-16 lg:mt-0 md:relative'>
                    <Link className='bg-white flex justify-center items-center text-lg lg:text-2xl text-black static  lg:absolute lg:left-40 xl:left-60 2xl:left-64 -top-7 w-[140px]  lg:w-[265px] h-[40px] lg:h-[60px] rounded-full font-bold capitalize shadow-lg shadow-white/40 hover:opacity-75' href={"/contact"}>contact</Link>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className='mt-10 lg:mt-32'>
                    <p className='text-center font-normal text-sm leading-7 md:leading-normal md:text-xl'>

                        a creative professional responsible for conceptualizing and creating visual designs to
                        communicate ideas or messages. work across various mediums such as print, digital,
                        and multimedia to produce designs for branding, marketing materials, publications,
                        websites, and more. Graphic designers typically possess strong skills in sofwware tools
                        like Adobe Creative Suite (Photoshop, Illustrator, InDesign), as well as an understanding
                        of design principles, typography, color theory, and layout techniques. collaborate with clients,
                        art directors, or marketing teams to understand project requirements and deliver designs
                        that meet objectives while conveying the desired message effectively.



                    </p>
                </div>
                <End />
            </div>



        </main>
    )
}

export default page
