import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ServerSideServices({data}) {
    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-10 lg:gap-10 mb-10 mt-20">
            {data?.map((item) => (
                <Link className='hover:scale-90 transition-all duration-500' key={item.id} href={"/services/1"}>
                    <div className="relative w-full h-[300px] xl:h-[350px] overflow-hidden rounded-xl border border-orange-400">
                        <Image sizes='(min-width:992px) , 100vw' src={item.image} fill alt={item.title} />
                    </div>
                    <h1 className='mt-3 text-center capitalize lg:text-xl'>{item.title}</h1>
                </Link>
            ))}
        </div>
    )
}

export default ServerSideServices
