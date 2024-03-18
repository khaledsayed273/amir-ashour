import Image from 'next/image'
import React from 'react'
import awardImage1 from "../../../public/images/awards/award1.jpeg"
import awardImage2 from "../../../public/images/awards/award2.jpeg"
import awardImage3 from "../../../public/images/awards/award3.jpeg"
import awardImage4 from "../../../public/images/awards/award4.jpeg"
import awardImage5 from "../../../public/images/awards/award5.jpeg"
import End from '../components/End'

function page() {

    const data = [
        {
            id: 1,
            image: awardImage2,
            title: "nabd gallery",
            about: "egestas mauris amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum elementum pharetra elementIt is aLorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum elementum phar"
        },
        {
            id: 2,
            image: awardImage3,
            title: "nagm gallery",
            about: "egestas mauris amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum elementum pharetra elementIt is aLorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum elementum phar"
        },
        {
            id: 3,
            image: awardImage4,
            title: "nabd gallery",
            about: "egestas mauris amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum elementum pharetra elementIt is aLorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum elementum phar"
        },
        {
            id: 4,
            image: awardImage5,
            title: "name gallery",
            about: "egestas mauris amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum elementum pharetra elementIt is aLorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum elementum phar"
        },
    ]

    return (
        <main className='p-2 md:p-3'>
            <div className="container mx-auto text-white md:px-5">
                <div className="relative w-full h-[450px] sm:h-[400px] lg:h-[500px] xl:h-[700px] my-8 xl:my-2 overflow-hidden rounded-xl border border-amber-500">
                    <Image priority style={{ objectFit: "cover" }} sizes='(max-width:992px), 100vw' fill src={awardImage1} alt='image-award' />
                    <div className='absolute flex  left-0 top-0 right-0 bottom-0 bg-black/35 '>

                    </div>
                </div>
                <p className='text-center text-sm md:text-xl font-normal'>
                    Lorem ipsum dolor sit amet, consecteo egestas mauris amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum elementum pharetra elementum iaculis consequat. Lectus  egestas mauris amet.
                </p>

                <div className="grid md:grid-cols-2 gap-5 gap-y-10 my-16">
                    {data.map((item) => (
                        <div key={item.id} >
                            <div className="relative h-[400px] xl:h-[600px] w-full overflow-hidden rounded-2xl">
                                <Image priority sizes='(max-width:992px), 100vw' fill src={item.image} alt={item.title} />
                            </div>
                            <h1 className='text-center mt-3 capitalize text-2xl'>{item.title}</h1>
                            <p className='text-center mt-3 text-sm md:text-base px-2 xl:px-10'>{item.about} </p>

                        </div>
                    ))}
                </div>

                <End />
            </div>

        </main>
    )
}

export default page
