import React from 'react'
import SwiperDetails from './components/SwiperDetails'
import API from '@/api/API'
import Loading from '@/app/components/Loading'

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
                    <SwiperDetails data={data.data} />
                ) : (
                    <div className='h-[80vh] text-red-600 capitalize font-bold md:text-xl w-full flex justify-center items-center'>
                        {data.message}
                    </div>
                )
            ) : (
                <Loading />
            )}
        </main>
    )
}

export default page
