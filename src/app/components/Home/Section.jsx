import Link from 'next/link'
import React from 'react'

function Section() {
    return (
        <section className='bg-sectionColor md:bg-sectionColorLg transition-all duration-700 h-[400px] text-white p-5'>
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
            
        </section>
    )
}

export default Section
