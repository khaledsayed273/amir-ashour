import React from 'react'
import API from '@/api/API'
import Loading from '@/app/components/Loading'
import Image from 'next/image'

async function getProjectDetails(details) {
    try {
        const res = await API.get(`/projects/${details}`)
        return res.data
    } catch (e) {
        return e.response.data;
    }
}

export const revalidate = +process.env.time;

async function page({ params: { details } }) {

    let defualtStatus = false
    const data = await getProjectDetails(details)
    if (data) {
        defualtStatus = true
    }

    return (
        <main className='p-2 md:p-3 mt-2 md:mt-3 min-h-screen'>


            {defualtStatus ? (
                data.status ? (
                    <div className='container mx-auto md:px-5'>
                        {data.data.images.length > 0 ? (

                            data.data.images.map((item, index) => (
                                <Image key={index} layout="responsive" width={500} height={200} alt={index} src={item.path} />
                            ))

                        ) : 
                    <h3 className='h-[80vh] text-red-600 capitalize font-bold md:text-xl w-full flex justify-center items-center'>
                        there is no images
                    </h3>
                    }
                    </div>
                ) : (
                    <h3 className='h-[80vh] text-red-600 capitalize font-bold md:text-xl w-full flex justify-center items-center'>
                        {data.message}
                    </h3>
                )
            ) : (
                <Loading />
            )}
        </main>
    )
}

export default page
