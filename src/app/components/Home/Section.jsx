import Link from 'next/link'
import React from 'react'

function Section() {
    return (
        <section className='bg-sectionColor relative md:bg-sectionColorLg transition-all duration-700 min-h-[400px] text-white p-5'>
            <div className='text-base block font-semibold  md:hidden mb-7 text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque et, condimentum iaculis ac. Enim leo sit vestibulum vulputate placerat vulputate. Quis egestas pellentesque faucisceleri
            </div>
            <div className='flex justify-center items-center '>
                <Link className='bg-white text-black px-8 py-1.5 rounded-xl font-bold capitalize' href={"/contact"}>contact</Link>
            </div>
            <div className='flex flex-col justify-center items-center mt-7 text-xl sm:text-2xl md:text-4xl font-semibold'>
                <h1>HEY THERE !</h1>
                <h1 className='mt-4'>THIS IS MY PORTFOLIO</h1>
            </div>

            <div className="container mx-auto p-5">
                <div className='relative mt-5'>
                    <div className='bg-grayColor  absolute top-3 left-2 w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full'>
                    </div>
                    <div className='border-grayColor  border w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full'>
                    </div>
                    <div className='font-bold text-xl md:text-3xl absolute top-7 md:top-10 left-7 md:left-9 z-10'>
                        SKILLS
                    </div>
                </div>

                <div className='flex  sm:flex-row justify-between md:justify-around  mt-20'>
                    <div >
                        <div className='flex justify-start items-center my-7'>
                            <div className='bg-grayColor w-3 h-3 rounded-full'>
                            </div>
                            <h1 className='md:text-xl ms-2 font-bold'>Visual design</h1>
                        </div>
                        <div className='flex justify-start items-center my-7'>
                            <div className='bg-grayColor w-3 h-3 rounded-full'>
                            </div>
                            <h1 className='md:text-xl ms-2 font-bold'>Problem solving</h1>
                        </div>
                        <div className='flex justify-start items-center my-7'>
                            <div className='bg-grayColor w-3 h-3 rounded-full'>
                            </div>
                            <h1 className='md:text-xl ms-2 font-bold'>Design thinking</h1>
                        </div>
                        <div className='flex justify-start items-center my-7'>
                            <div className='bg-grayColor w-3 h-3 rounded-full'>
                            </div>
                            <h1 className='md:text-xl ms-2 font-bold'>Content create</h1>
                        </div>
                    </div>
                    <div >
                        <div className='flex justify-start items-center my-7'>
                            <div className='bg-grayColor w-3 h-3 rounded-full'>
                            </div>
                            <h1 className='md:text-xl ms-2 font-bold'>Visual design</h1>
                        </div>
                        <div className='flex justify-start items-center my-7'>
                            <div className='bg-grayColor w-3 h-3 rounded-full'>
                            </div>
                            <h1 className='md:text-xl ms-2 font-bold'>Problem solving</h1>
                        </div>
                        <div className='flex justify-start items-center my-7'>
                            <div className='bg-grayColor w-3 h-3 rounded-full'>
                            </div>
                            <h1 className='md:text-xl ms-2 font-bold'>Design thinking</h1>
                        </div>
                        <div className='flex justify-start items-center my-7'>
                            <div className='bg-grayColor w-3 h-3 rounded-full'>
                            </div>
                            <h1 className='md:text-xl ms-2 font-bold'>Content create</h1>
                        </div>
                    </div>
                    

                </div>
            </div>


            <div className='absolute right-0 top-80 md:top-56'>
                <svg className='w-[70px] lg:w-[100px] ms-auto' height="50" viewBox="0 0 170 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M325 47.1727C300.46 16.1275 232.977 -29.8874 159.359 34.4146C85.7408 98.7167 23.7788 56.1035 2 26.7591" stroke="white" strokeWidth="3.41894" />
                </svg>

                <svg className='w-[100px] lg:w-[150px]' height="50" viewBox="0 0 325 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 47.1727C26.5396 16.1275 94.0234 -29.8874 167.641 34.4146C241.259 98.7167 303.221 56.1035 325 26.7591" stroke="white" strokeWidth="3.41894" />
                </svg>
            </div>

        </section>
    )
}

export default Section
