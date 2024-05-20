import Image from 'next/image'
import React from 'react'
import awardImage1 from "../../../public/images/awards/award1.jpeg"
import awardImage2 from "../../../public/images/awards/award2.jpeg"
import awardImage3 from "../../../public/images/awards/award3.jpeg"
import awardImage4 from "../../../public/images/awards/award4.jpeg"
import awardImage5 from "../../../public/images/awards/award5.jpeg"
import End from '../components/End'
import API from '@/api/API'
import Loading from '../components/Loading'


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

                {awards?.status ? (
                    <>
                        <p data-aos="fade-up" data-aos-duration="1000" className='text-center text-sm md:text-xl font-normal mt-5'>
                            Egyptian graphic designer
                            10 years in the field of advertising, branding and social media design,
                            Book covers of some novels, covers, posters, and
                            Other business
                            I studied Arabic calligraphy and its uses in my designs
                            Specializing in designing book covers, I have designed more than 400 book covers in
                            Egypt, the Arab world, and Europe
                            Book cover designs have won some awards
                        </p>

                        <div className="grid md:grid-cols-2 gap-5 gap-y-10 my-16">
                            {awards.data.map((item) => (
                                <div data-aos="fade-up" data-aos-duration="1000" key={item.id} >
                                    <div className="relative h-[400px] xl:h-[600px] w-full overflow-hidden rounded-2xl">
                                        <Image priority sizes='(max-width:992px), 100vw' fill src={item.image} alt={item.name} />
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

        </main>
    )
}

export default page
