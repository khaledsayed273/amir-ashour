"use client"
import API from '../../../api/API'
import React, { useEffect, useState } from 'react'
import { Toaster, toast } from 'sonner'

function FormComponent() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [user_name, setUser_name] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    useEffect(() => {
        setUser_name(`${firstName} ${lastName}`)
    }, [firstName, lastName])

    const HandleSend = async (e) => {
        e.preventDefault()
        try {
            const req = await API.post(`https://admin.vintage-artgallery.com/api/v1/contact`, { user_name, email, phone, message }, {
            })
            toast.success(req?.data?.message)
            setFirstName("")
            setLastName("")
            setUser_name("")
            setEmail("")
            setPhone("")
            setMessage("")
            console.log(req);

        } catch (e) {
            toast.error(e?.response?.data?.message)
        }

    }

    return (
        <>
            <div data-aos="fade-up" className="bg-white rounded-xl p-5 md:p-7 mt-10">
                <form>
                    <div data-aos="fade-up" data-aos-duration="1000" className="grid md:grid-cols-2 gap-4 lg:gap-14">
                        <div >
                            <label htmlFor="firstName" className="inline-block text-sm font-medium leading-6 text-gray-900 capitalize">first name</label>
                            <div className="mt-2">
                                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} id="firstName" name="firstName" type="text" autoComplete="firstName" required className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 outline-none ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-800 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="lastName" className="inline-block text-sm font-medium leading-6 text-gray-900 capitalize">last name</label>
                            <div className="mt-2">
                                <input value={lastName} onChange={(e) => setLastName(e.target.value)} id="lastName" name="lastName" type="text" autoComplete="lastName" className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 outline-none ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-800 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000" className="grid md:grid-cols-2 gap-4 lg:gap-14 my-5">
                        <div>
                            <label htmlFor="email" className="inline-block text-sm font-medium leading-6 text-gray-900 capitalize">email</label>
                            <div className="mt-2">
                                <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" type="email" autoComplete="email" required className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm  ring-1 outline-none ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-800 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="phone" className="inline-block text-sm font-medium leading-6 text-gray-900 capitalize">phone</label>
                            <div className="mt-2">
                                <input value={phone} onChange={(e) => setPhone(e.target.value)} id="phone" name="phone" type="number" autoComplete="phone" required className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 outline-none ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-800 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                    </div>
                    <label data-aos="fade-up" data-aos-duration="1000" className='inline-block text-sm font-medium leading-6 text-gray-900 capitalize' htmlFor="messages">messages</label>
                    <textarea data-aos="fade-up" data-aos-duration="1000" value={message} onChange={(e) => setMessage(e.target.value)} id="messages" className="resize-none rounded-md w-full h-[200px] mt-5  p-3 block border-0 py-1.5 text-gray-900 shadow-sm ring-1 outline-none ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-800 sm:text-sm sm:leading-6"></textarea>

                    <div data-aos="fade-up" data-aos-duration="1000" className='flex flex-col sm:flex-row items-center justify-between mt-5'>
                        <div data-aos="fade-up" data-aos-duration="1000" className="flex h-6 items-center ">
                            <input id="comments" name="comments" type="checkbox" className="h-4 w-4 rounded border-gray-300  text-indigo-600 accent-amber-600 focus:ring-indigo-600" />
                            <label htmlFor="comments" className="font-medium ms-2 text-sm select-none text-gray-900">I agree with terms of usage and privacy policy.</label>
                        </div>
                        <button data-aos="fade-up" data-aos-duration="1000" onClick={HandleSend} className='capitalize mt-10 sm:mt-0  font-semibold bg-amber-600 text-white hover:opacity-50 border-grayColor  px-8 py-1.5 rounded-full'>submit</button>
                    </div>
                </form>

            </div>
            <Toaster richColors expand={true} position="top-right" />
        </>
    )
}

export default FormComponent
