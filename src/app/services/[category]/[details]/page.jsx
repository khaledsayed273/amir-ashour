import React from 'react'
import SwiperDetails from './components/SwiperDetails'
import img1 from "../../../../../public/images/img1slider.jpeg"
import img2 from "../../../../../public/images/img2slider.jpeg"
import img3 from "../../../../../public/images/img3slider.jpeg"
function page() {


    const data = [
        {
            id: 1,
            about: "Lorem ipsum dolor sit amet, consecteo egestas mauris amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum elementum pharetra elementum iaculis consequat. Lectus  egestas mauris amet.",
            image: img2,
            name: "Darkness"
        },
        {
            id: 2,
            about: " moment of inspiration struck  didn&apos;t exist at the time. Determined to overcome this hurdle, Vasily took matters into his own hands and developed one of the earliest and most comprehensive LSAT apps on the market. The app quickly gained.",
            image: img1,
            name: "Darkness2"

        },
        {
            id: 3,
            about: "Lorem ipsum dolor sit amet, consecteo egestas mauris amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum elementum pharetra elementum iaculis consequat. Lectus  egestas mauris amet. Lorem ipsum dolor sit amet, consecteo egestas mauris amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum elementum pharetra elementum iaculis consequat. Lectus  egestas mauris amet.",
            image: img3,
            name: "dgdsfefasdfd"

           
        },
    ]

    return (
        <main className='p-2 md:p-3 mt-2 md:mt-3'>
            <SwiperDetails data={data} />
        </main>
    )
}

export default page
