import React from 'react'
import amirAbout from "../../../public/images/amirAbout.png"
import Image from 'next/image'
import Link from 'next/link'

function page() {
    return (
        <main className='p-2 md:p-3 mt-10'>
         <div className='absolute left-0  sm:block top-24 sm:top-40 xl:top-96'>
                <svg className='w-[70px] lg:w-[100px]' height="50" viewBox="0 0 170 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M325 47.1727C300.46 16.1275 232.977 -29.8874 159.359 34.4146C85.7408 98.7167 23.7788 56.1035 2 26.7591" stroke="white" strokeWidth="3.41894" />
                </svg>

                <svg className='w-[100px] lg:w-[150px]' height="50" viewBox="0 0 325 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 47.1727C26.5396 16.1275 94.0234 -29.8874 167.641 34.4146C241.259 98.7167 303.221 56.1035 325 26.7591" stroke="white" strokeWidth="3.41894" />
                </svg>
            </div>
            <div className="container mx-auto text-white md:px-5 ">
                <div className='relative'>
                    <div className='sm:absolute flex flex-col items-center sm:block  sm:ms-5 mt-16 sm:mt-32 md:mt-32 xl:ms-20  md:w-[500px] z-40'>
                        <div className='flex justify-center items-center sm:block '>
                            <h1 className='text-3xl md:text-4xl font-semibold md:font-medium uppercase  sm:ms-0 md:ms-0'>  amir </h1>
                            <h1 className='text-3xl md:text-4xl font-semibold md:font-medium uppercase ms-5 sm:ms-7 md:ms-16 my-1 md:my-0'>  ashour </h1>
                        </div>
                        <div className='me-7 sm:ms-0 md:ms-60 md:mt-2 flex justify-start mb-10 items-center'>
                            <svg width="32" height="30" viewBox="0 0 240 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line y1="19" x2="190" y2="19" stroke="white" strokeWidth="7" />
                            </svg>
                            <h1 className='capitalize text-base md:text-2xl ms-0'>designer</h1>
                        </div>
                        <div className='text-sm hidden  md:block'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque et, condimentum iaculis ac. Enim leo sit vestibulum vulputate placerat vulputate. Quis egestas pellentesque faucisceleri
                        </div>
                    </div>

                    <div className="relative ms-auto w-full h-[400px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[600px] lg:w-[600px] lg:h-[600px] xl:w-[650px] xl:h-[650px]  2xl:w-[670px] 2xl:h-[670px]">
                        <svg className='absolute h-full w-full' viewBox="0 0 853 821" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M844.5 410.5C844.5 632.215 657.664 812.5 426.5 812.5C195.336 812.5 8.5 632.215 8.5 410.5C8.5 188.785 195.336 8.5 426.5 8.5C657.664 8.5 844.5 188.785 844.5 410.5Z" stroke="white" stroke-opacity="0.95" stroke-width="17" />
                        </svg>

                        <Image priority sizes='(min-width:992px) , 100vw' style={{ width: "75%", height: "90%" }} className='m-auto absolute left-0 right-0  bottom-0' alt='amir-image-about' src={amirAbout} />
                    </div>
                </div>
                <div className='flex justify-center items-center mt-16 lg:mt-0 md:relative'>
                    <Link className='bg-white flex justify-center items-center text-lg lg:text-2xl text-black static  lg:absolute lg:left-40 xl:left-60 2xl:left-64 -top-7 w-[140px]  lg:w-[265px] h-[40px] lg:h-[60px] rounded-full font-bold capitalize shadow-lg shadow-white/40 hover:opacity-75' href={"/contact"}>contact</Link>
                </div>
                <div className='mt-10 lg:mt-32'>
                    <p className='text-center font-normal text-sm leading-7 md:leading-normal md:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque et, condimentum iaculis ac. Enim leo sit vestibulum vulputate placerat vulputate. Quis egestas pellentesque faucisceleriLorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque et, condimentum iaculis ac. Enim leo sit vestibulum vulputate placerat vulputate. Quis egestas pellentesque faucisceleriLorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque et, condimentum iaculis ac. Enim leo sit vestibulum vulputate placerat vulputate. Quis egestas pellentesque faucisceleriLorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque et, condimentum iaculis ac. Enim leo sit vestibulum vulputate placerat vulputate. Quis egestas pellentesque faucisceleriLorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque et, condimentum iaculis ac. Enim leo sit vestibulum vulputate placerat vulputate. Quis egestas pellentesque faucisceleriLorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque et, condimentum iaculis ac. Enim leo sit vestibulum vulputate placerat vulputate. Quis egestas pellentesque faucisceleriLorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque et, condim.</p>
                </div>
            </div>



        </main>
    )
}

export default page
