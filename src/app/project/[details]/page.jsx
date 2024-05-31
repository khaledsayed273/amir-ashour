import API from '@/api/API'
import Image from 'next/image'

async function getProjectDetails(details) {
    try {
        const res = await API.get(`/projects/${details}`)
        return res.data
    } catch (e) {
        return e.response.data;
    }
}

export async function generateMetadata({ params: { details } }) {
    const data = await getProjectDetails(details)
    try {
        return {
            title: details,
            keywords: data.data.name,
            description: `Amir Ashour ${data.data.name}`
        }
    } catch (e) {
        return
    }
}


export const revalidate = +process.env.time;

async function page({ params: { details } }) {

    const data = await getProjectDetails(details)
    return (
        <div className='p-2 md:p-3 '>
            {
                data.status ? (
                    <div className='container mx-auto md:px-5 my-5'>
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
                        this product was not found
                    </h3>
                )
            }
        </div>
    )
}

export default page
