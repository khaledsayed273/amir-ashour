import React from 'react'
import amirPhoto from "../../../../public/images/2.jpg"
import Image from 'next/image'

function Header() {
    // style={{ backgroundImage: `url('${amirPhoto.src}')`, backgroundSize: "cover", backgroundPosition: "center " }}

    return (
        <div data-aos="fade-up" data-aos-duration="1000" className=' relative h-[400px] md:h-[500px] xl:h-[900px] px-5 flex '>

            <Image priority style={{ objectFit: 'cover' }} sizes='(min-width:992px) , 100vw' src={amirPhoto} alt='background image' fill />
            <div className='my-auto sm:ms-10 md:ms-[50px] lg:ms-[110px] xl:ms-[120px] 2xl:ms-[200px]  md:w-[500px] z-40'>
                <div className='xl:mb-32'>
                    <div className='text-white mt-10  uppercase inline-block'>
                        <h1 className=' font-medium text-3xl md:text-4xl ms-20 sm:ms-36 md:ms-32 md:leading-none lg:mb-3 mt-5'>amir</h1>
                        <h1 className=' font-medium text-3xl md:text-4xl ms-4  sm:ms-20 md:ms-0'>ashour</h1>
                        <div className='ms-3 md:mt-2 flex justify-start mb-10 items-center'>
                            <svg width="32" height="30" viewBox="0 0 240 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line y1="19" x2="190" y2="19" stroke="white" strokeWidth="7" />
                            </svg>
                            <h1 className='capitalize text-base md:text-2xl ms-0'>Graphic designer</h1>
                        </div>
                        <div className='text-sm hidden  md:block'>
                        Egyptian graphic designer 10 years in the field of advertising, branding and social media design, Book covers of some novels, covers, posters, and Other business
                        </div>
                    </div>
                </div>


            </div>




        </div>
    )
}

export default Header
